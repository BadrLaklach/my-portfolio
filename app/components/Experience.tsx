"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/useLanguage";

export default function Experience() {
    const { t } = useLanguage();

    const getIcon = (id: string) => {
        switch (id) {
            case "hawqai":
                return (
                    <div className="relative flex h-full w-full items-center justify-center p-4">
                        <Image
                            src="/my-portfolio/assets/hawqai/logo-black.png"
                            alt="HawQ-ai logo"
                            fill
                            sizes="(max-width: 640px) 100vw, 288px"
                            className="object-contain p-4 dark:hidden"
                        />
                        <Image
                            src="/my-portfolio/assets/hawqai/logo-white.png"
                            alt=""
                            fill
                            sizes="(max-width: 640px) 100vw, 288px"
                            className="hidden object-contain p-4 dark:block"
                        />
                    </div>
                );
            case "medyouin":
                return (
                    <div className="relative h-full w-full p-4">
                        <Image
                            src="/my-portfolio/assets/medyouin.png"
                            alt="Med You In"
                            fill
                            sizes="(max-width: 640px) 100vw, 288px"
                            className="object-contain p-4 invert transition-all duration-300 dark:invert-0"
                        />
                    </div>
                );
            case "gadzit":
                return (
                    <div className="flex h-full w-full flex-col items-center justify-center p-4">
                        <span className="text-center text-4xl font-black leading-none tracking-widest text-[#191919] dark:text-white sm:text-5xl">
                            Gadz&apos;IT
                        </span>
                        <span className="mt-2 text-center text-xs font-medium uppercase tracking-widest text-gray-500 dark:text-gray-400 sm:text-sm">
                            Informatique A&amp;M
                        </span>
                    </div>
                );
            case "fame":
                return (
                    <div className="flex h-full w-full flex-col items-center justify-center p-4">
                        <span className="text-center text-5xl font-black leading-none tracking-widest text-[#191919] dark:text-white sm:text-6xl">
                            FAME
                        </span>
                        <span className="mt-2 text-center text-xs font-medium uppercase tracking-widest text-gray-500 dark:text-gray-400 sm:text-sm">
                            Forum Arts &amp; Metiers Entreprises
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
            className="bg-gray-50 pb-8 pt-32 dark:bg-[#121212]"
        >
            <div className="mx-auto max-w-7xl px-6 sm:px-12">
                <div className="mb-16 sm:mb-20">
                    <div className="flex items-end gap-6 sm:gap-8">
                        <h2 className="whitespace-nowrap text-5xl font-bold text-gray-900 dark:text-white sm:text-6xl lg:text-7xl">
                            {t.experience.title}
                        </h2>
                        <div className="mb-2 h-[3px] w-full bg-gray-900/30 dark:bg-white/30" />
                    </div>
                </div>

                <div className="space-y-24">
                    {t.experience.items.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col items-start gap-8 md:flex-row md:gap-12"
                        >
                            <div className="w-full flex-shrink-0 md:w-auto">
                                <div className="relative flex h-48 w-full items-center justify-center transition-all duration-300 group sm:h-48 sm:w-72">
                                    {getIcon(item.id)}
                                </div>
                            </div>

                            <div className="w-full flex-1">
                                <div className="relative h-full space-y-12">
                                    <div className="absolute bottom-[-40px] left-[7px] top-2 w-[2px] bg-[#191919] opacity-20 dark:bg-white dark:opacity-20 md:opacity-100 md:dark:opacity-100" />

                                    <div className="relative pl-8">
                                        <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-[#191919] ring-4 ring-gray-50 dark:bg-white dark:ring-[#121212]" />

                                        <div className="mb-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                                            <div className="min-w-0 flex-1">
                                                <h3 className="text-xl font-bold uppercase text-[#191919] transition-colors dark:text-white">
                                                    {item.link ? (
                                                        <a
                                                            href={item.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="transition-opacity hover:opacity-70"
                                                        >
                                                            {item.company}
                                                        </a>
                                                    ) : (
                                                        item.company
                                                    )}
                                                </h3>
                                                <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                                                    {item.role} {" · "} {item.location}
                                                </p>
                                            </div>
                                            <span className="flex-shrink-0 whitespace-nowrap text-sm italic text-gray-600 dark:text-gray-400 sm:pt-1">
                                                {item.date}
                                            </span>
                                        </div>

                                        <div className="mt-6">
                                            <ul className="space-y-4">
                                                {item.achievements.map((achievement, index) => (
                                                    <li
                                                        key={index}
                                                        className="flex gap-3 text-base leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg"
                                                    >
                                                        <span className="font-bold text-[#191919] dark:text-white">
                                                            {"•"}
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
