import { useState } from 'react';
import Link from 'next/link';
import './styles.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <ul className={isMenuOpen ? "menu open" : "menu"}>
          <li><a href="#home">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#contact">CONTACT</a></li>
          <li><Link href="/developer">Developer</Link></li>
          <li><Link href="/qa">QA</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
