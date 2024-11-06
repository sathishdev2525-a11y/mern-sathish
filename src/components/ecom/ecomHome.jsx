import { useEffect, useState } from 'react';
import EcomProductCard from './productCard';
import Loader from '../loader';
import { CartData } from '../../datasStore/storeContext';


const EcomHome = () => {
  const {products, setEcomProducts} = CartData()
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if(products.length > 0){
          setLoading(false)
          return
        }
        const response = await fetch('https://fakestoreapi.com/products');
        let jsonResponse = await response.json()
        setEcomProducts(jsonResponse);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div><Loader/></div>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((product,i) => {
        return <EcomProductCard key={i} product={product} itemFrom={true}/>
})}
    </div>
  );
};

export default EcomHome;
