import { MdArrowBackIosNew } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { CartData } from "@/datasStore/storeContext";
import { useRouter } from "next/router";
import EcomProductCard from "@/components/ecom/productCard";

const EcomSection = () => {
  const { cart } = CartData();
  const router = useRouter();
  
  return (
    <div>
        <nav className=" h-[70px] flex gap-x-2 items-center justify-between px-5 bg-purple-300 text-white sticky top-0">
    <div className="flex items-center gap-x-2">
    <button onClick={()=>router.back()}> <MdArrowBackIosNew className='text-[30px]'/></button>
    <h1 className='mb-1 font-bold text-[19px] md:text-[25px] '>Cart</h1>
    </div>

    <div>
     
    </div>
  </nav>

  <div>
    {cart && cart.length > 0 ? (<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {cart.map((item,i)=>{

            return <EcomProductCard key={i} product={item} itemFrom={false}/>
        })}
    </div>) : <div className="min-h-[86vh] grid items-center justify-center font-medium text-gray-400 text-[23px] animate-pulse">Your Cart Is Empty!</div>}
  </div>
    </div>
  );
};

export default EcomSection;
