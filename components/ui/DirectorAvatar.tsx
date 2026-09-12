"use client";

import React from "react";
import Image from "next/image";

interface DirectorAvatarProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export default function DirectorAvatar({ size = "md", className = "" }: DirectorAvatarProps) {
  const imgSrc = "https://res.cloudinary.com/sb6zkuxk/image/upload/v1786370945/rakhi_director.png";

  const dimensions = {
    sm: "h-12 w-12",
    md: "h-20 w-20",
    lg: "h-32 w-32",
    xl: "h-48 w-48 sm:h-56 sm:w-56",
  };

  return (
    <div className={`relative overflow-hidden rounded-2xl border-2 border-pink-500/50 shadow-xl bg-slate-900 ${dimensions[size]} ${className}`}>
      <Image
        src={imgSrc}
        alt="Rakhi Devi - Director"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover object-top hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
    </div>
  );
}
