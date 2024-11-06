import EcomHome from "@/components/ecom/ecomHome";
import { MdArrowBackIosNew } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { useContext } from "react";
import { CartData } from "@/datasStore/storeContext";
import { useRouter } from "next/router";

const EcomSection = () => {
  const { cart } = CartData();
  const router = useRouter();
  
  return (
    <div>
        <nav className=" h-[70px] flex gap-x-2 items-center justify-between px-5 bg-purple-300 text-white sticky top-0">
    <div className="flex items-center gap-x-2">
    <button onClick={()=>router.back()}> <MdArrowBackIosNew className='text-[30px]'/></button>
    <h1 className='mb-1 font-bold text-[19px] md:text-[25px] '>NextJS Ecom Project</h1>
    </div>

    <div>
      <button onClick={()=>router.push('/app/ecomCart')} className="font-medium border-2 relative hover:bg-purple-400 duration-300 px-2 py-1 rounded-md flex items-center gap-x-1"><BsCart2/>Cart <span className="absolute -right-1 bg-purple-300 rounded-full -top-3">{cart.length > 0 ? cart.length : null}</span></button>
    </div>
  </nav>
      <EcomHome />
    </div>
  );
};

export default EcomSection;
