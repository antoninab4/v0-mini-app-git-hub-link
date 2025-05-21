"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Token = {
  symbol: string
  name: string
  balance: number
  type: string
}

type User = {
  name: string
  asbt: string
  tonWallet: string
  email: string
  totalRewards: number
  completedTasks: number
}

type AppContextType = {
  tokens: Token[]
  updateTokenBalance: (symbol: string, amount: number) => void
  user: User
  updateUser: (data: Partial<User>) => void
  claimedDaily: boolean
  setClaimedDaily: (claimed: boolean) => void
  followedTwitter: boolean
  setFollowedTwitter: (followed: boolean) => void
  joinedChannel: boolean
  setJoinedChannel: (joined: boolean) => void
  connectedWallet: boolean
  setConnectedWallet: (connected: boolean) => void
  showNotification: (message: string) => void
  notificationMessage: string
  clearNotification: () => void
  transactionHistory: Array<{
    type: string
    date: string
    amount: string
    positive: boolean
  }>
  addTransaction: (transaction: { type: string; amount: string; positive: boolean }) => void
  showSendForm: boolean
  setShowSendForm: (show: boolean) => void
  showHistory: boolean
  setShowHistory: (show: boolean) => void
  mintedPersonalNFT: boolean
  setMintedPersonalNFT: (minted: boolean) => void
  mintedTribeNFT: boolean
  setMintedTribeNFT: (minted: boolean) => void
  invitedFriend: boolean
  setInvitedFriend: (invited: boolean) => void
  claimedXL: boolean
  setClaimedXL: (claimed: boolean) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [tokens, setTokens] = useState<Token[]>([
    { symbol: "L", name: "L Token", balance: 0, type: "Token" },
    { symbol: "ERB", name: "ERB", balance: 0, type: "Native Coin" },
    { symbol: "XL", name: "XL Token", balance: 0, type: "Token" },
  ])

  const [user, setUser] = useState<User>({
    name: "wnt0x",
    asbt: "------",
    tonWallet: "------",
    email: "------",
    totalRewards: 450,
    completedTasks: 3,
  })

  const [claimedDaily, setClaimedDaily] = useState(false)
  const [followedTwitter, setFollowedTwitter] = useState(false)
  const [joinedChannel, setJoinedChannel] = useState(false)
  const [connectedWallet, setConnectedWallet] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState("")
  const [transactionHistory, setTransactionHistory] = useState([
    { type: "Reward Claim", date: "May 20, 2025", amount: "300 L", positive: true },
    { type: "Twitter Follow", date: "May 19, 2025", amount: "150 L", positive: true },
    { type: "Initial Bonus", date: "May 18, 2025", amount: "100 L", positive: true },
  ])
  const [showSendForm, setShowSendForm] = useState(false)
  const [showHistory, setShowHistory] = useState(false)
  const [mintedPersonalNFT, setMintedPersonalNFT] = useState(false)
  const [mintedTribeNFT, setMintedTribeNFT] = useState(false)
  const [invitedFriend, setInvitedFriend] = useState(false)
  const [claimedXL, setClaimedXL] = useState(false)

  const updateTokenBalance = (symbol: string, amount: number) => {
    setTokens((prev) =>
      prev.map((token) => {
        if (token.symbol === symbol) {
          return { ...token, balance: token.balance + amount }
        }
        return token
      }),
    )
  }

  const updateUser = (data: Partial<User>) => {
    setUser((prev) => ({ ...prev, ...data }))
  }

  const showNotification = (message: string) => {
    setNotificationMessage(message)
    setTimeout(() => {
      setNotificationMessage("")
    }, 3000)
  }

  const clearNotification = () => {
    setNotificationMessage("")
  }

  const addTransaction = (transaction: { type: string; amount: string; positive: boolean }) => {
    const date = new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    setTransactionHistory((prev) => [{ ...transaction, date }, ...prev])
  }

  return (
    <AppContext.Provider
      value={{
        tokens,
        updateTokenBalance,
        user,
        updateUser,
        claimedDaily,
        setClaimedDaily,
        followedTwitter,
        setFollowedTwitter,
        joinedChannel,
        setJoinedChannel,
        connectedWallet,
        setConnectedWallet,
        showNotification,
        notificationMessage,
        clearNotification,
        transactionHistory,
        addTransaction,
        showSendForm,
        setShowSendForm,
        showHistory,
        setShowHistory,
        mintedPersonalNFT,
        setMintedPersonalNFT,
        mintedTribeNFT,
        setMintedTribeNFT,
        invitedFriend,
        setInvitedFriend,
        claimedXL,
        setClaimedXL,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider")
  }
  return context
}
