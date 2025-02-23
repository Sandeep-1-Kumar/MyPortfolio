import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    level: "Master of Science",
    degree: "Software Engineering",
    school: "Saint Louis University",
    year: "2022 - 2024",
    gpa: "3.95/4 GPA",
    description: "Specializing in designing, implementing, evaluating, and testing high-quality, large-scale, and complex software systems.",
    icon: GraduationCap
  },
  {
    level: "Bachelor of Technology",
    degree: "Aeronautical Engineering",
    school: "Sri indu College of Engineering & Technology",
    year: "2014 - 2018",
    gpa: "7.6/10 GPA",
    icon: GraduationCap
  },
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

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 dark:bg-gray-800 transition-colors duration-300" id="education">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Education
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {education.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-8 mx-auto"
                variants={iconVariants}
                whileHover="hover"
              >
                <item.icon className="w-10 h-10 text-blue-600 dark:text-blue-400" />
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {item.level && (
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {item.level}
                  </h3>
                )}
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.degree}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                  {item.school}
                </p>
                <p className="text-white font-semibold mb-2">
                  {item.year}
                </p>
                {item.gpa && (
                  <p className="text-white mb-4 hover:text-yellow-500 transition-colors duration-300">
                    GPA: {item.gpa}
                  </p>
                )}
                <p className="text-gray-700 dark:text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
