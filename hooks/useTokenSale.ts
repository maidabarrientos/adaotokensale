"use client"

import { useState, useCallback } from "react"
import { useAccount, useNetwork } from "wagmi"
import { parseEther } from "viem"
import { toast } from "sonner"
import {
  TOKEN_PRICE,
  MIN_PURCHASE,
  MAX_PURCHASE,
  HARD_CAP,
  TOTAL_RAISED,
} from "@/lib/web3/constants"

export function useTokenSale() {
  const [amount, setAmount] = useState("")
  const { isConnected } = useAccount()
  const { chain } = useNetwork()

  // Using the constant instead of contract read due to testnet limitations
  const totalRaised = TOTAL_RAISED
  const progress = (totalRaised * 100) / HARD_CAP

  const getTokenAmount = useCallback((amount: string) => {
    if (!amount || isNaN(Number(amount))) return "0"
    return (Number(amount) / TOKEN_PRICE).toFixed(2)
  }, [])

  const handlePurchase = useCallback(async () => {
    if (!isConnected) {
      toast.error("Please connect your wallet")
      return
    }

    if (chain?.id !== 84532) {
      toast.error("Please switch to Base Sepolia network")
      return
    }

    if (!amount) {
      toast.error("Please enter an amount")
      return
    }

    const numAmount = Number(amount)
    if (numAmount < MIN_PURCHASE) {
      toast.error(`Minimum purchase amount is ${MIN_PURCHASE} tokens`)
      return
    }

    if (numAmount > MAX_PURCHASE) {
      toast.error(`Maximum purchase amount is ${MAX_PURCHASE} tokens`)
      return
    }

    try {
      // For demo purposes, just show success
      toast.success("Transaction initiated! Please confirm in your wallet.")
    } catch (error) {
      toast.error("Transaction failed. Please try again.")
      console.error(error)
    }
  }, [amount, isConnected, chain?.id])

  return {
    amount,
    setAmount,
    isConnected,
    totalRaised,
    hardCap: HARD_CAP,
    progress,
    handlePurchase,
    getTokenAmount,
    tokenPrice: TOKEN_PRICE,
    minPurchase: MIN_PURCHASE,
    maxPurchase: MAX_PURCHASE,
  }
}