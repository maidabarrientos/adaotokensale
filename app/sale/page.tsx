"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ConnectWalletButton } from "@/components/web3/ConnectWalletButton"
import { useTokenSale } from "@/hooks/useTokenSale"
import { useNetwork } from "wagmi"

export default function SalePage() {
  const {
    amount,
    setAmount,
    isConnected,
    totalRaised,
    hardCap,
    progress,
    handlePurchase,
    getTokenAmount,
    tokenPrice,
    minPurchase,
    maxPurchase,
  } = useTokenSale()
  const { chain } = useNetwork()

  const isWrongNetwork = chain?.id !== 84532

  return (
    <div className="container py-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-4">ADAO Token Sale</h1>
          <p className="text-muted-foreground">
            Join the future of autonomous digital assets
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Current Sale Stage: Seed Sale</CardTitle>
            <CardDescription>
              Token Price: {tokenPrice} ETH
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between mb-2 text-sm">
                <span>Progress</span>
                <span>{progress.toFixed(2)}%</span>
              </div>
              <Progress value={progress} className="h-2" />
              <div className="flex justify-between mt-1 text-sm text-muted-foreground">
                <span>${totalRaised.toLocaleString()}</span>
                <span>${hardCap.toLocaleString()}</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="amount">Amount in Tokens</Label>
              <Input
                id="amount"
                placeholder="Enter amount"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <p className="text-sm text-muted-foreground">
                Cost: {amount ? (Number(amount) * tokenPrice).toFixed(4) : "0"} ETH
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-4">
            {!isConnected ? (
              <ConnectWalletButton />
            ) : isWrongNetwork ? (
              <Button variant="destructive" className="w-full" disabled>
                Please switch to Base Sepolia
              </Button>
            ) : (
              <Button className="w-full" onClick={handlePurchase}>
                Purchase Tokens
              </Button>
            )}
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Important Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>• Minimum purchase: {minPurchase} Tokens</p>
            <p>• Maximum purchase: {maxPurchase} Tokens</p>
            <p>• Network: Base Sepolia Testnet</p>
            <p>• Currency: Sepolia ETH</p>
            <p>• Tokens will be distributed after the sale ends</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}