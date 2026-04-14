export default function WaveDivider({ from, to, flip = false }) {
  return (
    <div
      className="w-full overflow-hidden leading-none -my-px h-14"
      style={{ backgroundColor: from }}
    >
      <div
        className={`flex h-full animate-wave-slide${flip ? ' scale-x-[-1]' : ''}`}
        style={{ width: '200%' }}
      >
        {[0, 1].map((i) => (
          <svg
            key={i}
            viewBox="0 0 1440 70"
            preserveAspectRatio="none"
            className="h-full block flex-shrink-0"
            style={{ width: '50%' }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,35 C180,70 360,0 540,35 C720,70 900,0 1080,35 C1260,70 1350,15 1440,35 L1440,70 L0,70 Z"
              fill={to}
            />
          </svg>
        ))}
      </div>
    </div>
  )
}
