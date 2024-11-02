const { default: Link } = require("next/link")
const { FaArrowRight } = require("react-icons/fa6")


const ProjectsSection=()=>{


    return <div data-aos="fade-up"
    data-aos-anchor-placement="top-center" data-aos-delay="100" className="max-w-4xl z-30 w-full mx-auto p-4 md:p-6 rounded-lg shadow-md bgCloud text-white">

          {/* Projects */}
         
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 p-6 shadow-md  bg-white rounded-md">
          <Link href={'/dnd/homePage'} className="group rounded-md shadow-md hover:scale-105 duration-500">
              <img src={'/website.png'} alt="img" width={100} height={100} className="w-full rounded-t-md h-[200px]" />
              <p className='font-bold p-2  text-[19px] group-hover:underline flex justify-between items-center text-purple-600'>wordPress Clone <FaArrowRight className=''/></p>
            </Link>
            
            <Link href={'/app/reactdnd'} className="rounded-md group shadow-md hover:scale-105 duration-500">
              <img src={'/social.png'}  quality={100} alt="img" className="w-full rounded-t-md h-[200px]" />
              <p className='font-bold p-2  text-[17px] flex justify-between items-center group-hover:underline text-purple-600'>React Drag & Drop <FaArrowRight className=''/></p>
            </Link>
            <Link href={'/app/ecomSection'} className="rounded-md group shadow-md hover:scale-105 duration-500">
              <img src={'/ecom.jpg'}  quality={100} alt="img" className="w-full rounded-t-md h-[200px]" />
              <p className='font-bold p-2  text-[17px] flex justify-between items-center group-hover:underline text-purple-600'>Ecommerce<FaArrowRight className=''/></p>
            </Link>
            <Link href={'https://www.hospiron.in/'} className="rounded-md group shadow-md hover:scale-105 duration-500">
              <img src={'/hospiron.png'} alt="img" width={100} height={100} className="w-full rounded-t-md h-[200px]" />
              <p className='font-bold p-2  text-[19px] group-hover:underline  flex justify-between items-center text-purple-600'>Website 1 <FaArrowRight className=''/></p>
            </Link>
            <Link href={'https://www.siteocean.in/'} className="rounded-md group shadow-md  hover:scale-105 duration-500">
              <img src={'/siteocean.png'} alt="img" width={100} height={100} className="w-full rounded-t-md h-[200px]" />
              <p className='font-bold p-2  text-[19px] group-hover:underline flex justify-between items-center text-purple-600'>Website 2 <FaArrowRight className=''/></p>
            </Link>
           
            <Link href={'/app/chatProject'} className="group rounded-md shadow-md hover:scale-105 duration-500 ">
              <img src={'/chat.jpg'} alt="img" width={100} height={100} className="w-full rounded-t-md h-[200px]" />
              <p className='font-bold p-2  text-[19px] flex group-hover:underline justify-between items-center text-purple-600 duration-500'>Chat App <FaArrowRight className=''/></p>
            </Link>
          
        </div>
    </div>
}

export default ProjectsSection;