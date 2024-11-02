import React from 'react';
import { FaBriefcase, FaCode, FaChalkboardTeacher } from 'react-icons/fa'; // Import relevant icons

const experience = [
  {
    role: 'ReactJS Front End Developer',
    company: 'Zettastack in Coimbatore',
    duration: '1 year',
    description: 'Developed dynamic and interactive web applications for a software automation project using Next.js, MobX, Tailwind CSS, and React Drag & Drop. Collaborated closely with designers to implement responsive and user-friendly interfaces.',
    icon: <FaBriefcase className="text-purple-400 text-2xl" />, // Icon for this role
  },
  {
    role: 'MERN Stack Developer',
    company: 'Siteocean Pvt Ltd in Coimbatore',
    duration: '1.5 years',
    description: 'Built full-stack web applications using MongoDB, Express, React, and Node.js. Implemented RESTful APIs and integrated third-party services. Worked on improving performance and scalability of applications.',
    icon: <FaCode className="text-blue-400 text-2xl" />, // Icon for this role
  },
  {
    role: 'Trainer, Full-Stack',
    company: 'StateStreetIt in Coimbatore',
    duration: '3 months',
    description: 'I had three months of experience as a MERN stack trainer at StateStreetIT. In this role, my responsibility was to train students to become full-stack web developers.',
    icon: <FaChalkboardTeacher className="text-green-400 text-2xl" />, // Icon for this role
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
