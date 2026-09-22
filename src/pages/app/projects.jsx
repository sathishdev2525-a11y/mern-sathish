const { default: Link } = require("next/link")
const { FaArrowRight } = require("react-icons/fa6")


const ProjectsSection = () => {


  return <div data-aos="fade-up"
    data-aos-anchor-placement="top-center" data-aos-delay="100" className="max-w-4xl z-30 w-full mx-auto p-2  rounded-lg shadow-md bgCloud text-white">
    {/* Projects */}
    <div className="grid sm:grid-cols-2 md:grid-cols-4 capitalize font-mono gap-5 p-3 shadow-md bg-white rounded-md">
      <Link
        href="/dnd/homePage"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative rounded-md shadow-md hover:scale-105 duration-500"
      >
        <img
          src="/wordpress.gif"
          alt="img"
          width={100}
          height={100}
          className="w-full z-10 rounded-t-md h-[160px]"
        />
        <p className="font-bold p-2 text-[17px] group-hover:underline flex justify-between items-center text-[gray] underline underline-offset-2 hover:text-purple-500">
          Drag and Drop
          <FaArrowRight />
        </p>
        <span className="h-[7px] w-[7px] rounded-full animate-ping bg-purple-500 z-30 absolute top-0 right-0">
          fe
        </span>
      </Link>

      <Link
        href="https://kvm-website-dev.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-md group shadow-md hover:scale-105 duration-500"
      >
        <img
          src="/kvm_project.gif"
          alt="img"
          width={100}
          height={100}
          className="w-full rounded-t-md h-[160px]"
        />
        <p className="font-bold p-2 text-[17px] group-hover:underline flex justify-between items-center text-[gray] underline underline-offset-2 hover:text-purple-500">
          School Website
          <FaArrowRight />
        </p>
      </Link>

      <Link
        href="https://petshop-site-tawny.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-md group shadow-md hover:scale-105 duration-500"
      >
        <img
          src="/siteoceanPro.gif"
          alt="img"
          width={100}
          height={100}
          className="w-full rounded-t-md h-[160px]"
        />
        <p className="font-bold p-2 text-[17px] group-hover:underline flex justify-between items-center text-[gray] underline underline-offset-2 hover:text-purple-500">
          Pet-Shop Website
          <FaArrowRight />
        </p>
      </Link>

      <Link
        href="https://aura-wear-green.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-md group shadow-md hover:scale-105 duration-500"
      >
        <img
          src="/ecomPro.gif"
          alt="img"
          className="w-full rounded-t-md h-[160px]"
        />
        <p className="font-bold p-2 text-[17px] flex justify-between items-center group-hover:underline text-[gray] underline underline-offset-2 hover:text-purple-500">
          Aura-Wear Website
          <FaArrowRight />
        </p>
      </Link>

      <Link
        href="/app/chatProject"
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-md shadow-md hover:scale-105 duration-500"
      >
        <img
          src="/chatPro.gif"
          alt="img"
          width={100}
          height={100}
          className="w-full rounded-t-md h-[160px]"
        />
        <p className="font-bold p-2 text-[17px] flex group-hover:underline justify-between items-center text-[gray] underline underline-offset-2 hover:text-purple-500 duration-500">
          Chat App
          <FaArrowRight />
        </p>
      </Link>

      <Link
        href="/app/reactdnd"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-md group shadow-md hover:scale-105 duration-500"
      >
        <img
          src="/dndPro.gif"
          alt="img"
          className="w-full rounded-t-md h-[160px]"
        />
        <p className="font-bold p-2 text-[17px] flex justify-between items-center group-hover:underline text-[gray] underline underline-offset-2 hover:text-purple-500">
          React Drag & Drop
          <FaArrowRight />
        </p>
      </Link>
    </div>
  </div>
}

export default ProjectsSection;