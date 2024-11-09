import { getDefaultWallets } from "@rainbow-me/rainbowkit"
import { configureChains, createConfig } from "wagmi"
import { Chain } from "wagmi/chains"
import { publicProvider } from "wagmi/providers/public"

const baseSepolia: Chain = {
  id: 84532,
  name: 'Base Sepolia',
  network: 'base-sepolia',
  nativeCurrency: {
    decimals: 18,
    name: 'Sepolia ETH',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: { http: ['https://sepolia.base.org'] },
    public: { http: ['https://sepolia.base.org'] },
  },
  blockExplorers: {
    default: { name: 'BaseScan', url: 'https://sepolia.basescan.org' },
  },
  testnet: true,
}

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [baseSepolia],
  [publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: "ADAO Token Sale",
  projectId: "adao_token_sale",
  chains,
})

export const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
})

export { chains }