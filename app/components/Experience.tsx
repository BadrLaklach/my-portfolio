"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/useLanguage";

export default function Experience() {
    const { t } = useLanguage();

    const getIcon = (id: string) => {
        switch (id) {
            case "medyouin":
                return (
                    <div className="relative w-full h-full p-4">
                        <Image
                            src="/my-portfolio/assets/medyouin.png"
                            alt="Med You In"
                            fill
                            sizes="(max-width: 640px) 100vw, 288px"
                            className="object-contain invert dark:invert-0 transition-all duration-300 p-4"
                        />
                    </div>
                );
            case "gadzit":
                return (
                    <div className="w-full h-full flex flex-col items-center justify-center p-4">
                        <span className="text-[#191919] dark:text-white font-black text-4xl sm:text-5xl tracking-widest text-center leading-none">
                            Gadz'IT
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 font-medium text-xs sm:text-sm tracking-widest mt-2 uppercase">
                            Informatique A&M
                        </span>
                    </div>
                );
            case "fame":
                return (
                    <div className="w-full h-full flex flex-col items-center justify-center p-4">
                        <span className="text-[#191919] dark:text-white font-black text-5xl sm:text-6xl tracking-widest text-center leading-none">
                            FAME
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 font-medium text-xs sm:text-sm tracking-widest mt-2 uppercase text-center">
                            Forum Arts & Métiers Entreprises
                        </span>
                    </div>
                );
            default:
                return null;
        }
    };

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

                <div className="space-y-24">
                    {t.experience.items.map((item) => (
                        <div key={item.id} className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
                            <div className="flex-shrink-0 w-full md:w-auto">
                                <div className="relative w-full h-48 sm:w-72 sm:h-48 flex items-center justify-center group transition-all duration-300 bg-white dark:bg-[#1a1a1a] rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md overflow-hidden">
                                    {getIcon(item.id)}
                                </div>
                            </div>

                            <div className="flex-1 w-full">
                                <div className="relative space-y-12 h-full">
                                    {/* Timeline line */}
                                    <div className="absolute left-[7px] top-2 bottom-[-40px] w-[2px] bg-[#191919] dark:bg-white opacity-20 dark:opacity-20 md:opacity-100 md:dark:opacity-100"></div>

                                    <div className="relative pl-8">
                                        {/* Timeline dot */}
                                        <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-[#191919] dark:bg-white ring-4 ring-gray-50 dark:ring-[#121212]"></div>

                                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-xl font-bold text-[#191919] dark:text-white uppercase transition-colors">
                                                    {item.link ? (
                                                        <a
                                                            href={item.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="hover:opacity-70 transition-opacity"
                                                        >
                                                            {item.company}
                                                        </a>
                                                    ) : (
                                                        item.company
                                                    )}
                                                </h3>
                                                <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                                                    {item.role} • {item.location}
                                                </p>
                                            </div>
                                            <span className="text-sm italic text-gray-600 dark:text-gray-400 whitespace-nowrap flex-shrink-0 sm:pt-1">
                                                {item.date}
                                            </span>
                                        </div>

                                        <div className="mt-6">
                                            <ul className="space-y-4">
                                                {item.achievements.map((achievement, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex gap-3 text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg"
                                                    >
                                                        <span className="text-[#191919] dark:text-white font-bold">
                                                            •
                                                        </span>
                                                        <span>{achievement}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
