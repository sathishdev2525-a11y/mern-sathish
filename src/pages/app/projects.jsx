const { default: Link } = require("next/link")
const { FaArrowRight } = require("react-icons/fa6")


const ProjectsSection=()=>{


    return <div data-aos="fade-up"
    data-aos-anchor-placement="top-center" data-aos-delay="100" className="max-w-4xl z-30 w-full mx-auto p-2  rounded-lg shadow-md bgCloud text-white">

          {/* Projects */}
         
          <div className="grid sm:grid-cols-2 md:grid-cols-4 capitalize font-mono gap-5 p-3 shadow-md  bg-white rounded-md">
          <Link href={'/dnd/homePage'} className="group relative rounded-md shadow-md hover:scale-105 duration-500">
              <img src={'/wordpress.gif'} alt="img" width={100} height={100} className="w-full z-10 rounded-t-md h-[160px]" />
              <p className='font-bold p-2  text-[17px] group-hover:underline flex justify-between items-center text-[gray] underline underline-offset-2 hover:text-purple-500'>wordPress Clone              
              <FaArrowRight className=''/></p>
              <span className="h-[7px] w-[7px] rounded-full animate-ping bg-purple-500 z-30 absolute top-0 right-0">fe</span>
            </Link>
            <Link href={'https://kvm-website-dev.vercel.app/'} className="rounded-md group shadow-md hover:scale-105 duration-500">
              <img src={'/kvm_project.gif'} alt="img" width={100} height={100} className="w-full rounded-t-md h-[160px]" />
              <p className='font-bold p-2  text-[17px] group-hover:underline  flex justify-between items-center text-[gray] underline underline-offset-2 hover:text-purple-500'>School Website <FaArrowRight className=''/></p>
            </Link>
            <Link href={'https://www.siteocean.in/'} className="rounded-md group shadow-md  hover:scale-105 duration-500">
              <img src={'/siteoceanPro.gif'} alt="img" width={100} height={100} className="w-full rounded-t-md h-[160px]" />
              <p className='font-bold p-2  text-[17px] group-hover:underline flex justify-between items-center text-[gray] underline underline-offset-2 hover:text-purple-500'>Company Website <FaArrowRight className=''/></p>
            </Link>
           
            <Link href={'/app/ecomSection'} className="rounded-md group shadow-md hover:scale-105 duration-500">
              <img src={'/ecomPro.gif'}  quality={100} alt="img" className="w-full rounded-t-md h-[160px]" />
              <p className='font-bold p-2  text-[17px] flex justify-between items-center group-hover:underline text-[gray] underline underline-offset-2 hover:text-purple-500'>Ecommerce<FaArrowRight className=''/></p>
            </Link>
          
            <Link href={'https://www.hospiron.in/'} className="rounded-md group shadow-md hover:scale-105 duration-500">
              <img src={'/hospiron.gif'} alt="img" width={100} height={100} className="w-full rounded-t-md h-[160px]" />
              <p className='font-bold p-2  text-[17px] group-hover:underline  flex justify-between items-center text-[#6d6868] underline underline-offset-2 hover:text-purple-500'>Office Website <FaArrowRight className=''/></p>
            </Link>
           
           
            <Link href={'/app/chatProject'} className="group rounded-md shadow-md hover:scale-105 duration-500 ">
              <img src={'/chatPro.gif'} alt="img" width={100} height={100} className="w-full rounded-t-md h-[160px]" />
              <p className='font-bold p-2  text-[17px] flex group-hover:underline justify-between items-center text-[gray] underline underline-offset-2 hover:text-purple-500 duration-500'>Chat App <FaArrowRight className=''/></p>
            </Link>
            <Link href={'/app/reactdnd'} className="rounded-md group shadow-md hover:scale-105 duration-500">
              <img src={'/dndPro.gif'}  quality={100} alt="img" className="w-full rounded-t-md h-[160px]" />
              <p className='font-bold p-2  text-[17px] flex justify-between items-center group-hover:underline text-[gray] underline underline-offset-2 hover:text-purple-500'>React Drag & Drop <FaArrowRight className=''/></p>
            </Link>
          
        </div>
    </div>
}

export default ProjectsSection;