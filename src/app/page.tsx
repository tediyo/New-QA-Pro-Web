"use client"; // Ensures client-side rendering

import Image from "next/image";
import ParticlesBackground from "@/components/ParticlesBackground";
import DateTime from "@/components/DateTime";
import HomeSection from "@/components/HomeSection"; 
import { useEffect, useState } from 'react';
import Link from 'next/link';
import './globals.css';

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
      {isClient && <ParticlesBackground />}

      {/* Header */}
      <header className="absolute top-0 left-0 w-full bg-blue-600 text-white py-5 shadow-md z-20">
        <div className="flex justify-between items-center max-w-7xl mx-auto px-6">
          <div className="text-2xl font-extrabold">
            <Link href="/" className="hover:text-gray-300 transition-colors duration-300">
              My App
            </Link>
          </div>
          <nav className="flex space-x-6 text-lg">
            <Link href="#home" className="hover:text-gray-300 transition-colors duration-300">Home</Link>
            <Link href="#about" className="hover:text-gray-300 transition-colors duration-300">About</Link>
            <Link href="#services" className="hover:text-gray-300 transition-colors duration-300">Services</Link>
            <Link href="#contact" className="hover:text-gray-300 transition-colors duration-300">Contact</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 grid grid-rows-[30px_1fr_30px] items-center justify-items-center min-h-screen p-8 pb-20 gap-12 sm:p-16">
        <main className="flex flex-col gap-6 row-start-2 items-center sm:items-start text-center sm:text-left">
          <Image
            className="dark:invert mb-6"
            src="/next.svg"
            alt="Next.js logo"
            width={1600}
            height={40}
            priority
          />

          {isClient && <DateTime />} 

          <HomeSection />

          <ol className="list-inside list-decimal text-sm text-center sm:text-left">
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

        {/* Sample Card */}
        <div className="relative w-64 h-64 bg-green-500 p-8 flex justify-center items-center shadow-lg rounded-md z-30">
          <span className="text-white font-bold">Green Card</span>
          <h1 className="text-3xl font-bold text-blue-500">Hello, Tailwind!</h1>
        </div>
      </div>
    </div>
  );
}

// export default function Page() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-blue-500 text-white p-10">
//       <h1 className="text-4xl font-bold">Tailwind is Working! 🎉</h1>
//       <p className="text-lg mt-4">If you see a blue background and white text, Tailwind is working!</p>
//       <button className="mt-6 px-6 py-3 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-700 transition">
//         Test Button
//       </button>
//     </div>
//   );
// }

// export default function Page() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-blue-500 text-white text-3xl font-bold">
//       Tailwind is Working! 🎉
//     </div>
//   );
// }
