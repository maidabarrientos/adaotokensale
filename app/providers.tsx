"use client"

import { ThemeProvider } from "@/components/theme-provider"
import { WalletProvider } from "@/components/web3/WalletProvider"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <WalletProvider>{children}</WalletProvider>
    </ThemeProvider>
  )
}