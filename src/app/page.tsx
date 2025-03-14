"use client";

import Image from "next/image";
import ParticlesBackground from "@/components/ParticlesBackground";
import DateTime from "@/components/DateTime";
import HomeSection from "@/components/HomeSection"; 
import { useEffect, useState } from 'react';
import Link from 'next/link';
import './styles.css';  // Import the new CSS file

export default function Page() {  // ✅ Make sure the function is properly exported
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="main-container">
      {isClient && <ParticlesBackground />}

      {/* Header */}
      <header>
        <div className="header-container">
          <div className="header-logo">
            <Link href="/">My App</Link>
          </div>
          <nav className="nav-links">
            <Link href="#home">Home</Link>
            <Link href="#about">About</Link>
            <Link href="#services">Services</Link>
            <Link href="#contact">Contact</Link>
            <a href="/qa" className="hover:text-yellow-400 cursor-pointer">QA</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="main-container">
        <main>
          <Image className="logo" src="/next.svg" alt="Next.js logo" width={1600} height={40} priority />
          {isClient && <DateTime />}
          <HomeSection />

          <ol className="instructions">
            <li>
              Get started by editing{" "}
              <code>src/app/page.tsx</code>.
            </li>
            <li>Save and see your changes instantly. Next.js!!!</li>
          </ol>
        </main>

        {/* Sample Card */}
        <div className="sample-card">
          <span>Green Card</span>
          <h1>Hello, CSS!</h1>
        </div>

        {/* Button */}
        <button className="button">Test Button</button>
      </div>
    </div>
  );
}
