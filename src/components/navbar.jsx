import { useState } from 'react';
import Link from 'next/link';
import { MdMenu, MdClose } from "react-icons/md";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const onButtonBlur = () => {
    setTimeout(() => setIsOpen(false), 300);
  };

  // ✅ Common nav link style
  const navLink =
    "text-[#cd47e7] hover:bg-purple-100 hover:text-purple-700 transition duration-150 px-3 py-2 rounded-md font-medium hover:scale-105";

  const mobileNavLink =
    "text-[#cd47e7] hover:bg-purple-100 hover:text-purple-700 transition duration-150 block px-3 py-2 rounded-md text-base font-medium";

  return (
    <nav className="bg-white/80 backdrop-blur sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="text-[#cd47e7] text-xl font-mono">
            Sathish Portfolio
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link href="#" className={navLink}>Home</Link>
            <Link href="#education" className={navLink}>Education</Link>
            <Link href="#skills" className={navLink}>Skills</Link>
            <Link href="#experiences" className={navLink}>Experiences</Link>
            <Link href="#projects" className={navLink}>Projects</Link>
            <Link href="#contact" className={navLink}>Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onBlur={onButtonBlur}
              onClick={toggleMenu}
              className="bg-purple-600 text-white hover:bg-purple-500 transition duration-150 p-2 rounded-md focus:outline-none"
            >
              {!isOpen ? (
                <MdMenu className="h-6 w-6" />
              ) : (
                <MdClose className="h-6 w-6" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-md">
          <Link href="#" className={mobileNavLink}>About</Link>
          <Link href="#education" className={mobileNavLink}>Education</Link>
          <Link href="#skills" className={mobileNavLink}>Skills</Link>
          <Link href="#experiences" className={mobileNavLink}>Experiences</Link>
          <Link href="#projects" className={mobileNavLink}>Projects</Link>
          <Link href="#contact" className={mobileNavLink}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}