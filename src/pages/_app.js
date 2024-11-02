import "@/styles/globals.css";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CartProvider } from "@/components/storeContext";
import StoreDatas from "@/datasStore/useContextStore";
export default function App({ Component, pageProps }) {

  useEffect(() => {
    AOS.init();
  }, []);

  return <StoreDatas>
    <CartProvider>
    <Component {...pageProps} />
    </CartProvider>
    </StoreDatas>;
}
