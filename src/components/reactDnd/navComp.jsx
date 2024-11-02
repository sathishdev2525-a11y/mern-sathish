import { useState } from 'react';
import Link from 'next/link';
import { getStoreData } from '@/datasStore/useContextStore';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {getNav}= getStoreData()
  const [navData, setNavData] = useState(getNav())
  
  if(!navData) return <div>No Data!</div>
  
  return (
    <nav className="bg-gradient-to-r from-purple-500 to-blue-500 p-4 shadow-md sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
          {navData.logo}
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {navData.links.map((link, index) => {
            if(link === '+'){
              return<button className="text-white font-semibold animate-pulse hover:text-gray-200
               uppercase">Add Pages</button>
            }
            else{
              return <Link href={`/dnd/${link}`} key={index}>
              <span className="text-white capitalize hover:text-gray-200">{link}</span>
            </Link>
            }
})}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              // <MenuFa className="h-6 w-6 text-white" />
              <span>x</span>
            ) : (
              // <MenuIcon className="h-6 w-6 text-white" />
              <span>=</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-purple-500 to-blue-500 p-4">
          {navData.links.map((link, index) => (
            <Link href={`/${link}`} key={index}>
              <span
                onClick={() => setIsOpen(false)} // Close menu on link click
                className="block text-white py-2 capitalize hover:text-gray-200"
              >
                {link}
              </span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
