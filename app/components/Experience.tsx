"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/useLanguage";

export default function Experience() {
    const { t } = useLanguage();

    return (
        <section
            id={t.sections.experience}
            className="pt-32 pb-8 bg-gray-50 dark:bg-[#121212]"
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-12">
                <div className="mb-16 sm:mb-20">
                    <div className="flex items-end gap-6 sm:gap-8">
                        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
                            {t.experience.title}
                        </h2>
                        <div className="h-[3px] w-full bg-gray-900/30 dark:bg-white/30 mb-2"></div>
                    </div>
                </div>

                <div className="max-w-4xl">
                    <div className="relative space-y-12">
                        {/* Timeline line */}
                        <div
                            className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-[#191919] dark:bg-white"
                        ></div>

                        <div className="relative pl-8">
                            {/* Timeline dot */}
                            <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-[#191919] dark:bg-white"></div>

                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-3 mb-1">
                                        <div className="relative w-8 h-8 flex-shrink-0">
                                            <Image
                                                src="/my-portfolio/assets/medyouin.png"
                                                alt={t.experience.medyouin.company}
                                                fill
                                                sizes="32px"
                                                className="object-contain invert dark:invert-0 transition-all duration-300"
                                            />
                                        </div>
                                        <h3 className="text-lg font-bold text-[#191919] dark:text-white uppercase">
                                            <a
                                                href={t.experience.medyouin.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:opacity-70 transition-opacity"
                                            >
                                                {t.experience.medyouin.company}
                                            </a>
                                        </h3>
                                    </div>
                                    <p className="text-base font-medium text-gray-700 dark:text-gray-300">
                                        {t.experience.medyouin.role} • {t.experience.medyouin.location}
                                    </p>
                                </div>
                                <span className="text-sm italic text-gray-600 dark:text-gray-400 whitespace-nowrap flex-shrink-0 sm:pt-1">
                                    {t.experience.medyouin.date}
                                </span>
                            </div>

                            <div className="mt-4">
                                <ul className="space-y-3">
                                    {t.experience.medyouin.achievements.map((achievement, index) => (
                                        <li key={index} className="flex gap-3 text-gray-700 dark:text-gray-300 leading-relaxed text-base">
                                            <span className="text-[#191919] dark:text-white font-bold">•</span>
                                            <span>{achievement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
