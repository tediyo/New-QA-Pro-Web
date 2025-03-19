import Link from 'next/link';
import './styles.css'; 
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#home">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#projects">PROJECTS</a></li>
        <li><a href="#contact">CONTACT</a></li>
        <li><Link href="/developer">Developer</Link></li>
        <li><Link href="/qa">QA</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
