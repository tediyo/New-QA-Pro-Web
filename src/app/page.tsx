"use client";
import Image from "next/image";
import ParticlesBackground from "@/components/ParticlesBackground";
import DateTime from "@/components/DateTime";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from 'react';

//import { useRouter } from "next/navigation";
import './styles.css'; 

export default function Page() {
  const [isClient, setIsClient] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(!isAnimating);
  };

  //const router = useRouter();
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="main-container">
      {isClient && <ParticlesBackground />}

      {/* ✅ Updated Header Section */}
      <header className="relative w-full flex items-center justify-between p-4 bg-gray-900 shadow-lg">
        {/* Profile Image on the Top Left */}
        <Image
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Profile Photo"
          width={60} // Adjusted size for top-left placement
          height={60}
          className="rounded-full shadow-lg ml-4" // Margin-left for spacing
        />

        {/* Navbar (Centered) */}
       <Navbar/>
      </header>

      {/* Main Content */}
      <div className="main-container">
        <main>
          <Image className="logo" src="/next.svg" alt="Next.js logo" width={1600} height={40} priority />
          {isClient && <DateTime />}

          <ol className="instructions">
            {/* <li>Get started by editing <code>src/app/page.tsx</code>.</li>
            <li>Save and see your changes instantly. Next.js!!!</li> */}
          </ol>
        </main>
  {/* Card Div */}
   <div>
        {/* Sample Card 1 */}
        <div className={`sample-card ${isAnimating ? "animate" : ""}`} onClick={handleClick}>
          <span>Green Card</span>
          {/* <h1>Hello, CSS!</h1> */}
        </div>
        {/* Sample Card 2 */}
        <div className={`sample-card-one ${isAnimating ? "animate" : ""}`} onClick={handleClick}>
          <span>Green Card</span>
          {/* <h1>Hello, CSS!</h1> */}
        </div>

        {/* Sample Card 3 */}
        <div className={`sample-card-two ${isAnimating ? "animate" : ""}`} onClick={handleClick}>
          <span>Green Card</span>
          {/* <h1>Hello, CSS!</h1> */}
        </div>
      </div>
        {/* Button */}
        <button className="button">Test Button</button>
      </div>
    </div>
  );
}
