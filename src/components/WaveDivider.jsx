export default function WaveDivider({ from, to, flip = false }) {
  return (
    <div
      className="w-full overflow-hidden leading-none -my-px"
      style={{ backgroundColor: from }}
    >
      <svg
        viewBox="0 0 1440 70"
        preserveAspectRatio="none"
        className={`w-full h-14 block ${flip ? 'scale-x-[-1]' : ''}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,35 C180,70 360,0 540,35 C720,70 900,0 1080,35 C1260,70 1350,15 1440,35 L1440,70 L0,70 Z"
          fill={to}
        />
      </svg>
    </div>
  )
}
