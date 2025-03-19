// Navbar
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 bg-opacity-75 p-4 shadow-md z-10">
      <ul className="flex justify-center space-x-8 text-lg text-white">
        <li><a href="#home" className="hover:text-blue-400 cursor-pointer">HOME</a></li>
        <li><a href="#about" className="hover:text-yellow-400 cursor-pointer">ABOUT</a></li>
        <li><a href="#projects" className="hover:text-yellow-400 cursor-pointer">PROJECTS</a></li>
        <li><a href="#contact" className="hover:text-yellow-400 cursor-pointer">CONTACT</a></li>
        <li><Link href="/developer" className="hover:text-yellow-400 cursor-pointer">Developer</Link></li>
        <li><Link href="/qa" className="hover:text-yellow-400 cursor-pointer">QA</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

