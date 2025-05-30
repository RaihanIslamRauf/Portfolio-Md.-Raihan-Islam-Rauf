import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const educationData = [
  {
    title: "Bachelor of Science in Computer Science & Engineering",
    institution: "Stamford University Bangladesh",
    duration: "2020 - 2024",
    result: "CGPA 3.76",
    icon: <FaUniversity className="text-2xl text-red-500" />,
  },
  {
    title: "Higher Secondary School Certificate",
    institution: "Adamjee Cantonment College",
    duration: "2015 - 2017",
    result: "GPA 5.00",
    icon: <FaGraduationCap className="text-2xl text-red-500" />,
  },
  {
    title: "Secondary School Certificate",
    institution: "National Bank Public School",
    duration: "2013 - 2015",
    result: "GPA 5.00",
    icon: <FaSchool className="text-2xl text-red-500" />,
  },
];

const Education = () => {
  return (
    <div className="w-full px-4 md:px-8 py-12 text-white">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        Education
      </h2>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-red-500/30 transition duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              {edu.icon}
              <h4 className="text-lg md:text-xl font-semibold text-red-400">{edu.title}</h4>
            </div>
            <h5 className="text-sm md:text-base text-gray-300">
              {edu.institution} / {edu.duration}
            </h5>
            <p className="text-gray-400 text-sm mt-1">Result: {edu.result}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
