export default function BuildIllustration() {
  return (
    <svg
      viewBox="0 0 600 400"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="buildHeroGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8C7CFF" />
          <stop offset="50%" stopColor="#45D6C0" />
          <stop offset="100%" stopColor="#FF7FAE" />
        </linearGradient>
        <filter id="buildSoftBlur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="34" />
        </filter>
      </defs>

      {/* ambient glow */}
      <circle
        cx="300"
        cy="200"
        r="170"
        fill="url(#buildHeroGrad)"
        opacity="0.16"
        filter="url(#buildSoftBlur)"
      />

      {/* back card: code editor */}
      <g transform="rotate(-7 190 180)">
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
        <circle cx="62" cy="94" r="4" fill="#9896AC" fillOpacity="0.3" />
        <circle cx="78" cy="94" r="4" fill="#9896AC" fillOpacity="0.3" />
        <circle cx="94" cy="94" r="4" fill="#9896AC" fillOpacity="0.3" />
        <rect x="62" y="122" width="80" height="6" rx="3" fill="#8C7CFF" fillOpacity="0.75" />
        <rect x="150" y="122" width="140" height="6" rx="3" fill="#9896AC" fillOpacity="0.25" />
        <rect x="80" y="146" width="200" height="6" rx="3" fill="#9896AC" fillOpacity="0.25" />
        <rect x="80" y="168" width="150" height="6" rx="3" fill="#45D6C0" fillOpacity="0.75" />
        <rect x="62" y="192" width="90" height="6" rx="3" fill="#9896AC" fillOpacity="0.25" />
        <rect x="80" y="216" width="220" height="6" rx="3" fill="#9896AC" fillOpacity="0.25" />
        <rect x="80" y="240" width="120" height="6" rx="3" fill="#9896AC" fillOpacity="0.25" />
        <rect x="62" y="264" width="180" height="6" rx="3" fill="#FF7FAE" fillOpacity="0.75" />
      </g>

      {/* front card: browser mockup */}
      <g transform="rotate(4 380 220)">
        <rect
          x="220"
          y="90"
          width="330"
          height="230"
          rx="16"
          fill="#12141F"
          stroke="#F4F3F8"
          strokeOpacity="0.09"
        />
        <path
          d="M220 106a16 16 0 0 1 16-16h298a16 16 0 0 1 16 16v18H220v-18z"
          fill="#0B0D14"
        />
        <circle cx="244" cy="107" r="4" fill="#9896AC" fillOpacity="0.35" />
        <circle cx="260" cy="107" r="4" fill="#9896AC" fillOpacity="0.35" />
        <circle cx="276" cy="107" r="4" fill="#9896AC" fillOpacity="0.35" />
        <rect x="300" y="101" width="200" height="12" rx="6" fill="#9896AC" fillOpacity="0.12" />
        <rect
          x="244"
          y="144"
          width="282"
          height="88"
          rx="10"
          fill="url(#buildHeroGrad)"
          opacity="0.9"
        />
        <rect x="244" y="250" width="180" height="8" rx="4" fill="#9896AC" fillOpacity="0.25" />
        <rect x="244" y="268" width="230" height="8" rx="4" fill="#9896AC" fillOpacity="0.25" />
        <rect x="244" y="292" width="92" height="20" rx="10" fill="#F4F3F8" />
      </g>

      {/* floating accents */}
      <circle cx="118" cy="58" r="5" fill="#45D6C0" />
      <circle cx="562" cy="78" r="4" fill="#FF7FAE" />
      <circle cx="58" cy="322" r="4" fill="#8C7CFF" />
      <circle cx="542" cy="342" r="5" fill="#45D6C0" />
    </svg>
  );
}
