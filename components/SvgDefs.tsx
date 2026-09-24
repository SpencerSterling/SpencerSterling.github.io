export default function SvgDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <filter id="grain" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves={2}
            stitchTiles="stitch"
            result="noise"
          />
          <feColorMatrix
            in="noise"
            type="matrix"
            values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.55 0"
          />
        </filter>
        <symbol id="icon-photo" viewBox="0 0 48 48">
          <circle cx="33" cy="13" r="4.5" fill="currentColor" />
          <path d="M3 37 L16 21 L25 30 L33 19 L45 37 Z" fill="currentColor" />
        </symbol>
      </defs>
    </svg>
  );
}
