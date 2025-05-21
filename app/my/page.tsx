"use client"
import Link from "next/link"
import { ArrowLeft, Home, Scan, Wallet, User, ExternalLink, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAppContext } from "@/context/app-context"

export default function MyPage() {
  const {
    showNotification,
    updateTokenBalance,
    addTransaction,
    mintedPersonalNFT,
    setMintedPersonalNFT,
    mintedTribeNFT,
    setMintedTribeNFT,
    claimedXL,
    setClaimedXL,
  } = useAppContext()

  const handleConnectTonWallet = () => {
    showNotification("TON Wallet connection initiated")
  }

  const handleClaimXLTokens = () => {
    if (claimedXL) {
      showNotification("You have already claimed XL tokens")
      return
    }
    updateTokenBalance("XL", 100)
    setClaimedXL(true)
    showNotification("Successfully claimed 100 XL tokens!")
    addTransaction({ type: "XL Token Claim", amount: "100 XL", positive: true })
  }

  const handleMintPersonalNFT = () => {
    if (mintedPersonalNFT) {
      showNotification("You have already minted a personal NFT")
      return
    }
    setMintedPersonalNFT(true)
    showNotification("Successfully minted personal NFT!")
  }

  const handleMintTribeNFT = () => {
    if (mintedTribeNFT) {
      showNotification("You have already minted a tribe NFT")
      return
    }
    setMintedTribeNFT(true)
    showNotification("Successfully minted tribe NFT!")
  }

  const handleIconClick = (icon: string) => {
    showNotification(`${icon} functionality will be implemented soon`)
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
          {/* User Profile */}
          <div className="mb-6 border rounded-lg p-4">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-[#c5ff00] flex items-center justify-center mr-3 text-xl font-bold">
                W
              </div>
              <div>
                <div className="font-bold">TG Name: wnt0x</div>
              </div>
            </div>

            <div className="mb-4">
              <div className="h-4 flex justify-center space-x-1">
                {Array.from({ length: 15 }).map((_, i) => (
                  <div key={i} className="w-1 h-full bg-black"></div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="border rounded-lg p-3 flex justify-between items-center">
                <div className="font-medium">My ASBT</div>
                <div>------</div>
              </div>
              <div className="border rounded-lg p-3 flex justify-between items-center">
                <div className="font-medium">Ton Wallet</div>
                <div className="flex items-center">
                  <span>------</span>
                  <button
                    className="ml-2 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center"
                    onClick={handleConnectTonWallet}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="border rounded-lg p-3 flex justify-between items-center">
                <div className="font-medium">My Email</div>
                <div>------</div>
              </div>
            </div>
          </div>

          {/* Icon Row */}
          <div className="mb-6 bg-black p-2 rounded-lg flex justify-between">
            <button
              className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center"
              onClick={() => handleIconClick("Add")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="16" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
            </button>
            <button
              className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center"
              onClick={() => handleIconClick("Profile")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="10" r="3" />
                <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
              </svg>
            </button>
            <button
              className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center"
              onClick={() => handleIconClick("Flag")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                <line x1="4" y1="22" x2="4" y2="15" />
              </svg>
            </button>
            <button
              className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center"
              onClick={() => handleIconClick("Help")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
            </button>
            <button
              className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center"
              onClick={() => handleIconClick("Security")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </button>
            <button
              className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center"
              onClick={() => handleIconClick("Info")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="16" x2="12" y2="12" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
              </svg>
            </button>
          </div>

          {/* FreeClaim Button */}
          <div className="mb-6">
            <Button
              className="w-full bg-[#c5ff00] text-black hover:bg-[#b3e600] rounded-lg h-12 flex justify-between items-center"
              onClick={handleClaimXLTokens}
              disabled={claimedXL}
            >
              <div className="flex items-center">
                <span className="font-bold">{claimedXL ? "✓ XL Tokens Claimed" : "FreeClaim XL Tokens"}</span>
                <Info size={16} className="ml-2" />
              </div>
              <ExternalLink size={16} />
            </Button>
          </div>

          {/* NFT Portfolio */}
          <div className="border rounded-lg overflow-hidden mb-6">
            <div className="p-3 text-center font-bold bg-gray-200">{">>>>> My NFT Portfolio <<<<<"}</div>

            {/* Personal NFT */}
            <div className="p-4 border-b">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <span className="font-medium">Personal NFT: {mintedPersonalNFT ? "Minted" : "--"}</span>
                  <Info size={16} className="ml-2 text-gray-500" />
                </div>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span>Chain:</span>
                <div className="flex items-center">
                  <span className="text-green-500 mr-1">+</span>
                  <div className="w-5 h-5 rounded-full bg-yellow-400"></div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <Button
                    className="w-full bg-gray-300 text-gray-600 hover:bg-gray-400 rounded-lg h-10"
                    onClick={handleMintPersonalNFT}
                    disabled={mintedPersonalNFT}
                  >
                    {mintedPersonalNFT ? "✓ Minted" : "Free Mint"}
                  </Button>
                </div>
                <div className="bg-gray-200 rounded-lg flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="10" r="3" />
                    <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Tribe NFT */}
            <div className="p-4">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <span className="font-medium">Tribe NFT: {mintedTribeNFT ? "Minted" : "--"}</span>
                  <Info size={16} className="ml-2 text-gray-500" />
                </div>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span>Members:</span>
                <span>{mintedTribeNFT ? "1" : "--"}</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span>Chain:</span>
                <div className="flex items-center">
                  <span className="text-green-500 mr-1">+</span>
                  <div className="w-5 h-5 rounded-full bg-yellow-400"></div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <Button
                    className="w-full bg-gray-300 text-gray-600 hover:bg-gray-400 rounded-lg h-10"
                    onClick={handleMintTribeNFT}
                    disabled={mintedTribeNFT}
                  >
                    {mintedTribeNFT ? "✓ Minted" : "Free Mint"}
                  </Button>
                </div>
                <div className="bg-gray-200 rounded-lg flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="10" r="3" />
                    <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
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
          <Link href="/wallet" className="flex flex-col items-center justify-center text-black font-medium">
            <Wallet size={18} />
            <span className="text-xs mt-1">WALLET</span>
          </Link>
          <Link href="/my" className="flex flex-col items-center justify-center bg-[#c5ff00] text-black font-medium">
            <User size={18} />
            <span className="text-xs mt-1">MY</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
