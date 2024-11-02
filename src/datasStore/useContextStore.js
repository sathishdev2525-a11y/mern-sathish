
import Banner from "@/components/reactDnd/bannerComp";
import FlexCardComp from "@/components/reactDnd/flexCardComp";
import Footer from "@/components/reactDnd/footerComp";
import GridSection from "@/components/reactDnd/gridSection";
import Navbar from "@/components/reactDnd/navComp";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const { createContext, useContext, useState } = require("react");

const UseContextData = createContext()

const StoreDatas = ({children})=>{

    const [preview,setPreview] = useState(false)
    const [componentsData, setComponentsData] = useState([
        {
            compName:"navbar",
            children:[],
            id:Math.random(),
            component:<Navbar/>,
            styles:{},
            renderDatas:{
                logo: "website Name!", // Update with the actual path to your logo
                links: ["homePage", "aboutPage", "servicesPage", "contactPage", "+"], // Add more links as needed
              }
        },
        {
            compName:"banner",
            children:[],
            id:Math.random(),
            component:<Banner/>,
            styles:{},
            renderDatas:{
        title: "Welcome to My Portfolio",
        subtitle: "Building beautiful and efficient web applications.",
        buttonText: "Get in Touch",
        buttonLink: "#contact",
        imageUrl: "/path-to-your-image.jpg",
      }
        },
        {
            compName:"flex",
            children:[],
            id:Math.random(),
            component:<FlexCardComp/>,
            styles:{},
            renderDatas:[
                {
                  title: "Web Development",
                  description: "Create beautiful and responsive websites.",
                  buttonText: "Learn More",
                  buttonLink: "#web-dev",
                  imageUrl: "/path-to-webdev-image.jpg",
                },
                {
                  title: "App Development",
                  description: "Build cross-platform mobile applications.",
                  buttonText: "Explore",
                  buttonLink: "#app-dev",
                  imageUrl: "/path-to-appdev-image.jpg",
                },
                {
                  title: "UI/UX Design",
                  description: "Design user-friendly interfaces.",
                  buttonText: "Get Started",
                  buttonLink: "#design",
                  imageUrl: "/path-to-design-image.jpg",
                },
              ]
        },
        {
            compName:"grid",
            children:[],
            id:Math.random(),
            component:<GridSection/>,
            styles:{},
            renderDatas:[
                {
                  title: "Service One",
                  description: "Detailed information about Service One.",
                  imageUrl: "/path-to-image1.jpg",
                },
                {
                  title: "Service Two",
                  description: "Detailed information about Service Two.",
                  imageUrl: "/path-to-image2.jpg",
                },
                {
                  title: "Service Three",
                  description: "Detailed information about Service Three.",
                  imageUrl: "/path-to-image3.jpg",
                },
                {
                  title: "Service Four",
                  description: "Detailed information about Service Four.",
                  imageUrl: "/path-to-image4.jpg",
                },
              ]
        },
        {
            compName:"footer",
            children:[],
            id:Math.random(),
            component:<Footer/>,
            styles:{},
            renderDatas:{
                links: [
                  { label: 'Home', url: '/' },
                  { label: 'About', url: '/about' },
                  { label: 'Services', url: '/services' },
                  { label: 'Contact', url: '/contact' },
                ],
                contact: {
                  address: '123 Main St, Cityville',
                  phone: '+123 456 7890',
                  email: 'info@example.com',
                },
                social: [
                  { icon: <FaFacebook />, url: 'https://facebook.com' },
                  { icon: <FaTwitter />, url: 'https://twitter.com' },
                  { icon: <FaInstagram />, url: 'https://instagram.com' },
                  { icon: <FaLinkedin />, url: 'https://linkedin.com' },
                ],
              }
        }
    ])

    const [createdSite, setCreatedSite] = useState({});
  

  
    const getNav = ()=>{
        const findedData = componentsData.find((val)=> val.compName == 'navbar')
        return findedData.renderDatas
    }

    const getBanner = ()=>{
        const findedData = componentsData.find((val)=> val.compName == 'banner')
        return findedData.renderDatas
    }

    const getFlex = ()=>{
        const findedData = componentsData.find((val)=> val.compName == 'flex')
        return findedData.renderDatas
    }

    const getGrid = ()=>{
        const findedData = componentsData.find((val)=> val.compName == 'grid')
        return findedData.renderDatas
    }

    const getFooter = ()=>{
        const findedData = componentsData.find((val)=> val.compName == 'footer')
        return findedData.renderDatas
    }

    const removeComponent=(index)=>{
      setCreatedSite(
        createdSite.filter((val,i)=> i !== index)
      )
    }



    const setSiteDatasToStore = (pageName, data) => {
      
      let temp = createdSite && createdSite[pageName] 
          ? [...createdSite[pageName], data]
          : [data];
      setCreatedSite((prev) => ({
          ...prev,
          [pageName]: temp,
      }));
  };
  


  

    return <UseContextData.Provider value={{componentsData, getNav, getBanner,
        getFlex, getGrid, getFooter, createdSite, 
        setSiteDatasToStore,
        preview, setPreview, removeComponent
    }}>
        {children}
    </UseContextData.Provider>
}

export default StoreDatas;

export const getStoreData =()=>{
    return useContext(UseContextData)
} 