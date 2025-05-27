import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
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

const Skills = () => {
  return (
    <div className="w-full py-12 px-4 md:px-8 text-white">
      <h2 className="text-3xl font-bold mb-10 text-center">💻 Skills</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Frontend Card */}
        <div className="bg-gray-800 rounded-2xl shadow-lg p-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <h3 className="text-xl font-semibold mb-4">🎨 Frontend</h3>
          <div className="space-y-2 text-gray-300">
            <div className="flex items-center gap-2"><FaHtml5 className="text-orange-500" /> HTML5</div>
            <div className="flex items-center gap-2"><FaCss3Alt className="text-blue-500" /> CSS3</div>
            <div className="flex items-center gap-2"><SiTailwindcss className="text-cyan-400" /> Tailwind CSS</div>
            <div className="flex items-center gap-2"><FaJs className="text-yellow-400" /> JavaScript (ES6)</div>
            <div className="flex items-center gap-2"><FaReact className="text-cyan-300" /> React.js</div>
          </div>
        </div>

        {/* Backend Card */}
        <div className="bg-gray-800 rounded-2xl shadow-lg p-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <h3 className="text-xl font-semibold mb-4">🛠️ Backend</h3>
          <div className="space-y-2 text-gray-300">
            <div className="flex items-center gap-2"><FaNodeJs className="text-green-500" /> Node.js</div>
            <div className="flex items-center gap-2"><SiExpress className="text-gray-400" /> Express.js</div>
            <div className="flex items-center gap-2"><SiMongodb className="text-green-400" /> MongoDB</div>
            <div className="flex items-center gap-2"><SiFirebase className="text-yellow-300" /> Firebase</div>
            <div className="flex items-center gap-2"><SiJsonwebtokens className="text-red-400" /> JWT</div>
          </div>
        </div>

        {/* Tools & Deployment Card */}
        <div className="bg-gray-800 rounded-2xl shadow-lg p-6 transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <h3 className="text-xl font-semibold mb-4">🧰 Tools & Deployment</h3>
          <div className="space-y-2 text-gray-300">
            <div className="flex items-center gap-2"><FaGitAlt className="text-red-500" /> Git</div>
            <div className="flex items-center gap-2"><FaGithub className="text-white" /> GitHub</div>
            <div className="flex items-center gap-2"><SiNetlify className="text-green-500" /> Netlify</div>
            <div className="flex items-center gap-2"><SiVercel className="text-white" /> Vercel</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
