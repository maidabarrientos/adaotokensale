"use client"

import { ReactNode, useEffect, useState } from "react"
import { WagmiConfig } from "wagmi"
import { RainbowKitProvider, darkTheme, lightTheme } from "@rainbow-me/rainbowkit"
import { useTheme } from "next-themes"
import { chains, config } from "@/lib/web3/config"
import "@rainbow-me/rainbowkit/styles.css"

export function WalletProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider
        chains={chains}
        theme={resolvedTheme === "dark" ? darkTheme() : lightTheme()}
        modalSize="compact"
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}