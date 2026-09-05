export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 600 400"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="heroIllGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8C7CFF" />
          <stop offset="50%" stopColor="#45D6C0" />
          <stop offset="100%" stopColor="#FF7FAE" />
        </linearGradient>
      </defs>

      {/* back card: AI network */}
      <g transform="rotate(-7 190 175)">
        <rect
          x="40"
          y="70"
          width="300"
          height="210"
          rx="16"
          fill="#141625"
          stroke="#F4F3F8"
          strokeOpacity="0.09"
        />
        <line x1="90" y1="110" x2="160" y2="95" stroke="#9896AC" strokeOpacity="0.25" strokeWidth="1.5" />
        <line x1="160" y1="95" x2="230" y2="130" stroke="#9896AC" strokeOpacity="0.25" strokeWidth="1.5" />
        <line x1="90" y1="110" x2="120" y2="170" stroke="#9896AC" strokeOpacity="0.25" strokeWidth="1.5" />
        <line x1="120" y1="170" x2="200" y2="190" stroke="#9896AC" strokeOpacity="0.25" strokeWidth="1.5" />
        <line x1="230" y1="130" x2="200" y2="190" stroke="#8C7CFF" strokeOpacity="0.6" strokeWidth="1.5" />
        <line x1="230" y1="130" x2="280" y2="150" stroke="#9896AC" strokeOpacity="0.25" strokeWidth="1.5" />
        <line x1="200" y1="190" x2="160" y2="230" stroke="#45D6C0" strokeOpacity="0.6" strokeWidth="1.5" />
        <line x1="120" y1="170" x2="160" y2="230" stroke="#9896AC" strokeOpacity="0.25" strokeWidth="1.5" />
        <circle cx="90" cy="110" r="7" fill="#8C7CFF" />
        <circle cx="160" cy="95" r="6" fill="#9896AC" fillOpacity="0.5" />
        <circle cx="230" cy="130" r="8" fill="#45D6C0" />
        <circle cx="120" cy="170" r="6" fill="#9896AC" fillOpacity="0.5" />
        <circle cx="200" cy="190" r="7" fill="#FF7FAE" />
        <circle cx="280" cy="150" r="6" fill="#9896AC" fillOpacity="0.5" />
        <circle cx="160" cy="230" r="6" fill="#9896AC" fillOpacity="0.5" />
      </g>

      {/* front card: webpage mockup */}
      <g transform="rotate(4 400 210)">
        <rect
          x="230"
          y="90"
          width="320"
          height="220"
          rx="16"
          fill="#12141F"
          stroke="#F4F3F8"
          strokeOpacity="0.09"
        />
        <path
          d="M230 106a16 16 0 0 1 16-16h288a16 16 0 0 1 16 16v18H230v-18z"
          fill="#0B0D14"
        />
        <circle cx="254" cy="107" r="4" fill="#9896AC" fillOpacity="0.35" />
        <circle cx="270" cy="107" r="4" fill="#9896AC" fillOpacity="0.35" />
        <circle cx="286" cy="107" r="4" fill="#9896AC" fillOpacity="0.35" />
        <rect x="310" y="101" width="190" height="12" rx="6" fill="#9896AC" fillOpacity="0.12" />
        <rect
          x="254"
          y="140"
          width="272"
          height="86"
          rx="10"
          fill="url(#heroIllGrad)"
          opacity="0.9"
        />
        <rect x="254" y="244" width="170" height="8" rx="4" fill="#9896AC" fillOpacity="0.25" />
        <rect x="254" y="262" width="220" height="8" rx="4" fill="#9896AC" fillOpacity="0.25" />
        <rect x="254" y="286" width="90" height="20" rx="10" fill="#F4F3F8" />
      </g>

      {/* floating accents */}
      <circle cx="120" cy="55" r="5" fill="#45D6C0" />
      <circle cx="560" cy="75" r="4" fill="#FF7FAE" />
      <circle cx="60" cy="330" r="4" fill="#8C7CFF" />
    </svg>
  );
}
