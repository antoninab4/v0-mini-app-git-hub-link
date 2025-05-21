import Link from "next/link"
import { ArrowLeft, Home, Scan, Wallet, User } from "lucide-react"

export default function ScanPage() {
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
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold">USER DATA SCAN</h2>
          </div>

          {/* Total Users */}
          <div className="mb-2 bg-[#c5ff00] rounded-lg p-3 flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3">
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
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
              <span className="font-bold">Total Users</span>
            </div>
            <span className="font-bold">228 905</span>
          </div>

          {/* Ton Wallet */}
          <div className="mb-4 bg-green-200 rounded-lg p-3 flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-3">
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
              <span className="font-bold">Ton Wallet</span>
            </div>
            <span className="font-bold">13 095</span>
          </div>

          {/* Stats Grid */}
          <div className="mb-4 grid grid-cols-2 gap-2 border rounded-lg overflow-hidden">
            <div className="p-4 flex flex-col items-center justify-center border-r border-b">
              <div className="mb-2">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="25" cy="25" r="20" fill="#c5ff00" />
                  <text x="15" y="30" fill="black" fontSize="10">
                    www
                  </text>
                </svg>
              </div>
              <div className="text-xl font-bold">204</div>
              <div className="text-sm text-gray-600">Channel Subscribers</div>
            </div>
            <div className="p-4 flex flex-col items-center justify-center border-b">
              <div className="mb-2">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="15" y="15" width="20" height="20" rx="2" fill="white" stroke="black" strokeWidth="2" />
                  <circle cx="25" cy="25" r="5" fill="#c5ff00" />
                  <line x1="10" y1="15" x2="5" y2="10" stroke="black" strokeWidth="2" />
                  <line x1="40" y1="15" x2="45" y2="10" stroke="black" strokeWidth="2" />
                  <line x1="10" y1="35" x2="5" y2="40" stroke="black" strokeWidth="2" />
                  <line x1="40" y1="35" x2="45" y2="40" stroke="black" strokeWidth="2" />
                </svg>
              </div>
              <div className="text-xl font-bold">3 955</div>
              <div className="text-sm text-gray-600">Community Members</div>
            </div>
            <div className="p-4 flex flex-col items-center justify-center col-span-2 border-t">
              <div className="mb-2 flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#c5ff00] flex items-center justify-center mr-2">
                  <span className="text-xl font-bold">$</span>
                </div>
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="10" y="10" width="30" height="30" rx="2" fill="white" stroke="black" strokeWidth="2" />
                  <text x="20" y="30" fill="black" fontSize="14">
                    @
                  </text>
                </svg>
                <div className="w-10 h-10 rounded-full bg-[#c5ff00] flex items-center justify-center ml-2">
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
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
              </div>
              <div className="text-xl font-bold">58272</div>
              <div className="text-sm text-gray-600">FreeClaim Times</div>
            </div>
          </div>

          {/* Invite Ranking */}
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-black text-white p-3 text-center font-bold">{">>>>> Invite Ranking <<<<<"}</div>
            <div className="bg-[#f0f8c5] p-2 grid grid-cols-3 font-bold border-b">
              <div>Rank</div>
              <div>Name</div>
              <div className="text-right">Rewards</div>
            </div>
            <div className="bg-white p-2 grid grid-cols-3 border-b">
              <div className="font-bold">999+</div>
              <div>QxWNT</div>
              <div className="text-right">⭕0L</div>
            </div>
            <div className="bg-white p-2 grid grid-cols-3 border-b">
              <div className="font-bold flex items-center">
                <span className="w-6 h-6 bg-[#c5ff00] rounded-full flex items-center justify-center mr-1">1</span>
              </div>
              <div>Christina 🐝 SEED PASTI.JP</div>
              <div className="text-right">⭕2 378 400L</div>
            </div>
            <div className="bg-white p-2 grid grid-cols-3 border-b">
              <div className="font-bold flex items-center">
                <span className="w-6 h-6 bg-[#c5ff00] rounded-full flex items-center justify-center mr-1">2</span>
              </div>
              <div>nast</div>
              <div className="text-right">⭕3 003 300L</div>
            </div>
            <div className="bg-white p-2 grid grid-cols-3 border-b">
              <div className="font-bold flex items-center">
                <span className="w-6 h-6 bg-[#c5ff00] rounded-full flex items-center justify-center mr-1">3</span>
              </div>
              <div>x one</div>
              <div className="text-right">⭕1 707 900L</div>
            </div>
            <div className="bg-white p-2 grid grid-cols-3 border-b">
              <div className="font-bold">4</div>
              <div>dedi</div>
              <div className="text-right">⭕1 690 200L</div>
            </div>
            <div className="bg-white p-2 grid grid-cols-3 border-b">
              <div className="font-bold">5</div>
              <div>karet</div>
              <div className="text-right">⭕1 656 600L</div>
            </div>
            <div className="bg-white p-2 grid grid-cols-3">
              <div className="font-bold">6</div>
              <div>trian tri</div>
              <div className="text-right">⭕1 586 700</div>
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
          <Link href="/scan" className="flex flex-col items-center justify-center bg-[#c5ff00] text-black font-medium">
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
