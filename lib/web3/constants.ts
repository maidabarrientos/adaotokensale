export const TOKEN_SALE_ADDRESS = process.env.NEXT_PUBLIC_TOKEN_SALE_ADDRESS as `0x${string}`
export const TOKEN_ADDRESS = process.env.NEXT_PUBLIC_TOKEN_ADDRESS as `0x${string}`
export const TOKEN_PRICE = Number(process.env.NEXT_PUBLIC_TOKEN_PRICE || "0.0062")
export const MIN_PURCHASE = Number(process.env.NEXT_PUBLIC_MIN_PURCHASE || "100")
export const MAX_PURCHASE = Number(process.env.NEXT_PUBLIC_MAX_PURCHASE || "50000")
export const TOTAL_RAISED = Number(process.env.NEXT_PUBLIC_TOTAL_RAISED || "2500000")
export const HARD_CAP = Number(process.env.NEXT_PUBLIC_HARD_CAP || "6166858")
export const TOTAL_SUPPLY = Number(process.env.NEXT_PUBLIC_TOTAL_SUPPLY || "1000000000")

export const TOKEN_SALE_ABI = [
  {
    inputs: [],
    name: "buyTokens",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalRaised",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "hardCap",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
] as const

export const TOKEN_ABI = [
  {
    inputs: [{ name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function",
  },
] as const