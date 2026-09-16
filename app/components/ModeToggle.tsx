"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/lib/useLanguage";

export function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const uniqueId = React.useId();
  const { t } = useLanguage();
  const isDark = mounted && resolvedTheme === "dark";

  React.useEffect(() => {
    // The toggle is hydrated before reading the resolved client-side theme.
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const doc = document as Document & {
      startViewTransition?: (callback: () => void) => void;
    };
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";

    if (doc.startViewTransition) {
      doc.startViewTransition(() => setTheme(nextTheme));
      return;
    }

    document.body.setAttribute("transition-style", "in:custom:circle-swoop");
    setTimeout(() => setTheme(nextTheme), 50);
    setTimeout(() => document.body.removeAttribute("transition-style"), 500);
  };

  return (
    <label
      htmlFor={`themeToggle-${uniqueId}`}
      className="relative block h-6 w-6 cursor-pointer text-current transition-transform duration-300 hover:-rotate-[15deg]"
      title={t.nav.modeToggle}
    >
      <input
        type="checkbox"
        id={`themeToggle-${uniqueId}`}
        className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
        checked={isDark}
        disabled={!mounted}
        onChange={toggleTheme}
        aria-label={t.nav.modeToggle}
        readOnly={!mounted}
      />
      <svg
        width={28}
        height={28}
        viewBox="0 0 20 20"
        fill="currentColor"
        stroke="none"
        aria-hidden="true"
        className={`absolute inset-0 h-6 w-6 transition-transform duration-400 ${isDark ? "rotate-90" : "rotate-[40deg]"}`}
      >
        <mask id={`moon-mask-${uniqueId}`}>
          <rect x={0} y={0} width={20} height={20} fill="white" />
          <circle cx={11} cy={3} r={8} fill="black" />
        </mask>
        <circle
          cx={10}
          cy={10}
          r={8}
          mask={`url(#moon-mask-${uniqueId})`}
          className="origin-center transition-transform duration-400"
          style={{ transform: isDark ? "scale(0.55)" : "scale(1)" }}
        />
        <g
          className={`transition-opacity duration-400 ${isDark ? "opacity-100" : "opacity-0"}`}
        >
          <circle cx={18} cy={10} r="1.5" />
          <circle cx={14} cy="16.928" r="1.5" />
          <circle cx={6} cy="16.928" r="1.5" />
          <circle cx={2} cy={10} r="1.5" />
          <circle cx={6} cy="3.1718" r="1.5" />
          <circle cx={14} cy="3.1718" r="1.5" />
        </g>
      </svg>
    </label>
  );
}
