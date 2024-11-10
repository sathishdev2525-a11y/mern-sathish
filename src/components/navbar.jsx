import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const onButtonBlur=()=>{
    setTimeout(() => {
      setIsOpen(false)
    }, 500);
  }

  return (
    <nav className="bg-white bg-opacity-75 text-[#cd47e7] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex w-full items-center justify-between">
            <div className="">
              <Link href="/" className="text-[#cd47e7] text-xl font-mono capitalize">
                Sathish Portfolio
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link  href="#" className="text-[#cd47e7] hover:bg-purple-400 duration-150 hover:text-[#cd47e7] px-3 py-2 rounded-md text-md font-medium">
                
                    About
                
                </Link>
                <Link href="#education" className="text-[#cd47e7] hover:bg-purple-400 duration-150 hover:text-[#cd47e7] px-3 py-2 rounded-md text-md font-medium">
                  
                  Education
                  
                  </Link>
                <Link href="#skills" className="text-[#cd47e7] hover:bg-purple-400 duration-150 hover:text-[#cd47e7] px-3 py-2 rounded-md text-md font-medium">
                  
                    Skills
                  
                </Link>
                <Link href="#experiences" className="text-[#cd47e7] hover:bg-purple-400 duration-150 hover:text-[#cd47e7] px-3 py-2 rounded-md text-md font-medium">
                  
                Experiences
                  
                  </Link>
                <Link href="#projects" className="text-[#cd47e7] hover:bg-purple-400 duration-150 hover:text-[#cd47e7] px-3 py-2 rounded-md text-md font-medium">
                 
                    Projects
                
                </Link>

                <Link href="#contact" className="text-[#cd47e7] hover:bg-purple-400 duration-150 hover:text-[#cd47e7] px-3 py-2 rounded-md text-md font-medium">
                 
                 Contact
             
             </Link>
               
              </div>
            </div>
            {/* <Image src={'next.svg'} className='bg-[gray]' alt='img' width={100} height={100}/> */}
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onBlur={onButtonBlur}
              onClick={toggleMenu}
              type="button"
              className="bg-purple-600 inline-flex items-center justify-center p-2 rounded-md text-[#cd47e7] hover:bg-ptext-purple-400 duration-150 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >

              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <MdMenu className="block h-6 w-6 duration-500"/>
              ) : (
                <MdClose className="block h-6 w-6 duration-500"/> 
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden `} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        
          <Link  href="#" className="text-[#cd47e7] hover:bg-ptext-purple-400 duration-150 hover:text-[#cd47e7] block px-3 py-2 rounded-md text-base font-medium">
                
                About
            
            </Link>
            <Link href="#education" className="text-purple-500 hover:bg-ptext-purple-400 duration-150 hover:text-[#cd47e7] block px-3 py-2 rounded-md text-base font-medium">
              
              Education
              
              </Link>
            <Link href="#skills" className="text-purple-500 hover:bg-ptext-purple-400 duration-150 hover:text-[#cd47e7] block px-3 py-2 rounded-md text-base font-medium">
              
                Skills
              
            </Link>
            <Link href="#experiences" className="text-purple-500 hover:bg-ptext-purple-400 duration-150 hover:text-[#cd47e7] block px-3 py-2 rounded-md text-base font-medium">
              
            Experiences
              
              </Link>
            <Link href="#projects" className="text-purple-500 hover:bg-ptext-purple-400 duration-150 hover:text-[#cd47e7] block px-3 py-2 rounded-md text-base font-medium">
             
                Projects
            
            </Link>
        
        </div>
      </div>
    </nav>
  );
}
