import { useState } from 'react';
import Link from 'next/link';
import { getStoreData } from '@/datasStore/useContextStore';

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { addPage, editSiteName}= getStoreData()
  const [isAddPage, setIsAddPage] = useState(false)
  const [pageName, setPageName]= useState('')
  const [isEdit, setIsEdit] = useState(false)
  const [siteName, setSiteName]= useState('')
  if(!props) return <div>No Data!</div>

  const handleOnSubmit=(e)=>{
    e.preventDefault()
    if(siteName.length < 3){
      
      return
    }
    editSiteName(siteName)
    setIsEdit(false)
    setSiteName('')

  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    addPage(pageName);
    setIsAddPage(false)
  }
  const handleBlur=()=>{
    if(siteName.length === 0) setIsEdit(false) 
  }
  return (
    <nav className="bg-gradient-to-r from-purple-500 to-purple-500 p-4 z-10 capitalize shadow-md sticky top-[150px]">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center text-white">
         {isEdit ? <form onSubmit={handleOnSubmit} className='flex '>
          <input autoFocus onBlur={handleBlur} value={siteName} onChange={(e)=>setSiteName(e.target.value)}  className='p-1 outline-gray-300 text-gray-500' placeholder={props.obj.renderDatas.logo}/>
          <button type='submit' className='bg-purple-700 px-2 py-1'>Update</button>
          </form> : <button
          onClick={()=>setIsEdit(true)} >
          {props.obj.renderDatas.logo}
          </button>}
        </div>
    {isAddPage && <div className='absolute flex flex-col gap-y-1 justify-center items-center inset-0 z-20 h-screen bg-black bg-opacity-35'>
      
      <form onSubmit={handleSubmit} className=''>

        <input type="text" className='p-1 pl-2 rounded-md' placeholder='Enter Page Name' onChange={(e)=>setPageName(e.target.value)}/>
      </form>
      <button onClick={()=>setIsAddPage(false)} className="text-white font-semibold animate-pulse hover:text-gray-200
               uppercase rounded-md py-1 px-4 bg-[#c647d1]">back</button></div>}
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
