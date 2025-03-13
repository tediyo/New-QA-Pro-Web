import Image from 'next/image';
import { FC } from 'react';

const HomeSection: FC = () => {
  return (
    <header className="relative w-full min-h-screen bg-gray-900 text-white">
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-800 bg-opacity-75 p-4 shadow-md z-10">
        <ul className="flex justify-center space-x-8 text-lg">
          <li>
            <a href="#home" className="hover:text-blue-400 cursor-pointer">HOME</a>
          </li>
          <li>
            <a href="#about" className="hover:text-yellow-400 cursor-pointer">ABOUT</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-yellow-400 cursor-pointer">PROJECTS</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-400 cursor-pointer">CONTACT</a>
          </li>
          {/* Developer and QA Role Buttons */}
          <li>
            <a href="/developer" className="hover:text-yellow-400 cursor-pointer">Developer</a>
          </li>
          <li>
            <a href="/qa" className="hover:text-yellow-400 cursor-pointer">QA</a>
          </li>
        </ul>
      </nav>

      {/* Main Content */}
      <div id="home" className="flex flex-col items-center justify-center min-h-screen pt-16">
        <Image
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Profile Photo"
          width={200}
          height={200}
          className="rounded-full shadow-lg mb-6"
        />
        <h1 className="text-4xl font-bold mb-2">John Doe</h1>
        <p className="text-lg text-gray-300 max-w-lg text-center">
          Hi, I’m John, a passionate Software QA Engineer dedicated to ensuring quality and reliability in every product I test.
        </p>
        <p className="text-lg text-gray-300 max-w-lg text-center mt-4">
          I also bring strong development skills to the table, allowing me to bridge the gap between coding and testing for seamless software delivery.
        </p>
        <p className="mt-6 text-lg text-yellow-400 cursor-pointer hover:underline">
          <a href="#contact">Let’s connect and discuss how we can collaborate!</a>
        </p>
      </div>
    </header>
  );
};

export default HomeSection;
