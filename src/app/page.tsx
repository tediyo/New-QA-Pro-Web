// src/app/page.tsx

"use client"; // Add this at the very top

import Image from "next/image";
import ParticlesBackground from "@/components/ParticlesBackground";
import DateTime from "@/components/DateTime";
import HomeSection from "@/components/HomeSection"; 
import './globals.css';


export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Particle Background from code pen*/}
      <ParticlesBackground />

      <div className="relative z-10 grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={1800}
            height={38}
            priority
          />

          {/* Date and Time in Yellow */}
          <DateTime /> 

          {/* Home Section */}
          <HomeSection /> 

          <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-2">
              Get started by editing{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                src/app/page.tsx
              </code>
              .
            </li>
            <li>Save and see your changes instantly. Nextjs!!!</li>
          </ol>
        </main>
      </div>
    </div>
  );
}
