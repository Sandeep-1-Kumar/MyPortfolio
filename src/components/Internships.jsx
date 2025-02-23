import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';

const internships = [
  {
    company: "Operation Food Search",
    role: "Team Lead Software Developer",
    duration: "Sep 2023 – Dec 2023",
    description: "Led the design and delivery of a secure backend solution, implementing role-based access control, and developing a cross-platform mobile application. Optimized cost from $4000/year to $90/month.",
    tech: ["Java", "Spring Boot", "MySQL", "Flutter", "Firebase", "Docker", "Render"],
    icon: Briefcase
  },
  {
    company: "Bank of Montreal",
    role: "Software Developer Intern",
    duration: "June 2023 – Aug 2023",
    description: "Developed a Scheduler base gRPC-based client report generation service, optimized data retrieval with AWS Aurora, and gained experience in Java Reactive Programming, PostgreSQL, and HTTP/2.",
    tech: ["gRPC", "Java", "PostgreSQL", "AWS Aurora", "Reactive Programming"],
    icon: Briefcase
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const iconVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10
    }
  },
  hover: {
    scale: 1.2,
    rotate: 360,
    transition: { duration: 0.8 }
  }
};

export default function Internships() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 dark:bg-gray-900 transition-colors duration-300" id="internships">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Internships
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {internships.map((internship, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 text-gray-900 dark:text-white"
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="w-16 h-16 bg-blue-200 dark:bg-blue-800 rounded-full flex items-center justify-center mb-6 mx-auto"
                variants={iconVariants}
                whileHover="hover"
              >
                <internship.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </motion.div>

              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-2">{internship.company}</h3>
                <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">{internship.role}</p>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4">
  {internship.duration}
</p>

                <p className="text-gray-800 dark:text-gray-200 mb-4">{internship.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {internship.tech.map((tech, techIndex) => (
                    <motion.span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-600 text-sm rounded-full text-white shadow-md hover:bg-blue-700 transition"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
