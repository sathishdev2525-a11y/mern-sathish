import React from 'react';
import { FaBriefcase, FaCode, FaChalkboardTeacher } from 'react-icons/fa'; // Import relevant icons

const experience = [
  {
    role: 'React / Next.js Front-End Developer',
    company: 'Zettastack, Coimbatore',
    duration: '2021 – 2022',
    description:
      'Developed dynamic and interactive web applications using Next.js, React DnD, MobX, and Tailwind CSS. Built responsive interfaces and collaborated with designers to deliver user-friendly software automation solutions.',
    icon: <FaBriefcase className="text-purple-400 text-2xl" />,
  },

  {
    role: 'MERN Stack Developer',
    company: 'Siteocean Pvt Ltd, Coimbatore',
    duration: '2022 – Jan 2024',
    description:
      'Built full-stack web applications including a hyper-local search engine (similar to JustDial) using Next.js, Node.js, Express.js, and MongoDB. Implemented REST APIs, integrated third-party services, and optimized application performance and scalability.',
    icon: <FaCode className="text-blue-400 text-2xl" />,
  },

  {
    role: 'Full-Stack Trainer (MERN)',
    company: 'StateStreetIT, Coimbatore',
    duration: 'Jan 2024 – Mar 2024',
    description:
      'Trained students to become MERN full-stack developers. Provided practical training in React, Node.js, MongoDB, and Express. Guided multiple batches through hands-on real project tasks.',
    icon: <FaChalkboardTeacher className="text-green-400 text-2xl" />,
  },

  {
    role: 'MERN Stack Developer',
    company: 'Izet E Payments Pvt Ltd, Coimbatore',
    duration: '2024 – 2025',
    description:
      'Worked on various products including a WordPress-style drag-and-drop builder, hyper-local search engine, e-commerce platform with payment integration, chat application, and dynamic tree-structured websites.',
    icon: <FaCode className="text-blue-400 text-2xl" />,
  },

  {
    role: 'Software Developer',
    company: 'Coarasco Software Solutions Pvt Ltd, Coimbatore',
    duration: 'Jul 2025 – Nov 2025',
    description:
      'Worked as a web developer on an e-commerce platform using the MERN stack with Next.js. Contributed to UI development, API integration, product modules, and performance improvements.',
    icon: <FaBriefcase className="text-purple-400 text-2xl" />,
  },
];


const Experiences = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      data-aos-delay="100"
      className="bg-white bg-opacity-20 p-6 rounded-lg shadow-md w-[90%] mx-auto z-30"
    >
      <div className="space-y-6">
        {experience.map((exp, index) => (
          <div key={index} className="bg-white relative p-4 rounded-lg shadow hover:scale-100 duration-700 flex items-start gap-4">
            <div>{exp.icon}</div> {/* Render the icon here */}
            <img src="/starBell.gif" alt="" className='absolute top-0  right-3 h-[60px] w-[60px] md:w-[80px] md:h-[80px] mx-auto'/>
            <div>
              <h3 className="text-xl font-semibold text-purple-400">{exp.role}</h3>
              <p className="text-gray-600">{exp.company}</p>
              <p className="text-gray-500">{exp.duration}</p>
              <p className="text-gray-700 mt-2">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
