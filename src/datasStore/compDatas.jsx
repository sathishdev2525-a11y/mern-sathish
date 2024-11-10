

import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TbLayoutNavbarCollapse } from "react-icons/tb";
import { CgWebsite } from "react-icons/cg";
import { CgDisplayFlex } from "react-icons/cg";
import { BsGrid1X2 } from "react-icons/bs";
import { LuPanelBottomClose } from "react-icons/lu";

import { BsFillPlayBtnFill } from "react-icons/bs";
import { VscLayoutStatusbar } from "react-icons/vsc";
import Navbar from "@/components/reactDnd/components/navComp";
import Banner from "@/components/reactDnd/components/bannerComp";
import FlexCardComp from "@/components/reactDnd/components/flexCardComp";
import Footer from "@/components/reactDnd/components/footerComp";
import ButtonComp from "@/components/reactDnd/components/buttonComp";
import ContainerComp from "@/components/reactDnd/components/containerComp";
import GridSection from "@/components/reactDnd/components/gridSection";

const { createContext, useContext, useState } = require("react");

const UseContextCompData = createContext()

const StoreCompDatas = ({children})=>{

    const [componentsData, setComponentsData] = useState([
        {
            compName:"navbar",
            children:[],
            id:Math.random(),
            component: Navbar,
            styles:{},
            renderDatas:{
                logo: "click here to Edit!", // Update with the actual path to your logo
                links: ["homePage" ], // Add more links as needed
              },
            icon:<TbLayoutNavbarCollapse/>,
        },
        {
            compName:"banner",
            children:[],
            id:Math.random(),
            component:Banner,
            styles:{},
            renderDatas:{
        title: "Welcome to My Portfolio",
        subtitle: "Building beautiful and efficient web applications.",
        buttonText: "Get in Touch",
        buttonLink: "#contact",
        imageUrl: "/path-to-your-image.jpg",
      },
      icon:<CgWebsite/>
        },
        {
            compName:"flex",
            children:[],
            id:Math.random(),
            component:FlexCardComp,
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
              ],
              icon:<CgDisplayFlex/>
        },
        {
            compName:"grid",
            children:[],
            id:Math.random(),
            component:GridSection,
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
              ],
              icon:<BsGrid1X2/>
        },
        {
            compName:"footer",
            children:[],
            id:Math.random(),
            component:Footer,
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
              },
              icon:<LuPanelBottomClose/>
        },
        {
          compName:"button",
          children:[],
          id:Math.random(),
          component:ButtonComp,
          styles:{},
          renderDatas:{
              innerText:"new button",
              onClick:()=>alert('hi from button')
            },
          icon:<BsFillPlayBtnFill/>,
      },
      {
        compName:"container",
        children:[],
        id:Math.random(),
        styles:{},
        renderDatas:{
            innerText:"new container",
          },
          component:ContainerComp,
        icon:<VscLayoutStatusbar/>,
    },
    ])


  

    return <UseContextCompData.Provider value={{componentsData}}>
        {children}
    </UseContextCompData.Provider>
}

export default StoreCompDatas;

export const getStoreCompData =()=>{
    return useContext(UseContextCompData)
} 