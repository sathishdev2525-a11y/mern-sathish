import React from 'react';
import { FaCode, FaTools, FaLayerGroup } from 'react-icons/fa'; // Import icons for each category

const skills = [
  
  {
    category: 'Frameworks & Libraries',
    icon: <FaLayerGroup className="text-blue-400 text-2xl" />, // Icon for Frameworks & Libraries
    items: ['TailwindCss', 'React', 'Next.js', 'Hooks', 'Redux', 'Mobx', 'DND', 'NodeJs', 'ExpressJs', 'Json', 'Jwt', 'Scoket.io'],
  },
  {
    category: 'Programming Languages',
    icon: <FaCode className="text-purple-400 text-2xl" />, // Icon for Programming Languages
    items: ['Html', 'Css', 'JavaScript', 'Java', 'C++', "C"],
  },
  {
    category: 'Tools & Technologies',
    icon: <FaTools className="text-green-400 text-2xl" />, // Icon for Tools & Technologies
    items: ['Git', 'Vercel', 'Render.com'],
  },
];

const Skills = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      data-aos-delay="100"
      className="max-w-4xl z-30 w-full mx-auto p-6 rounded-lg bg-white bg-opacity-45 shadow-md"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skillCategory, index) => (
          <div key={index} className="bg-white relative p-4 rounded-lg shadow hover:scale-100 duration-700">
                        <img src={"/settingWheel.gif"} alt="" className='absolute top-0 z-30 opacity-35  right-0 h-[100px] w-[100px] md:w-[80px] md:h-[80px] mx-auto'/>
                        <img src={"/busvan.gif"} alt="" className='absolute bottom-0 z-0  right-0 h-[100px] w-[100px] md:w-[80px] md:h-[80px] mx-auto'/>

            <div className="flex items-center gap-2 mb-4">
              {skillCategory.icon} {/* Render the icon */}
              <h2 className="text-xl font-semibold text-purple-400">{skillCategory.category}</h2>
            </div>
            <ul className="list-disc list-inside text-[#918d8d] grid grid-cols-2">
              {skillCategory.items.map((skill, i) => (
                <li key={i} className="font-medium">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
