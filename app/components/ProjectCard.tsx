"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/useLanguage";

interface ProjectCardProps {
  images: string[];
  title: string;
  description: string;
  date: string;
  tags: string[];
  isVideo?: boolean;
  siteUrl?: string;
  imageFit?: "cover" | "contain";
  thumbnail?: string;
  videoAspectRatio?: string;
}

export default function ProjectCard({
  images,
  title,
  description,
  date,
  tags,
  isVideo = false,
  siteUrl,
  imageFit = "cover",
  thumbnail,
  videoAspectRatio = "aspect-video",
}: ProjectCardProps) {
  const { t } = useLanguage();
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isVideo && videoRef.current) {
      if (isHovering) {
        videoRef.current.playbackRate = 2.0;
        videoRef.current.play().catch((e) => console.log("Video play failed:", e));
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
    }
  }, [isHovering, isVideo]);

  const renderMedia = () => {
    if (isVideo && images.length === 1) {
      return (
        <div className="relative h-48 bg-gray-900 overflow-hidden">
          {/* Video Layer */}
          <video
            ref={videoRef}
            src={images[0]}
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-700 ease-in-out ${
              isHovering ? "opacity-100" : "opacity-0"
            }`}
            muted
            loop
            playsInline
          />

          {/* Thumbnail Layer */}
          <div
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              isHovering ? "opacity-0" : "opacity-100"
            }`}
          >
            {thumbnail ? (
              <Image
                src={thumbnail}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-800 text-gray-400">
                <span className="text-sm">No Thumbnail</span>
              </div>
            )}
          </div>
        </div>
      );
    }

    if (images.length === 1) {
      return (
        <div className="relative h-48 bg-gray-900">
          <Image
            src={images[0]}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className={`object-${imageFit}`}
            style={{ objectFit: imageFit }}
          />
        </div>
      );
    }

    if (images.length === 2) {
      return (
        <div className="grid grid-cols-2 gap-2">
          <div className="relative h-48">
            <Image
              src={images[0]}
              alt={`${title} 1`}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className={`object-${imageFit}`}
              style={{ objectFit: imageFit }}
            />
          </div>
          <div className="relative h-48">
            <Image
              src={images[1]}
              alt={`${title} 2`}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className={`object-${imageFit}`}
              style={{ objectFit: imageFit }}
            />
          </div>
        </div>
      );
    }

    if (images.length === 3) {
      return (
        <div className="grid grid-cols-2 gap-2 h-48">
          <div className="relative row-span-2 bg-gray-900">
            <Image
              src={images[0]}
              alt={`${title} 1`}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-contain"
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="relative">
            <Image
              src={images[1]}
              alt={`${title} 2`}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className={`object-${imageFit}`}
              style={{ objectFit: imageFit }}
            />
          </div>
          <div className="relative">
            <Image
              src={images[2]}
              alt={`${title} 3`}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className={`object-${imageFit}`}
              style={{ objectFit: imageFit }}
            />
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <a
      href={siteUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white dark:bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:bg-gray-50 dark:hover:bg-[#222222] transition-all duration-300 group cursor-pointer"
      onMouseEnter={() => isVideo && setIsHovering(true)}
      onMouseLeave={() => isVideo && setIsHovering(false)}
    >
      <div className="relative">
        {renderMedia()}
        {!isVideo && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-sm">
            <div className="text-white text-center">
              <span className="text-xl font-bold flex items-center gap-2">
                {t.projects.seeProject}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-external-link-icon lucide-external-link"
                >
                  <path d="M15 3h6v6" />
                  <path d="M10 14 21 3" />
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                </svg>
              </span>
            </div>
          </div>
        )}
      </div>
      <div
        className={
          isVideo
            ? `transition-all duration-500 ease-in-out overflow-hidden ${isHovering ? "max-h-0 opacity-0" : "max-h-[500px] opacity-100"
            }`
            : ""
        }
      >
        <div className="p-6">
          <h3 className="text-2xl font-bold text-[#191919] dark:text-white mb-2 translate-y-[-1px]">
            {title}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm leading-relaxed">
            {description}
          </p>
          <div className="flex items-center justify-between flex-wrap gap-3">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {date}
            </span>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-750 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
