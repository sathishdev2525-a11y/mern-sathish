import "@/styles/globals.css";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import StoreDatas from "@/datasStore/useContextStore";
import CartProvider from "@/datasStore/storeContext";
import StoreCompDatas from "@/datasStore/compDatas";
export default function App({ Component, pageProps }) {

  useEffect(() => {
    AOS.init();
  }, []);

  return <StoreDatas>
    <CartProvider>
      <StoreCompDatas>
    <Component {...pageProps} />
    </StoreCompDatas>
    </CartProvider>
    </StoreDatas>;
}
