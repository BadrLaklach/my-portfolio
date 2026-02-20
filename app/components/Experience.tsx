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
                    <div className="relative pl-8 sm:pl-12">
                        {/* Timeline line */}
                        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-200 dark:bg-gray-800"></div>

                        <div className="relative mb-12">
                            {/* Timeline dot */}
                            <div className="absolute -left-[33px] sm:-left-[41px] top-0 w-4 h-4 rounded-full bg-[#191919] dark:bg-white border-4 border-gray-50 dark:border-[#121212] z-10"></div>

                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                                <div className="flex items-center gap-4">
                                    <div className="relative w-12 h-12 bg-white dark:bg-gray-800 rounded-lg overflow-hidden flex-shrink-0 border border-gray-200 dark:border-gray-700">
                                        <Image
                                            src="/my-portfolio/assets/medyouin.png"
                                            alt={t.experience.medyouin.company}
                                            fill
                                            sizes="48px"
                                            className="object-contain p-1 invert dark:invert-0 transition-all duration-300"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                            {t.experience.medyouin.role}
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-gray-600 dark:text-gray-400 font-medium">
                                            <a
                                                href={t.experience.medyouin.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-gray-900 dark:hover:text-white transition-colors"
                                            >
                                                {t.experience.medyouin.company}
                                            </a>
                                            <span>•</span>
                                            <span>{t.experience.medyouin.location}</span>
                                        </div>
                                    </div>
                                </div>
                                <span className="inline-block px-3 py-1 bg-gray-100 dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-300 rounded-full text-sm font-semibold whitespace-nowrap">
                                    {t.experience.medyouin.date}
                                </span>
                            </div>

                            <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow duration-300">
                                <ul className="space-y-4">
                                    {t.experience.medyouin.achievements.map((achievement, index) => (
                                        <li key={index} className="flex gap-3 text-gray-700 dark:text-gray-300 leading-relaxed">
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
