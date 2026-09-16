"use client";

import { useState, useEffect } from "react";
import { translations, type Language } from "./translations";

export function useLanguage() {
  const [language, setLanguage] = useState<Language>("fr");

  useEffect(() => {
    const browserLang = navigator.language.toLowerCase();
    const detectedLang = browserLang.startsWith("fr") ? "fr" : "en";
    // Language detection runs after hydration to avoid server/client markup drift.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLanguage(detectedLang);
  }, []);

  const t = translations[language];

  return { language, setLanguage, t };
}
