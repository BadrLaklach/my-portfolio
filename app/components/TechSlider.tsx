"use client";

import Image from "next/image";

const technologies = [
    { name: "Next.js", icon: "nextdotjs" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Tailwind CSS", icon: "tailwindcss" },
    { name: "Flutter", icon: "flutter" },
    { name: "Python", icon: "python" },
    { name: "FastAPI", icon: "fastapi" },
    { name: "Docker", icon: "docker" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "Supabase", icon: "supabase" },
    { name: "Firebase", icon: "firebase" },
    { name: "React", icon: "react" },
    { name: "Three.js", icon: "threedotjs" },
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
];

export default function TechSlider() {
    // Double the technologies to create a seamless loop
    const duplicatedTechs = [...technologies, ...technologies];

    return (
        <div className="w-full bg-white dark:bg-[#0a0a0a] py-12 overflow-hidden border-y border-gray-100 dark:border-gray-900">
            <div className="relative flex overflow-x-hidden">
                <div className="animate-marquee flex whitespace-nowrap items-center hover:[animation-play-state:paused]">
                    {duplicatedTechs.map((tech, index) => (
                        <div
                            key={`${tech.name}-${index}`}
                            className="mx-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110"
                            title={tech.name}
                        >
                            <div className="relative w-12 h-12 flex items-center justify-center">
                                <img
                                    src={`https://cdn.simpleicons.org/${tech.icon}/717171`}
                                    alt={tech.name}
                                    className="w-10 h-10 object-contain dark:invert transition-all duration-300"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Second set for seamless loop */}
                <div className="absolute top-0 animate-marquee2 flex whitespace-nowrap items-center hover:[animation-play-state:paused]">
                    {duplicatedTechs.map((tech, index) => (
                        <div
                            key={`${tech.name}-loop-${index}`}
                            className="mx-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110"
                            title={tech.name}
                        >
                            <div className="relative w-12 h-12 flex items-center justify-center">
                                <img
                                    src={`https://cdn.simpleicons.org/${tech.icon}/717171`}
                                    alt={tech.name}
                                    className="w-10 h-10 object-contain dark:invert transition-all duration-300"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 40s linear infinite;
        }
        .animate-marquee2 {
          display: flex;
          animation: marquee2 40s linear infinite;
        }
      `}</style>
        </div>
    );
}
