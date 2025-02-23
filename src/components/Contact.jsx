import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MailCheck, MapPin, Phone } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const iconVariants = {
  hover: {
    scale: 1.2,
    backgroundColor: '#1D4ED8',
    transition: { duration: 0.3 },
  },
};

export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 dark:bg-gradient-to-r dark:from-blue-500 dark:via-purple-600 dark:to-pink-700 transition-colors duration-300" id="contact">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact Information
        </motion.h2>

        {/* Centering the grid content */}
        <div className="flex justify-center items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6 text-center md:text-left"
          >
            {[{ Icon: Mail, text: 'sandeepsutharapu18896@gmail.com' }, { Icon: MailCheck, text: 'sandeepkumar.sutharapu@slu.edu' }, { Icon: Phone, text: '+1 (214) 878-3561' }, { Icon: MapPin, text: 'Saint Louis, MO' }].map(({ Icon, text }, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center text-gray-600 dark:text-gray-200 group mb-4"
                whileHover={{ x: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <motion.div
                  className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center mr-4"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <Icon className="w-6 h-6 text-white group-hover:text-black transition-colors duration-300" />
                </motion.div>
                <span className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 text-white">
                  {text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
