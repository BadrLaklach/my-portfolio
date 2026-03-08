"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/useLanguage";

export default function Certifications() {
    const { t } = useLanguage();

    return (
        <section
            id={t.sections.certifications}
            className="pt-32 pb-8 bg-gray-50 dark:bg-[#121212]"
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-12">
                <div className="mb-16 sm:mb-20">
                    <div className="flex items-end gap-6 sm:gap-8">
                        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
                            {t.certifications.title}
                        </h2>
                        <div className="h-[3px] w-full bg-gray-900/30 dark:bg-white/30 mb-2"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {t.certifications.items.map((cert) => (
                        <div
                            key={cert.id}
                            className="bg-white dark:bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 border border-gray-100 dark:border-gray-800 flex flex-col h-full"
                        >
                            {/* Image Container */}
                            <div className="relative w-full h-56 bg-white dark:bg-[#1a1a1a] p-6 border-b border-gray-100 dark:border-gray-800 flex items-center justify-center overflow-hidden">
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gray-900 dark:bg-white transition-opacity duration-300"></div>
                                <div className="relative w-full h-full drop-shadow-sm">
                                    <Image
                                        src={cert.image}
                                        alt={cert.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-contain group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>

                            {/* Content Container */}
                            <div className="p-6 sm:p-8 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                                    {cert.title}
                                </h3>
                                
                                <p className="text-[#191919] dark:text-white font-semibold mb-1 opacity-90">
                                    {cert.issuer}
                                </p>
                                
                                <div className="flex flex-col gap-1 text-sm text-gray-500 dark:text-gray-400 mb-6">
                                    <span>{cert.date}</span>
                                    {cert.credentialId && (
                                        <span className="font-mono text-xs opacity-75">{cert.credentialId}</span>
                                    )}
                                </div>

                                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6 flex-grow">
                                    {cert.description}
                                </p>

                                {cert.skills && (
                                    <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-800">
                                        <p className="text-sm font-medium text-[#191919] dark:text-white opacity-90">
                                            {cert.skills}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
