export function RobotAgent() {
  return (
    <div className="relative w-64 h-64">
      {/* Dollar icon */}
      <div className="absolute top-10 left-0 bg-black rounded-full w-10 h-10 flex items-center justify-center z-10">
        <span className="text-white text-xl font-bold">$</span>
      </div>

      {/* Cube icon */}
      <div className="absolute top-0 right-0 bg-[#c5ff00] border-2 border-black rounded-full w-12 h-12 flex items-center justify-center z-10">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
            stroke="black"
            strokeWidth="2"
          />
          <polyline points="3.29 7 12 12 20.71 7" stroke="black" strokeWidth="2" />
          <line x1="12" y1="22" x2="12" y2="12" stroke="black" strokeWidth="2" />
        </svg>
      </div>

      {/* Robot */}
      <div className="relative z-0">
        <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Robot Head */}
          <rect x="70" y="50" width="100" height="80" rx="10" fill="white" stroke="black" strokeWidth="4" />

          {/* Robot Screen/Face */}
          <rect x="85" y="65" width="70" height="40" rx="5" fill="black" stroke="black" strokeWidth="2" />

          {/* Screen Bars/Graph */}
          <rect x="95" y="75" width="8" height="20" fill="#FFD700" />
          <rect x="107" y="70" width="8" height="25" fill="#FFD700" />
          <rect x="119" y="80" width="8" height="15" fill="#FFD700" />
          <rect x="131" y="65" width="8" height="30" fill="#FFD700" />
          <rect x="143" y="75" width="8" height="20" fill="#FFD700" />

          {/* Robot Antenna */}
          <circle cx="120" cy="40" r="6" fill="white" stroke="black" strokeWidth="2" />
          <line x1="120" y1="46" x2="120" y2="50" stroke="black" strokeWidth="3" />

          {/* Robot Body */}
          <rect x="85" y="130" width="70" height="40" rx="5" fill="white" stroke="black" strokeWidth="4" />

          {/* Robot Arms */}
          <path d="M70 140 L 40 140 L 40 160 L 70 160 Z" fill="#888888" stroke="black" strokeWidth="3" />
          <path d="M170 140 L 200 140 L 200 160 L 170 160 Z" fill="#888888" stroke="black" strokeWidth="3" />

          {/* Robot Hands */}
          <circle cx="40" cy="150" r="10" fill="white" stroke="black" strokeWidth="3" />
          <circle cx="200" cy="150" r="10" fill="white" stroke="black" strokeWidth="3" />

          {/* Robot Control Panel */}
          <rect x="70" y="180" width="100" height="20" rx="5" fill="#DDDDDD" stroke="black" strokeWidth="3" />

          {/* Robot Button */}
          <circle cx="120" cy="190" r="8" fill="#c5ff00" stroke="black" strokeWidth="2" />

          {/* Text */}
          <text x="100" y="195" fill="black" fontSize="10" fontWeight="bold">
            AGENT
          </text>

          {/* Robot @ Symbol */}
          <circle cx="120" cy="110" r="10" fill="white" stroke="black" strokeWidth="2" />
          <text x="116" y="114" fill="black" fontSize="14" fontWeight="bold">
            @
          </text>
        </svg>
      </div>
    </div>
  )
}
