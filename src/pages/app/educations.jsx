import React from 'react';
import { FaGraduationCap, FaBook } from 'react-icons/fa'; // Import icons for degree and courses

const education = [
  {
    degree: 'Diploma in Electronics and Communication Engineering (DECE)',
    institution: 'RVS Polytechnic College in Coimbatore',
    description: 'Completed with a focus on electronic circuits, microprocessors, and communication systems.',
    icon: <FaGraduationCap className="text-purple-600 text-2xl" />, // Icon for diploma
    img:"/honey.gif"
  },
  {
    degree: 'Courses',
    institution: 'ManFree Technology Coimbatore',
    description: 'Completed courses in C, C++, Java',
    icon: <FaBook className="text-blue-400 text-2xl" />, // Icon for short courses
    img:'/orangeButterfly.gif'
  },
  {
    degree: 'Courses',
    institution: 'N School Academy Coimbatore',
    description: 'Completed courses in MERN Stack (Html, Css, Bootstrap, Javascript, React, Nodejs, Expressjs, Mongodb).',
    icon: <FaBook className="text-green-400 text-2xl" />, // Icon for short courses
    img:'/pinkFlower.gif'
  },
];

const Education = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      data-aos-delay="100"
      className="p-6 rounded-lg shadow-md  text-white"
    >
      <div className="space-y-6 z-50 bg-white bg-opacity-45">
        {education.map((edu, index) => (
          <div key={index} className="bg-white bg-opacity-70 relative overflow-hidden text-purple-600 duration-700 p-4 rounded-lg shadow flex items-start gap-4">
            {/* {edu.icon} Render the icon */}
           
            <img src={edu.img} alt="" className=' h-[50px] w-[50px] z-50'/>
            <img src="/blinkStar.gif" alt="" className='z-50 absolute top-0 bg-opacity-35 rounded-tl-md right-0 h-[60px] w-[60px] md:w-[100px] md:h-[100px] mx-auto'/>
            <div className='absolute inset-0 flex justify-center items-center z-50'>
            {/* <img src={"/reactSpin.gif"} alt="" className='z-50 opacity-30 h-[100px] w-[100px] md:w-[80px] md:h-[80px] mx-auto'/> */}

            </div>
            <div className='z-50'>
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="text-gray-700 mt-2">{edu.description}</p>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
