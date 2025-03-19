import Image from 'next/image';
import { FC } from 'react';
import Navbar from './Navbar'; // Import the Navbar

const HomeSection: FC = () => {
  return (
    <header className="relative w-full min-h-screen bg-gray-900 text-white">
      <Navbar /> {/* Use the extracted Navbar here */}

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
