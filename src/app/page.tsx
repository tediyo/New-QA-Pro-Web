"use client"; // Add this at the very top

import Image from "next/image";
import ParticlesBackground from "@/components/ParticlesBackground";
import DateTime from "@/components/DateTime";
import HomeSection from "@/components/HomeSection"; 
import { useEffect, useState } from 'react';
import './globals.css';

export default function Home() {
  // State to handle client-side only rendering
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Set isClient to true after the component is mounted on the client
    setIsClient(true);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
      {/* Particle Background only on the client side */}
      {isClient && <ParticlesBackground />}

      {/* Top Bar */}
      <header className="absolute top-0 left-0 w-full bg-blue-600 text-white py-5 shadow-md z-20">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6">
          <div className="text-2xl font-extrabold">
            <a href="/" className="text-white hover:text-gray-300 transition-colors duration-300">My App</a>
          </div>
          <nav className="flex space-x-6 text-lg">
            <a href="#home" className="hover:text-gray-300 transition-colors duration-300">Home</a>
            <a href="#about" className="hover:text-gray-300 transition-colors duration-300">About</a>
            <a href="#services" className="hover:text-gray-300 transition-colors duration-300">Services</a>
            <a href="#contact" className="hover:text-gray-300 transition-colors duration-300">Contact</a>
          </nav>
        </div>
      </header>

      <div className="relative z-10 grid grid-rows-[30px_1fr_30px] items-center justify-items-center min-h-screen p-8 pb-20 gap-12 sm:p-16 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-6 row-start-2 items-center sm:items-start text-center sm:text-left">
          <Image
            className="dark:invert mb-6"
            src="/next.svg"
            alt="Next.js logo"
            width={1600}
            height={40}
            priority
          />

          {/* Date and Time only on client side */}
          {isClient && <DateTime />}

          {/* Home Section */}
          <HomeSection />

          <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <li className="mb-3">
              Get started by editing{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                src/app/page.tsx
              </code>
              .
            </li>
            <li className="mb-3">Save and see your changes instantly. Nextjs!!!</li>
          </ol>
        </main>

        {/* Green Card */}
        <div className="relative w-64 h-64 bg-green-500 p-8 flex justify-center items-center shadow-lg rounded-md z-30">
          <span className="text-white font-bold">Green Card</span>
        </div>
      </div>
    </div>
  );
}
