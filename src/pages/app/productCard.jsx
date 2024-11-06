
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MdArrowBackIosNew, MdStar } from 'react-icons/md';
import { CartData } from '@/datasStore/storeContext';
import Loader from '@/components/loader';

const ProductViewSection = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;
  const { addToCart } = CartData()

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`https://fakestoreapi.com/products/${id}`);
          let resJson = await response.json()
          
          setProduct(resJson);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching product:', error);
          setLoading(false);
        }
      };

      fetchProduct();
    }
  }, [id]);

  if (loading) {
    return <div><Loader/></div>;
  }
  return (
    <div className=''>
         <nav className=" h-[70px] flex gap-x-2 items-center pl-5 bg-purple-300 text-purple-600 sticky top-0">
    <button onClick={()=>router.back()}> <MdArrowBackIosNew className='text-[30px]'/></button>
    <h1 className='mb-1 font-bold text-[19px] md:text-[25px] '>{product.title.slice(0,25)}</h1>
  </nav>
        <div className="grid md:grid-cols-2 gap-2 p-6 md:p-12">
        <img src={product.image} alt="img" className='h-[300px] w-[90%] mx-auto' />

      <div className="max-w-3xl mx-auto p-4 space-y-2">
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <p className="text-gray-700 mb-4">{product.description}</p>
      <p className='flex items-center'><MdStar className="text-yellow-400 mr-1 text-[19px]"/> {product.rating.rate}</p>
        <p className="text-gray-500">Price : {product.price}</p>
      <div className="flex space-x-4 font-medium">
        <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded hover:bg-gray-100 transition">
          Buy
        </button>
        <button onClick={()=>addToCart(product)} className="border border-pink-500 text-pink-500 py-2 px-4 rounded hover:bg-pink-100 transition">
          Add to Cart
        </button>
      </div>
    </div>


    </div>
    </div>
  );
};

export default ProductViewSection;
