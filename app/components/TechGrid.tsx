"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/useLanguage";

type Technology = {
    name: string;
    icon: string;
    invertInDark: boolean;
    customUrl?: string;
};

type TechCategory = {
    id: string;
    items: Technology[];
};

const categorizedTechs: TechCategory[] = [
    {
        id: "languages",
        items: [
            { name: "Python", icon: "python", invertInDark: false },
            { name: "Java", icon: "java", invertInDark: false, customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
            { name: "C#", icon: "csharp", invertInDark: false, customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
            { name: "C++", icon: "cplusplus", invertInDark: false },
            { name: "JavaScript", icon: "javascript", invertInDark: false },
            { name: "TypeScript", icon: "typescript", invertInDark: false },
            { name: "Dart", icon: "dart", invertInDark: false },
            { name: "SQL", icon: "sqlite", invertInDark: false },
            { name: "Bash", icon: "gnubash", invertInDark: true },
        ]
    },
    {
        id: "mobileWeb",
        items: [
            { name: "HTML5", icon: "html5", invertInDark: false },
            { name: "CSS3", icon: "css3", invertInDark: false, customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
            { name: "Flutter", icon: "flutter", invertInDark: false },
            { name: "React", icon: "react", invertInDark: false },
            { name: "Next.js", icon: "nextdotjs", invertInDark: true },
            { name: "Vite", icon: "vite", invertInDark: false },
            { name: "FastAPI", icon: "fastapi", invertInDark: false },
            { name: "Spring Boot", icon: "spring", invertInDark: false },
            { name: "Tailwind CSS", icon: "tailwindcss", invertInDark: false },
            { name: "Three.js", icon: "threedotjs", invertInDark: true },
        ]
    },
    {
        id: "dataAi",
        items: [
            { name: "TensorFlow", icon: "tensorflow", invertInDark: false },
            { name: "Scikit-Learn", icon: "scikitlearn", invertInDark: false },
            { name: "Pandas", icon: "pandas", invertInDark: true },
            { name: "NumPy", icon: "numpy", invertInDark: false },
            { name: "Groq", icon: "groq", invertInDark: false, customUrl: "/my-portfolio/tech/groq.svg" },
        ]
    },
    {
        id: "databases",
        items: [
            { name: "PostgreSQL", icon: "postgresql", invertInDark: false },
            { name: "MySQL", icon: "mysql", invertInDark: false },
            { name: "MongoDB", icon: "mongodb", invertInDark: false },
            { name: "SQLite", icon: "sqlite", invertInDark: false },
            { name: "Oracle", icon: "oracle", invertInDark: false, customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg" },
            { name: "Supabase", icon: "supabase", invertInDark: false },
            { name: "Firebase", icon: "firebase", invertInDark: false },
            { name: "MinIO", icon: "minio", invertInDark: false },
        ]
    },
    {
        id: "devops",
        items: [
            { name: "Docker", icon: "docker", invertInDark: false },
            { name: "Kubernetes", icon: "kubernetes", invertInDark: false },
            { name: "RabbitMQ", icon: "rabbitmq", invertInDark: false },
            { name: "Git", icon: "git", invertInDark: false },
            { name: "GitHub", icon: "github", invertInDark: true },
            { name: "GitHub Actions", icon: "githubactions", invertInDark: true },
            { name: "Linux", icon: "linux", invertInDark: false },
            { name: "Azure", icon: "microsoftazure", invertInDark: false, customUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" },
            { name: "Oracle Cloud", icon: "oracle", invertInDark: false },
            { name: "Maven", icon: "apachemaven", invertInDark: false },
            { name: "Postman", icon: "postman", invertInDark: false },
        ]
    },
    {
        id: "xr",
        items: [
            { name: "Unity", icon: "unity", invertInDark: true },
            { name: "Meta", icon: "meta", invertInDark: false },
        ]
    }
];

export default function TechGrid() {
    const { t } = useLanguage();

    return (
        <section
            id={t.sections.techStack}
            className="pt-32 pb-8 bg-gray-50 dark:bg-[#121212]"
        >
            <div className="max-w-7xl mx-auto px-6 sm:px-12">
                <div className="mb-12 sm:mb-16">
                    <div className="flex flex-wrap items-end gap-6 sm:gap-8">
                        {/* the whitespace-nowrap was removed to allow the text to wrap dynamically on mobile */}
                        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white">
                            {t.techStack.title}
                        </h2>
                        <div className="h-[3px] flex-grow min-w-[100px] w-full bg-gray-900/30 dark:bg-white/30 mb-2"></div>
                    </div>
                </div>

                <div className="flex flex-col gap-12 mt-8 sm:mt-12">
                    {categorizedTechs.map((category) => (
                        <div key={category.id}>
                            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                                {t.techStack.categories[category.id as keyof typeof t.techStack.categories]}
                            </h3>
                            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4">
                                {category.items.map((tech) => (
                                    <div
                                        key={tech.name}
                                        className="bg-white dark:bg-[#1a1a1a] border border-gray-100 dark:border-gray-800 rounded-xl p-3 sm:p-4 flex flex-col items-center justify-center gap-3 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:border-gray-200 dark:hover:border-gray-700"
                                        title={tech.name}
                                    >
                                        <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                                            <Image
                                                src={tech.customUrl || `https://cdn.simpleicons.org/${tech.icon}`}
                                                alt={tech.name}
                                                fill
                                                unoptimized
                                                className={`w-full h-full object-contain ${tech.invertInDark ? 'dark:invert group-hover:dark:invert-0' : ''}`}
                                            />
                                        </div>
                                        <span className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300 text-center line-clamp-1">
                                            {tech.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
