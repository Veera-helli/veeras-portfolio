// SShapeText.tsx
export default function SShapeText() {
    return (
      <svg width="500" height="200" viewBox="0 0 500 200">
        <defs>
          <path
            id="s-curve"
            d="M 70,150
               Q 130,50 250,90
               T 450,50"
            fill="none"
          />
        </defs>
        <text fontSize="26" fontFamily="Open Sans" fill="var(--color-red-950)" fontWeight="300" letterSpacing={1}>
          <textPath href="#s-curve" startOffset="0%">
            Let's connect!
          </textPath>
        </text>
      </svg>
    );
  }