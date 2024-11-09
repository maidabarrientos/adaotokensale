"use client"

import { useState } from "react"
import Link from "next/link"
import { useTheme } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Moon, Sun, Menu, X } from "lucide-react"
import { ConnectWalletButton } from "@/components/web3/ConnectWalletButton"

export default function Header() {
  const { setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">ADAO</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/tokenomics" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Tokenomics
            </Link>
            <Link href="/sale" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Token Sale
            </Link>
            <Link href="/whitepaper" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Whitepaper
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="hidden md:block">
            <ConnectWalletButton />
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="flex flex-col p-4 space-y-4">
            <Link href="/tokenomics" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Tokenomics
            </Link>
            <Link href="/sale" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Token Sale
            </Link>
            <Link href="/whitepaper" className="transition-colors hover:text-foreground/80 text-foreground/60">
              Whitepaper
            </Link>
            <div className="pt-2">
              <ConnectWalletButton />
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}