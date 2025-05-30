import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaUserCheck,
  FaBullseye,
  FaRocket,
  FaClock,
  FaLightbulb,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiVercel,
  SiNetlify,
  SiJsonwebtokens,
} from "react-icons/si";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.05, boxShadow: "0 10px 20px rgba(220,38,38,0.7)" },
};

const Skills = () => {
  return (
    <div className="w-full py-12 px-4 md:px-8 text-white">
      <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>

      <div className="grid md:grid-cols-4 gap-8">
        {/* Frontend Card */}
        <motion.div
          className="bg-gray-800 rounded-2xl shadow-red-600/50 p-6"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-red-400">🎨 Frontend</h3>
          <div className="space-y-2 text-gray-300">
            <div className="flex items-center gap-2"><FaHtml5 className="text-orange-500" /> HTML5</div>
            <div className="flex items-center gap-2"><FaCss3Alt className="text-blue-500" /> CSS3</div>
            <div className="flex items-center gap-2"><SiTailwindcss className="text-cyan-400" /> Tailwind CSS</div>
            <div className="flex items-center gap-2"><FaJs className="text-yellow-400" /> JavaScript (ES6)</div>
            <div className="flex items-center gap-2"><FaReact className="text-cyan-300" /> React.js</div>
          </div>
        </motion.div>

        {/* Backend Card */}
        <motion.div
          className="bg-gray-800 rounded-2xl shadow-red-600/50 p-6"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-red-400">🛠️ Backend</h3>
          <div className="space-y-2 text-gray-300">
            <div className="flex items-center gap-2"><FaNodeJs className="text-green-500" /> Node.js</div>
            <div className="flex items-center gap-2"><SiExpress className="text-gray-400" /> Express.js</div>
            <div className="flex items-center gap-2"><SiMongodb className="text-green-400" /> MongoDB</div>
            <div className="flex items-center gap-2"><SiFirebase className="text-yellow-300" /> Firebase</div>
            <div className="flex items-center gap-2"><SiJsonwebtokens className="text-red-400" /> JWT</div>
          </div>
        </motion.div>

        {/* Tools & Deployment Card */}
        <motion.div
          className="bg-gray-800 rounded-2xl shadow-red-600/50 p-6"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-red-400">🧰 Tools & Deployment</h3>
          <div className="space-y-2 text-gray-300">
            <div className="flex items-center gap-2"><FaGitAlt className="text-red-500" /> Git</div>
            <div className="flex items-center gap-2"><FaGithub className="text-white" /> GitHub</div>
            <div className="flex items-center gap-2"><SiNetlify className="text-green-500" /> Netlify</div>
            <div className="flex items-center gap-2"><SiVercel className="text-white" /> Vercel</div>
          </div>
        </motion.div>

        {/* Interpersonal Skills Card */}
        <motion.div
          className="bg-gray-800 rounded-2xl shadow-red-600/50 p-6"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-red-400 flex items-center gap-2">
            <FaUserCheck /> Interpersonal Skills
          </h3>
          <div className="space-y-2 text-gray-300">
            <div className="flex items-center gap-2"><FaBullseye className="text-yellow-400" /> Focused</div>
            <div className="flex items-center gap-2"><FaRocket className="text-purple-400" /> Fast learner</div>
            <div className="flex items-center gap-2"><FaClock className="text-blue-400" /> Trying to manage time well</div>
            <div className="flex items-center gap-2"><FaLightbulb className="text-green-400" /> Eager to improve</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
