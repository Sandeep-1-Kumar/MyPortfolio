import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Cloud, ShieldCheck, FlaskConical , Laptop, Blocks, Github, Frame, ScanEye, FolderKanban, Pickaxe} from 'lucide-react';

const skills = [
  {
    category: "Programming Languages",
    icon: Code2,
    items: ["Java", "Java Reactive Programming", "SQL"]
  },
  {
    category: "Frameworks & Technologies",
    icon: Frame,
    items: ["Spring Boot", "gRPC", "Kafka","Flutter Flow", "Firebase"]
  },
  {
    category: "MuleSoft Tools",
    icon: Blocks,
    items: ["Anypoint Design Center", "Anypoint Exchange", "Anypoint Studio", "Anypoint Runtime Manager", "Anypoint Security"]
  },
  {
    category: "Databases",
    icon: Database,
    items: ["Oracle", "MySQL", "PostgreSQL", "MongoDB", "Redis"]
  },
 
  
  {
    category: "Security & Authentication",
    icon: ShieldCheck,
    items: ["JWT", "OAuth2", "SSO", "SAML"]
  },
  {
    category: "Version Control",
    icon: Github,
    items: ["GIT", "Bitbucket"]
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    items: ["AWS (EC2, Lambda, S3)", "Azure", "Docker", "Kubernetes", "Jenkins"]
  },
 
  {
    category: "Testing & Code Quality",
    icon: FlaskConical,
    items: ["JUnit", "MUnit", "SonarQube", "JMeter", "Postman"]
  },
  {
    category: "FrontEnd Development",
    icon: Laptop ,
    items: ["React.js", "HTML", "CSS", "Bootstrap"]
  },

  {
    category: "Logging & Monitoring",
    icon: ScanEye,
    items: ["Splunk", "Datadog", "Kibana", "Elastic Search", "LOG4J2", "Any Point Runtime"]
  },
  {
    category: "Project Management & Issue Tracking",
    icon: FolderKanban,
    items: ["JIRA", "Octane", "Chalk", "Confluence", "Kanban", "Trello"]
  },
  {
    category: "IDEs & Design Platforms",
    icon: Pickaxe,
    items: ["Spring Tool Suite", "Anypoint Platform", "IntelliJ IDEA", "Eclipse", "Visual Studio"]
  },
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
  hidden: { opacity: 0, y: 20 },
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

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gradient-to-r from-orange-400 to-blue-600 dark:from-orange-500 dark:to-blue-700 transition-colors duration-300" id="skills">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Skills & Expertise
        </motion.h2>

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                <skill.icon className="w-10 h-10 text-blue-600 dark:text-blue-400 mr-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-600 dark:text-gray-400 flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
