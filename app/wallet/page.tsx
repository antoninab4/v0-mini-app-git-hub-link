"use client"
import Link from "next/link"
import type React from "react"

import { ArrowLeft, Home, Scan, Wallet, User, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAppContext } from "@/context/app-context"
import { useState } from "react"

export default function WalletPage() {
  const {
    tokens,
    updateTokenBalance,
    showNotification,
    transactionHistory,
    showSendForm,
    setShowSendForm,
    showHistory,
    setShowHistory,
  } = useAppContext()
  const [address, setAddress] = useState("")
  const [amount, setAmount] = useState("")
  const [selectedToken, setSelectedToken] = useState("ERB")

  const handleCopyAddress = () => {
    navigator.clipboard.writeText("0x80e...5969b")
    showNotification("Address copied to clipboard")
  }

  const handleSend = () => {
    setShowSendForm(true)
    setShowHistory(false)
  }

  const handleHistory = () => {
    setShowHistory(true)
    setShowSendForm(false)
  }

  const handleSendToken = (e: React.FormEvent) => {
    e.preventDefault()
    if (!address || !amount) {
      showNotification("Please fill in all fields")
      return
    }

    const amountNum = Number.parseFloat(amount)
    if (isNaN(amountNum) || amountNum <= 0) {
      showNotification("Please enter a valid amount")
      return
    }

    const token = tokens.find((t) => t.symbol === selectedToken)
    if (!token || token.balance < amountNum) {
      showNotification("Insufficient balance")
      return
    }

    updateTokenBalance(selectedToken, -amountNum)
    showNotification(`Successfully sent ${amount} ${selectedToken} to ${address}`)
    setAddress("")
    setAmount("")
    setShowSendForm(false)
  }

  const handleBindEmail = () => {
    showNotification("Email binding functionality will be implemented soon")
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="flex items-center justify-between h-16 px-4">
          <div className="flex items-center">
            <Link href="/" className="mr-3">
              <ArrowLeft size={24} />
            </Link>
            <h1 className="text-xl font-bold text-[#5d4037]">АНО</h1>
          </div>
          <div className="flex">
            <button className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="1" />
                <circle cx="12" cy="5" r="1" />
                <circle cx="12" cy="19" r="1" />
              </svg>
            </button>
            <button className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <div className="px-4 py-6 mx-auto max-w-md">
          {/* Wallet Header */}
          <div className="mb-4 border rounded-lg p-3 flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-[#c5ff00] flex items-center justify-center mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" />
                  <path d="M4 6v12c0 1.1.9 2 2 2h14v-4" />
                  <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z" />
                </svg>
              </div>
              <span className="font-bold">My Wallet</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm mr-2">0x80e...5969b</span>
              <button className="w-6 h-6 flex items-center justify-center" onClick={handleCopyAddress}>
                <Copy size={16} />
              </button>
            </div>
          </div>

          {/* Send/History Buttons */}
          <div className="mb-4 grid grid-cols-2 gap-2">
            <Button
              className={`${showSendForm ? "bg-[#c5ff00]" : "bg-white border border-gray-300"} text-black hover:bg-[#b3e600] rounded-md h-12`}
              onClick={handleSend}
            >
              Send
            </Button>
            <Button
              className={`${showHistory ? "bg-[#c5ff00]" : "bg-white border border-gray-300"} text-black hover:bg-[#b3e600] rounded-md h-12`}
              onClick={handleHistory}
            >
              History
            </Button>
          </div>

          {!showHistory && !showSendForm && (
            <div className="mb-4 space-y-2">
              {tokens.map((token) => (
                <div key={token.symbol} className="border rounded-lg p-3 flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="font-bold mr-2">{token.symbol}</span>
                    <span className="bg-[#c5ff00] text-black px-2 py-0.5 rounded text-sm">{token.type}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-bold">
                      {token.balance} {token.symbol}
                    </span>
                    <div className="ml-2 w-6 h-6 border rounded flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
              <div className="border rounded-lg p-3 flex justify-between items-center">
                <div className="flex items-center">
                  <span className="font-bold mr-2">XL</span>
                  <span className="bg-[#c5ff00] text-black px-2 py-0.5 rounded text-sm">Token</span>
                </div>
                <div className="flex items-center">
                  <span className="font-bold text-sm mr-2">To Claim</span>
                  <div className="ml-2 w-6 h-6 border rounded flex items-center justify-center bg-[#c5ff00]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 3H8a2 2 0 0 0-2 2v16l6-3 6 3V5a2 2 0 0 0-2-2z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}

          {showHistory && (
            <div className="mb-4 border rounded-lg overflow-hidden">
              <div className="bg-[#c5ff00] p-3 text-center font-bold">Transaction History</div>
              {transactionHistory.map((tx, index) => (
                <div key={index} className="border-b p-4 last:border-b-0">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium">{tx.type}</div>
                      <div className="text-sm text-gray-500">{tx.date}</div>
                    </div>
                    <div className={tx.positive ? "text-green-600 font-medium" : "text-red-600 font-medium"}>
                      {tx.positive ? "+" : "-"}
                      {tx.amount}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {showSendForm && (
            <div className="mb-4">
              <div className="text-center mb-2 relative">
                <div className="absolute left-0 right-0 top-1/2 border-t border-gray-300"></div>
                <span className="relative bg-white px-4 text-gray-600">Send Token</span>
              </div>

              <form onSubmit={handleSendToken} className="space-y-3">
                <div className="border rounded-lg overflow-hidden">
                  <div className="flex items-center p-3">
                    <span className="flex-1">Select network</span>
                    <div className="flex space-x-2">
                      <div className="w-6 h-6 rounded-full bg-yellow-400 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                          <line x1="12" y1="9" x2="12" y2="13" />
                          <line x1="12" y1="17" x2="12.01" y2="17" />
                        </svg>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-purple-400 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <line x1="14.31" y1="8" x2="20.05" y2="17.94" />
                          <line x1="9.69" y1="8" x2="21.17" y2="8" />
                          <line x1="7.38" y1="12" x2="13.12" y2="2.06" />
                          <line x1="9.69" y1="16" x2="3.95" y2="6.06" />
                          <line x1="14.31" y1="16" x2="2.83" y2="16" />
                          <line x1="16.62" y1="12" x2="10.88" y2="21.94" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <Input
                  placeholder="Enter the address"
                  className="h-12 rounded-lg"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />

                <div className="relative">
                  <Input
                    placeholder="Enter amount"
                    className="h-12 rounded-lg pr-16"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    type="number"
                    min="0"
                    step="0.01"
                  />
                  <select
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 font-bold bg-transparent"
                    value={selectedToken}
                    onChange={(e) => setSelectedToken(e.target.value)}
                  >
                    {tokens.map((token) => (
                      <option key={token.symbol} value={token.symbol}>
                        {token.symbol}
                      </option>
                    ))}
                  </select>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-black text-white hover:bg-gray-800 rounded-lg h-12"
                  onClick={handleBindEmail}
                >
                  Bind Email To Confirm
                </Button>
              </form>
            </div>
          )}
        </div>
      </main>

      {/* Bottom Navigation */}
      <div className="sticky bottom-0 z-10 bg-white border-t">
        <div className="grid grid-cols-4 h-14">
          <Link href="/" className="flex flex-col items-center justify-center text-black font-medium">
            <Home size={18} />
            <span className="text-xs mt-1">HOME</span>
          </Link>
          <Link href="/scan" className="flex flex-col items-center justify-center text-black font-medium">
            <Scan size={18} />
            <span className="text-xs mt-1">SCAN</span>
          </Link>
          <Link
            href="/wallet"
            className="flex flex-col items-center justify-center bg-[#c5ff00] text-black font-medium"
          >
            <Wallet size={18} />
            <span className="text-xs mt-1">WALLET</span>
          </Link>
          <Link href="/my" className="flex flex-col items-center justify-center text-black font-medium">
            <User size={18} />
            <span className="text-xs mt-1">MY</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
