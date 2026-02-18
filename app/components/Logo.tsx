import Image from "next/image";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/my-portfolio/logo.png"
      alt="BL Logo"
      width={32}
      height={32}
      className={className}
      priority
    />
  );
}
