import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import backgroundImage from '../assets/backgroundImage.jpg';
import profileImage from '../assets/sandeep.png';
import resume from '../assets/Sandeep_Resume.pdf';

export default function Hero() {
  return (
    <motion.section 
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center text-white bg-gray-900 overflow-hidden px-6 sm:px-10 md:px-16"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800 opacity-80"></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between w-full max-w-6xl gap-10">
        
        {/* Left - Introduction & Skills */}
        <div className="text-center lg:text-left space-y-6 max-w-lg">
          <motion.h1 
            className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-400"
            initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}
          >
            Hi, I'm Sandeep
          </motion.h1>
          <motion.h2 
            className="text-2xl font-semibold"
            initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 1 }}
          >
            Software Developer at Infosys
          </motion.h2>
          <motion.p 
  className="text-md md:text-lg text-gray-400 max-w-lg"
  whileHover={{ scale: 1.05, color: "#ffffff", backgroundColor: "#3b82f6", borderRadius: "5px" }}
  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}
  
>
  5+ years of experience specializing in Backend
</motion.p>

{/* Bullet Points Section */}
<motion.ul 
  className="text-md md:text-lg text-gray-400 max-w-lg list-none pl-5 mt-4"
  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}
>
  <motion.li 
    className="mb-2 flex items-center space-x-2"
    whileHover={{ scale: 1.05, color: "#ffffff", backgroundColor: "#3b82f6", borderRadius: "5px" }}
  >
    <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span> {/* Custom bullet */}
    <span>Java and Spring Boot</span>
  </motion.li>
  <motion.li 
    className="mb-2 flex items-center space-x-2"
    whileHover={{ scale: 1.05, color: "#ffffff", backgroundColor: "#3b82f6", borderRadius: "5px" }}
  >
    <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span> {/* Custom bullet */}
    <span>Microservices</span>
  </motion.li>

  <motion.li 
    className="mb-2 flex items-center space-x-2"
    whileHover={{ scale: 1.05, color: "#ffffff", backgroundColor: "#3b82f6", borderRadius: "5px" }}
  >
    <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span> {/* Custom bullet */}
    <span>MuleSoft and Anypoint Platform</span>
  </motion.li>

  <motion.li 
    className="mb-2 flex items-center space-x-2"
    whileHover={{ scale: 1.05, color: "#ffffff", backgroundColor: "#3b82f6", borderRadius: "5px" }}
  >
    <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span> {/* Custom bullet */}
    <span>API-Led Connectivity</span>
  </motion.li>
</motion.ul>


          
          


         

      

          <motion.div className="flex space-x-5 mt-6 justify-center lg:justify-start">
            {[ 
              { Icon: Github, href: "https://github.com/Sandeep-1-Kumar" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/sandeepsutharapu" },
              { Icon: Mail, href: "mailto:sandeepsutharapu18896@gmail.com" },
              { Icon: FileText, href: resume, download: "Sandeep_Resume.pdf" },
            ].map(({ Icon, href }, index) => (
              <motion.a 
                key={index} href={href} 
                className="text-gray-400 hover:text-white transition"
                whileHover={{ scale: 2.1 }}  transition={{ duration: 0.1 }}
              >
                <Icon size={30} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Right - Profile Image with Floating Effect */}
        <motion.div 
          className="relative flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}
        >
          <motion.img 
            src={profileImage} 
            alt="Profile" 
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full border-4 border-blue-500 shadow-lg object-cover"
            whileHover={{ scale: 2.05 }} transition={{ duration: 0.3 }}
          />
        </motion.div>

      </div>
    </motion.section>
  );
}
