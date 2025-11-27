export default function Logo({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0%" stopColor="#22d3ee"/>
          <stop offset="100%" stopColor="#38bdf8"/>
        </linearGradient>
      </defs>
      <polygon points="50,5 93,28 93,72 50,95 7,72 7,28" fill="url(#g)" opacity="0.9" />
      <text x="50" y="59" textAnchor="middle" fontSize="40" fontWeight="800" fill="#001018" fontFamily="Inter, system-ui">DM</text>
    </svg>
  )
}
