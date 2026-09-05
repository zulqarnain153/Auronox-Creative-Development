export default function ContactIllustration() {
  return (
    <svg
      viewBox="0 0 600 400"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="contactGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8C7CFF" />
          <stop offset="50%" stopColor="#45D6C0" />
          <stop offset="100%" stopColor="#FF7FAE" />
        </linearGradient>
        <filter id="contactSoftBlur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="34" />
        </filter>
      </defs>

      {/* ambient glow */}
      <circle
        cx="300"
        cy="200"
        r="170"
        fill="url(#contactGrad)"
        opacity="0.16"
        filter="url(#contactSoftBlur)"
      />

      {/* back bubble: incoming message */}
      <g transform="rotate(-6 190 190)">
        <path
          d="M66 90h250a24 24 0 0 1 24 24v130a24 24 0 0 1-24 24H110l-30 26v-26H66a24 24 0 0 1-24-24V114a24 24 0 0 1 24-24z"
          fill="#141625"
          stroke="#F4F3F8"
          strokeOpacity="0.09"
        />
        <circle cx="102" cy="132" r="16" fill="url(#contactGrad)" opacity="0.9" />
        <rect x="130" y="122" width="120" height="7" rx="3.5" fill="#9896AC" fillOpacity="0.35" />
        <rect x="130" y="140" width="80" height="7" rx="3.5" fill="#9896AC" fillOpacity="0.25" />
        <rect x="66" y="172" width="270" height="7" rx="3.5" fill="#9896AC" fillOpacity="0.25" />
        <rect x="66" y="192" width="230" height="7" rx="3.5" fill="#9896AC" fillOpacity="0.25" />
        <rect x="66" y="212" width="250" height="7" rx="3.5" fill="#9896AC" fillOpacity="0.25" />
      </g>

      {/* front bubble: our reply */}
      <g transform="rotate(4 400 230)">
        <path
          d="M534 340H274a24 24 0 0 1-24-24V186a24 24 0 0 1 24-24h260a24 24 0 0 1 24 24v130a24 24 0 0 1-24 24h-4l30 26v-26z"
          fill="#12141F"
          stroke="#F4F3F8"
          strokeOpacity="0.09"
        />
        <circle cx="310" cy="222" r="22" fill="url(#contactGrad)" />
        <path
          d="M301 222l7 7 13-15"
          stroke="#0B0D14"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <rect x="346" y="212" width="150" height="8" rx="4" fill="#F4F3F8" fillOpacity="0.85" />
        <rect x="346" y="230" width="110" height="7" rx="3.5" fill="#9896AC" fillOpacity="0.3" />
        <rect x="290" y="270" width="180" height="7" rx="3.5" fill="#9896AC" fillOpacity="0.25" />
        <rect x="290" y="290" width="130" height="7" rx="3.5" fill="#9896AC" fillOpacity="0.25" />
        <rect x="290" y="312" width="80" height="18" rx="9" fill="#F4F3F8" />
      </g>

      {/* floating accents */}
      <circle cx="110" cy="60" r="5" fill="#45D6C0" />
      <circle cx="560" cy="90" r="4" fill="#FF7FAE" />
      <circle cx="60" cy="330" r="4" fill="#8C7CFF" />
      <circle cx="540" cy="350" r="5" fill="#45D6C0" />
    </svg>
  );
}
