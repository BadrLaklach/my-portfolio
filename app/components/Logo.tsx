import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/my-portfolio/logo.png"
      alt="BL Logo"
      width={40}
      height={40}
      className={`invert dark:invert-0 transition-colors ${className}`}
      priority
    />
  );
}
