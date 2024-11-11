import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from '@/components/navbar';
import Skills from './skills';
import Experiences from './experiences';
import Education from './educations';
import Footer from '@/components/footer';
import { FaWhatsapp } from "react-icons/fa";
import ProjectsSection from './projects';
import ContactSection from './contactSection';

export default function AppHome() {

const handleRedirect = () => {
  const whatsappURL = `https://wa.me/${9856535653}?text=${'Hi, Sathish '}`;
  window.location.href = whatsappURL;
};

const [slidOpen, setSlidOpen] = useState(false)
  return (
    <div>
      <Head>
        <title>Sathish MERN</title>
        <meta name="description" content="My professional resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="bg-[#ffffff]  text-blue-500 min-h-screen p-2 space-y-8 relative">
        <span onClick={handleRedirect} className='fixed cursor-pointer animate-bounce bottom-5 right-4 md:right-8 p-3 rounded-full bg-purple-400
        text-[30px] text-white z-50'><FaWhatsapp/></span>
        {/* Banner */}
        <div className="container flex relative mx-auto min-h-[75vh] justify-center items-center bg-white  shadow-lg rounded-lg">
        <img src="/bannerBgImg.png" alt="" className='absolute inset-0 z-0 h-full w-full object-fill'/>
          <div className="flex flex-col relative md:flex-row space-y-6 justify-center items-center p-6">
          
            <div className="flex-1 space-y-1 relative z-30">
              <>
                <h1  data-aos="flip-up" className="text-[30px]  group  font-mono capitalize duration-500 bg-gradient-to-r from-purple-400 to-pink-200 text-white p-3">Hi, I am <span className='group-hover:underline duration-300 group-hover:leading-snug'>SathishKumar R</span></h1>
                <h3 className="text-[20px] text-purple-500 relative flex items-center gap-x-1"><span>MERN Stack developer </span>  <img src={"/tagLineGif.gif"} alt="" className='w-[25px] h-[25px] opacity-45'/></h3>
              </>
              <p className="text-[16px] text-gray-500 leading-relaxed font-semibold">
                with 3 years of experience in designing, implementing, and maintaining robust web applications. Proven ability to translate complex business requirements into scalable and efficient technical solutions. Strong understanding of front-end and back-end development principles, with a passion for creating seamless user experiences. Skilled in developing dynamic web applications with real-time updates and interactive interfaces.
              </p>
            </div>
            <div className="flex-1 grid justify-center z-30 items-center w-full]" data-aos="flip-left">
              {/* <img src={'/sathish.jpg'} alt="img" width={100} height={100} className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full hover:scale-95 duration-1000" /> */}
              {/* <ChatArray/> */}
              <img src="/sathishImage.png" alt="" className='h-[60vh] w-full z-30 rounded-md'/>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="container flex flex-col sectionScrollInSmall md:sectionScrollInLg mx-auto min-h-[82vh] justify-center items-center bg-white shadow-lg rounded-lg  p-3 md:p-6 mt-5 relative" id="education">
        <img src={"/bgDot.gif"} alt="" className='absolute inset-0 z-0 h-full w-full object-fill bg-repeat-x'/>

        <img src="/diwaliTop.gif" alt="" className='absolute z-10 top-0 rounded-tl-md left-0 h-[60px] w-[60px] md:w-[100px] md:h-[100px] mx-auto'/>
        <img src="/blinkStar.gif" alt="" className='absolute z-10 bottom-0 rounded-tl-md left-0 h-[60px] w-[60px] md:w-[100px] md:h-[100px] mx-auto'/>
        <img src="/blinkStar.gif" alt="" className='absolute z-10 top-0 rounded-tl-md right-0 h-[60px] w-[60px] md:w-[100px] md:h-[100px] mx-auto bg-opacity-30'/>
          <h2 className="text-3xl font-bold mb-4 text-center  z-20 text-purple-500 underline underline-offset-4">Education</h2>
          <Education />
          {/* <button onClick={()=>setSlidOpen(!slidOpen)} className='text-white  z-50 flex justify-center items-center absolute top-[50%] font-mono text-[25px] animate-pulse'>{slidOpen ? 'close' : 'open'}</button>
          <div onClick={()=>setSlidOpen(true)} className={`absolute duration-500 w-[50%] bg-[#eb84f8] opacity-60 z-40 h-full ${slidOpen ? '-left-[60%]': "left-0"}`}></div>
          <div onClick={()=>setSlidOpen(true)} className={`absolute duration-500 w-[50%] bg-[#eb84f8]  opacity-60 z-40 h-full ${slidOpen ? '-right-[60%]': "right-0"}`}></div> */}
        </div>
   
        {/* Skills */}
        <div className="container sectionScrollInSmall md:sectionScrollInLg flex flex-col mx-auto min-h-[82vh] justify-center items-center  bg-white shadow-lg rounded-lg  p-3 md:p-6 relative" id="skills">

        <img src="/diwaliTop.gif" alt="" className='absolute top-0 z-30 rounded-tl-md left-0 h-[60px] w-[60px] md:w-[100px] md:h-[100px] mx-auto'/>
          <h1 className="text-3xl font-bold mb-6  z-30 text-center text-purple-500 underline underline-offset-4">Skills</h1>
          <Skills />
          <img src="/purpleBg.png" alt="" className='absolute opacity-25 bottom-0 right-0 left-0 w-full z-0 rounded-tl-md '/>

        </div>

        {/* Experiences */}
        <div className="container sectionScrollInSmall md:sectionScrollInLg flex flex-col mx-auto min-h-[82vh] justify-center items-center bg-white shadow-lg rounded-lg  p-3 md:p-6 relative" id="experiences">
        <img src="/diwaliTop.gif" alt="" className='absolute top-0 rounded-tl-md left-0 h-[60px] w-[60px] md:w-[100px] md:h-[100px] mx-auto'/>
          <h2 className="text-3xl z-30 font-bold mb-4 text-center text-purple-500 underline underline-offset-4">Experiences</h2>
          <Experiences />
          <img src="/purpleBg.png" alt="" className='absolute opacity-25 bottom-0 right-0 left-0 w-full z-0 rounded-tl-md '/>

        </div>

        {/* projects */}
        <div className="container sectionScrollInSmall md:sectionScrollInLg flex flex-col mx-auto min-h-[82vh] justify-center items-center bg-white shadow-lg rounded-lg p-3 relative" id="projects">
        <img src="/diwaliTop.gif" alt="" className='absolute top-0 rounded-tl-md  left-0 h-[60px] w-[60px] md:w-[100px] md:h-[100px] mx-auto'/>
        <h1 className="text-3xl font-bold mb-4 text-center text-purple-500 underline underline-offset-4">Projects</h1>

        <ProjectsSection/>
        <img src="/purpleBg.png" alt="" className='absolute opacity-25 bottom-0 right-0 left-0 w-full z-0 rounded-tl-md '/>

        </div>

      {/* contact section */}
      <div className="container sectionScrollInSmall md:sectionScrollInLg flex flex-col mx-auto min-h-[82vh] justify-center items-center bg-white shadow-lg rounded-lg p-3 md:p-6 relative" id="contact">
      <img src="/diwaliTop.gif" alt="" className='absolute top-0 rounded-tl-md left-0 h-[60px] w-[60px] md:w-[100px] md:h-[100px] mx-auto'/>
        <h1 className="text-3xl font-bold mb-4 text-center text-purple-500 underline underline-offset-4">Get in Touch</h1>
        <ContactSection/>
      </div>
      </main>
      <Footer />
    </div>
  );
}
