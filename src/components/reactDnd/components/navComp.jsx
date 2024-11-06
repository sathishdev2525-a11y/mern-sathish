import { useState } from 'react';
import Link from 'next/link';
import { getStoreData } from '@/datasStore/useContextStore';

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { addPage}= getStoreData()
  const [isAddPage, setIsAddPage] = useState(false)
  const [pageName, setPageName]= useState('')
  if(!props) return <div>No Data!</div>
  const handleSubmit=(e)=>{
    e.preventDefault();
    addPage(pageName);
    setIsAddPage(false)
  }
  return (
    <nav className="bg-gradient-to-r from-purple-500 to-purple-500 p-4 z-30 capitalize shadow-md sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center text-white">
          <Link href="/">
          {props.obj.renderDatas.logo}
          </Link>
        </div>
    {isAddPage && <div className='absolute flex justify-center items-center inset-0 z-50 h-screen bg-black bg-opacity-35'>
      
      <form onSubmit={handleSubmit}>

        <input type="text" onChange={(e)=>setPageName(e.target.value)}/>
      </form>
      <button onClick={()=>setIsAddPage(false)} className="text-white font-semibold animate-pulse hover:text-gray-200
               uppercase">back</button></div>}
        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {props.obj.renderDatas.links.map((link, index) => {
            
              return <Link href={`/dnd/${link}`} key={index}>
              <span className="text-white capitalize hover:text-gray-200">{link}</span>
            </Link>          
          })}
          <button onClick={()=>setIsAddPage(true)} className="text-white font-semibold animate-pulse hover:text-gray-200
               uppercase">Add Pages</button>
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
          {props.links.map((link, index) => (
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
