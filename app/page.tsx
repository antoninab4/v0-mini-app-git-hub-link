"use client"
import { Button } from "@/components/ui/button"
import { Home, Scan, Wallet, User } from "lucide-react"
import Link from "next/link"
import { RobotAgent } from "@/components/robot-agent"
import { useAppContext } from "@/context/app-context"

export default function HomePage() {
  const {
    claimedDaily,
    setClaimedDaily,
    followedTwitter,
    setFollowedTwitter,
    joinedChannel,
    setJoinedChannel,
    connectedWallet,
    setConnectedWallet,
    invitedFriend,
    setInvitedFriend,
    updateTokenBalance,
    showNotification,
    addTransaction,
  } = useAppContext()

  const handleFreeClaim = () => {
    if (claimedDaily) {
      showNotification("You have already claimed your daily reward")
      return
    }
    updateTokenBalance("L", 300)
    setClaimedDaily(true)
    showNotification("Successfully claimed 300 L tokens!")
    addTransaction({ type: "Daily Claim", amount: "300 L", positive: true })
  }

  const handleFollowTwitter = () => {
    if (followedTwitter) {
      showNotification("You have already followed Twitter")
      return
    }
    updateTokenBalance("L", 150)
    setFollowedTwitter(true)
    showNotification("Successfully followed Twitter and received 150 L tokens!")
    addTransaction({ type: "Twitter Follow", amount: "150 L", positive: true })
  }

  const handleJoinChannel = () => {
    if (joinedChannel) {
      showNotification("You have already joined the TG channel")
      return
    }
    updateTokenBalance("L", 100)
    setJoinedChannel(true)
    showNotification("Successfully joined TG channel and received 100 L tokens!")
    addTransaction({ type: "Join TG Channel", amount: "100 L", positive: true })
  }

  const handleInviteFriend = () => {
    if (invitedFriend) {
      showNotification("You have already invited a friend")
      return
    }
    updateTokenBalance("L", 300)
    setInvitedFriend(true)
    showNotification("Friend invitation sent! You received 300 L tokens!")
    addTransaction({ type: "Friend Invitation", amount: "300 L", positive: true })
  }

  const handleConnectWallet = () => {
    if (connectedWallet) {
      showNotification("Wallet is already connected")
      return
    }
    updateTokenBalance("L", 200)
    setConnectedWallet(true)
    showNotification("Successfully connected TON wallet and received 200 L tokens!")
    addTransaction({ type: "Wallet Connection", amount: "200 L", positive: true })
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="flex items-center justify-between h-16 px-4">
          <h1 className="text-xl font-bold text-[#5d4037]">АНО</h1>
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
          {/* Daily Blind Box Card */}
          <div className="mb-6">
            <div className="text-center mb-2">
              <h2 className="text-xl font-bold">{">>>>> DAILY BLIND BOX <<<<<"}</h2>
            </div>
            <div className="bg-[#c5ff00] p-6 flex justify-center rounded-t-lg">
              <RobotAgent />
            </div>
            <div className="bg-[#c5ff00] px-4 py-2 flex justify-between items-center rounded-b-lg border-t border-black">
              <div className="flex items-center">
                <span className="mr-2">📝</span>
                <span className="font-medium">Rewards: 300L</span>
              </div>
              <Button
                className="bg-white text-black hover:bg-gray-100 font-medium rounded-md px-4 h-8"
                onClick={handleFreeClaim}
                disabled={claimedDaily}
              >
                {claimedDaily ? "✓ Claimed" : "🎁 FreeClaim"}
              </Button>
            </div>
          </div>

          {/* Token Rewards Card */}
          <div className="mb-6 border rounded-lg bg-gray-200">
            <div className="p-2 text-center">
              <h3 className="text-lg font-bold">{">>>>> L Token Rewards <<<<<"}</h3>
            </div>
            <div className="p-2 space-y-2">
              <div className="border rounded-lg overflow-hidden bg-white">
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center">
                    <div className="mr-3 text-lg">📁</div>
                    <div>
                      <div className="font-medium">Follow Twitter</div>
                      <div className="text-sm text-gray-500 flex items-center">
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
                          className="mr-1"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        +150L
                      </div>
                    </div>
                  </div>
                  <Button
                    className="bg-[#c5ff00] text-black hover:bg-[#b3e600] rounded-md px-6 h-8"
                    onClick={handleFollowTwitter}
                    disabled={followedTwitter}
                  >
                    {followedTwitter ? "✓ Followed" : "Follow"}
                  </Button>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden bg-white">
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center">
                    <div className="mr-3 text-lg">📁</div>
                    <div>
                      <div className="font-medium">Join TG Channel</div>
                      <div className="text-sm text-gray-500 flex items-center">
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
                          className="mr-1"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        +100L
                      </div>
                    </div>
                  </div>
                  <Button
                    className="bg-[#c5ff00] text-black hover:bg-[#b3e600] rounded-md px-6 h-8"
                    onClick={handleJoinChannel}
                    disabled={joinedChannel}
                  >
                    {joinedChannel ? "✓ Joined" : "Join"}
                  </Button>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden bg-white">
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center">
                    <div className="mr-3 text-lg">📁</div>
                    <div>
                      <div className="font-medium">Invite a Friend</div>
                      <div className="text-sm text-gray-500">+300L to each</div>
                    </div>
                  </div>
                  <Button
                    className="bg-green-200 text-green-800 hover:bg-green-300 rounded-md px-6 h-8"
                    onClick={handleInviteFriend}
                    disabled={invitedFriend}
                  >
                    {invitedFriend ? "✓ Invited" : "Invite"}
                  </Button>
                </div>
              </div>

              <div className="border rounded-lg overflow-hidden bg-[#c5ff00]">
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center">
                    <div className="mr-3 text-lg">📁</div>
                    <div>
                      <div className="font-medium">Connect Ton Wallet</div>
                      <div className="text-sm flex items-center">
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
                          className="mr-1"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        +200L
                      </div>
                    </div>
                  </div>
                  <Button
                    className="bg-white text-black hover:bg-gray-100 rounded-md px-6 h-8"
                    onClick={handleConnectWallet}
                    disabled={connectedWallet}
                  >
                    {connectedWallet ? "✓ Connected" : "Connect"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <div className="sticky bottom-0 z-10 bg-white border-t">
        <div className="grid grid-cols-4 h-14">
          <Link href="/" className="flex flex-col items-center justify-center bg-[#c5ff00] text-black font-medium">
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
          <Link href="/my" className="flex flex-col items-center justify-center text-black font-medium">
            <User size={18} />
            <span className="text-xs mt-1">MY</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
