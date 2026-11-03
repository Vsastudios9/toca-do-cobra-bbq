type Props = {
  size?: number;
  className?: string;
  withRing?: boolean;
};

// Signature seal: stylized flame inside a red circle — mirrors the Instagram profile mark.
export function FlameSeal({ size = 56, className = "", withRing = true }: Props) {
  return (
    <span
      className={`inline-grid place-items-center rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: "var(--red-ember)",
        boxShadow: withRing
          ? "0 0 0 2px var(--bg-base), 0 0 0 3px var(--gold-brass), 0 10px 30px -10px color-mix(in oklab, var(--red-ember) 60%, transparent)"
          : "0 10px 30px -10px color-mix(in oklab, var(--red-ember) 60%, transparent)",
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        width={size * 0.55}
        height={size * 0.55}
        fill="none"
        stroke="var(--cream-bone)"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2.5c1.2 3.2.6 5.1-1.1 6.7-2 1.9-3.2 3.5-3.2 6 0 3.5 2.8 6.3 6.3 6.3s6.3-2.7 6.3-6.1c0-3-1.6-5-3.3-6.7 0 1.5-.7 2.4-1.7 2.4-1.9 0-1.7-3.6-3.3-8.6Z" />
        <path d="M11.2 15c.3 1.7 1.2 2.6 2.6 2.6" opacity="0.7" />
      </svg>
    </span>
  );
}
