import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Award } from 'lucide-react';

const experience = [
  {
    title: "Software Developer III",
    company: "Infosys USA",
    year: "2024 - Present",
    client:"Client: Charter Communications",
    description: "In the Mobile Logistics Platform module, I contributed to projects such as FedEx REST Migration and Expedite Delivery. I extensively worked with Java Spring Boot to develop and maintain scalable microservices integrated with Oracle, MongoDB, Redis, and Kafka. I also facilitated seamless communication through third-party API integrations with FedEx, CTDI, and Amdocs to streamline order fulfillment, shipment tracking, and customer notifications",
    award: "Appreciation & Insta Award from Client Manager",
    icon: Briefcase
  },
  {
    title: "Senior Consultant",
    company: "Capgemini",
    year: "2021 - 2022",
    client:"Client: Becton Dickinson | Novelis Aditya Birla",
    description: "The project focused on quality analysis and data integration of metal alloys across systems, utilizing message queues (MQ) for data migration. I developed custom Java solutions and implemented a framework for Mule APIs and Java microservices to ensure seamless integration between diverse technologies. Designed and developed API architecture, integrating technologies such as IBM MQ, SAP, Oracle DB, MFT, and RESTful services to facilitate data exchange between systems. ",
    award: "Xtra-Mile Award Winner",
    icon: Briefcase
  },
  {
    title: "Senior Systems Engineer",
    company: "Infosys ",
    year: "2019 - 2021",
    client:"Client: Johnson Controls Inc",
    description: "In this project, I was responsible for developing MuleSoft interfaces to enable seamless interoperability between various data storage systems and customer service applications. I spearheaded the migration of a Java-based application to a MuleSoft-backed architecture and implemented internal frameworks for API development.Maintained API architecture using the API-led connectivity approach facilitating the seamless integration of SAP, Salesforce, and Oracle databases",
    award: "Insta Award for exceptional performance.",
    icon: Briefcase
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const iconVariants = {
  hidden: { scale: 0 },
  visible: {
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 10 }
  },
  hover: {
    scale: 1.2,
    rotate: 360,
    transition: { duration: 0.8 }
  }
};

const awardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
  hover: { 
    scale: 1.05, 
    transition: { duration: 0.3 } 
  }
};

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="py-20 bg-gradient-to-r from-orange-400 via-pink-500 to-blue-600 dark:bg-gradient-to-r dark:from-orange-500 dark:via-pink-600 dark:to-blue-700 transition-colors duration-300" id="about">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Experience
        </motion.h2>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {experience.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              whileHover={{ y: -10 }}
            >
              <motion.div
                className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6 mx-auto"
                variants={iconVariants}
                whileHover="hover"
              >
                <item.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                  {item.company}
                </p>
                <p className="text-white dark:text-gray-300 font-semibold mb-4">
                  {item.year}
                </p>
                <p className="text-gray-500 dark:text-gray-400 font-medium group-hover:bg-yellow-300 group-hover:text-gray-900 transition-colors duration-300 p-1 rounded-md">
                  {item.client}
                </p>
                <p className="text-gray-700 dark:text-gray-300 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300 p-2 rounded-md">
                  {item.description}
                </p>
                <motion.p 
                  className="text-green-600 dark:text-green-400 font-semibold mt-2 p-2 rounded-lg bg-green-50 dark:bg-green-900/40 border border-green-200 dark:border-green-700"
                  variants={awardVariants}
                  whileHover="hover"
                >
                  <span className="inline-flex items-center gap-2">
                    <Award className="w-5 h-5" /> {item.award}
                  </span>
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
