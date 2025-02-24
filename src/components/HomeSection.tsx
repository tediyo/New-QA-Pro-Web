import Image from 'next/image';
import { FC } from 'react';

const HomeSection: FC = () => {
  return (
    <header className="relative w-full min-h-screen bg-gray-900 text-white">
      <nav className="fixed top-0 left-0 w-full bg-gray-800 bg-opacity-75 p-4 shadow-md">
        <ul className="flex justify-center space-x-8 text-lg">
          <li className="hover:text-yellow-400 cursor-pointer">HOME</li>
          <li className="hover:text-yellow-400 cursor-pointer">ABOUT</li>
          <li className="hover:text-yellow-400 cursor-pointer">PROJECTS</li>
          <li className="hover:text-yellow-400 cursor-pointer">CONTACTS</li>
        </ul>
      </nav>

      <div className="flex flex-col items-center justify-center min-h-screen pt-16">
        <Image
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Profile Photo"
          width={200}
          height={200}
          className="rounded-full shadow-lg mb-6"
        />
        <h1 className="text-4xl font-bold mb-2">John Doee</h1>
        <p className="text-lg text-gray-300 max-w-lg text-center">
          Hi, I’m John, a passionate Software QA Engineer dedicated to ensuring quality and reliability in every product I test.
        </p>
      </div>
    </header>
  );
};

export default HomeSection;
