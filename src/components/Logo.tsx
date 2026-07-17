export default function Logo({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="50" cy="54" r="42" fill="none" stroke="#000000" strokeWidth="9" />
      <polygon points="50,20 85,80 15,80" fill="#000000" />
    </svg>
  );
}
