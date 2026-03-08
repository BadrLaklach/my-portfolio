"use client";

const technologies = [
    { name: "Next.js", icon: "nextdotjs", invertInDark: true },
    { name: "TypeScript", icon: "typescript", invertInDark: false },
    { name: "Tailwind CSS", icon: "tailwindcss", invertInDark: false },
    { name: "Flutter", icon: "flutter", invertInDark: false },
    { name: "Python", icon: "python", invertInDark: false },
    { name: "FastAPI", icon: "fastapi", invertInDark: false },
    { name: "Docker", icon: "docker", invertInDark: false },
    { name: "PostgreSQL", icon: "postgresql", invertInDark: false },
    { name: "Supabase", icon: "supabase", invertInDark: false },
    { name: "Firebase", icon: "firebase", invertInDark: false },
    { name: "React", icon: "react", invertInDark: false },
    { name: "Three.js", icon: "threedotjs", invertInDark: true },
    { name: "Git", icon: "git", invertInDark: false },
    { name: "GitHub", icon: "github", invertInDark: true },
];

export default function TechGrid() {
    return (
        <section className="pb-16 sm:pb-32 bg-gray-50 dark:bg-[#121212]">
            <div className="max-w-7xl mx-auto px-6 sm:px-12">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 sm:gap-6 mt-12 sm:mt-16">
                    {technologies.map((tech) => (
                        <div
                            key={tech.name}
                            className="bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-gray-800 rounded-2xl p-4 sm:p-6 flex flex-col items-center justify-center gap-4 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-gray-200 dark:hover:border-gray-700"
                            title={tech.name}
                        >
                            {/* Icon Container with Hover Greyscale to Color effect */}
                            <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                                <img
                                    src={`https://cdn.simpleicons.org/${tech.icon}`}
                                    alt={tech.name}
                                    className={`w-full h-full object-contain ${tech.invertInDark ? 'dark:invert group-hover:dark:invert-0' : ''}`}
                                />
                            </div>
                            <span className="text-sm sm:text-base font-medium text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300 text-center">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
