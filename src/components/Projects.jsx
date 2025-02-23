import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import polyglotImage from '../assets/polyglot.png';
import ifsImg from '../assets/IFS.jpg';
import asta from '../assets/asta.jpg';
import FDAU from '../assets/FDAU.jpg';

const projects = [
  {
    title: "POLYGLOT",
    description: "A Full-stack language learning platform for English speakers to learn any other native.Implemented Swahili language translation algorithm, ensuring linguistic accuracy across multiple tenses. Further extendable to other languages.",
    image: polyglotImage,
    tech: ["Java", "SpringBoot", "MySql", "React.js"],
    github: "https://github.com/Sandeep-1-Kumar/Polyglot",
  },
  {
    title: "Indian Flavor Scape",
    description: "A Full Stack Web Application aims to digitalize the ordering process by providing customers ability to select their preferred flavors and customize their orders.Providing role based authentication for staff and customers.",
    image: ifsImg,
    tech: ["Java", "SpringBoot", "MySql", "React.js"],
    github: "https://github.com/Sandeep-1-Kumar/IndianFlavorScape"
  },
  {
    title: "Indian Ludo Astachamma",
    description: "A Java based Indian Ludo game, following OOD principles like MVC, Strategy, and Observer patterns. Interface using Java Swing (J-Frames).State-saving and loading by Java serialization and high-score tracking with file.",
    image: asta,
    tech: ["Core Java", "OOPS", "OODS", "J Frames"],
    github: "https://github.com/Sandeep-1-Kumar/IndianLudo_AstaChamma"
  },
  {
    title: "Flight-Data-Acquisition-unit",
    description: "Designed Software Architecture for a real-time Flight Data Acquisition system is designed for aviation, enabling high-speed sensor data ingestion at 10MB/s while retaining all data for 10 hours using a FIFO approach.",
    image: FDAU,
    tech: [],
    github: "https://github.com/Sandeep-1-Kumar/Flight-Data-Acquisition-unit"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  },
  hover: {
    y: -10,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 300
    }
  }
};

const imageVariants = {
  hover: {
    scale: 1.1,
    transition: { duration: 0.4 }
  }
};

const linkVariants = {
  hover: {
    scale: 1.2,
    rotate: 360,
    transition: { duration: 0.6 }
  }
};

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
      <section className="py-20 bg-gradient-to-r from-green-400 via-teal-500 to-green-600 dark:bg-gradient-to-r dark:from-green-500 dark:via-teal-600 dark:to-green-700 transition-colors duration-300" id="projects">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h2>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
            >
              <div className="relative overflow-hidden group">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  variants={imageVariants}
                  whileHover="hover"
                />
                <motion.div 
                  className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.a
                    href={project.github}
                    className="p-2 bg-white dark:bg-gray-800 rounded-full"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    <Github className="w-6 h-6 text-gray-900 dark:text-white" />
                  </motion.a>
                 
                </motion.div>
              </div>

              <motion.div 
                className="p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-600 dark:bg-blue-500 text-sm rounded-full text-white"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
