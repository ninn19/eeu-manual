export default function EEULogo({ size = 40 }) {
  return (
    <img
      src="/logo.png"
      alt="EEU Logo"
      width={size}
      height={size}
      style={{ objectFit: 'contain' }}
    />
  );
}