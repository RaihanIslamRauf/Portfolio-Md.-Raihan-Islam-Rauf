import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import crowdcubeImg from "../assets/crowdcube.jpg";
import runtrackImg from "../assets/runtrack.jpg";

const techColors = {
  React: "bg-cyan-500",
  Tailwind: "bg-teal-500",
  Node: "bg-green-600",
  Express: "bg-gray-600",
  MongoDB: "bg-green-700",
  Firebase: "bg-yellow-400",
  JWT: "bg-red-500",
  Vercel: "bg-black text-white",
};

// Container animation for stagger effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

// Each project card animation
const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  hover: {
    scale: 1.05,
    boxShadow: "0 15px 30px rgba(239, 68, 68, 0.5)",
    transition: { duration: 0.3 },
  },
};

// Tech tag animation
const techVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const Projects = () => {
  const projectList = [
    {
      title: "Crowdcube",
      overview: "An online donation platform for crowdfunding different causes.",
      description: [
        "Users can donate securely to different causes",
        "Users can add and manage donation campaigns",
        "Authenticated users can track their donation history",
      ],
      image: crowdcubeImg,
      live: "https://assignment-10-ebf30.web.app/",
      client: "https://github.com/RaihanIslamRauf/b-10-a-10-client-side",
      server: "https://github.com/RaihanIslamRauf/b-10-a-10-server-side",
      technologies: [
        "React",
        "Tailwind",
        "Node",
        "Express",
        "MongoDB",
        "Firebase",
        "Vercel",
      ],
    },
    {
      title: "RunTrack",
      overview:
        "A modern web platform built to simplify marathon event management.",
      description: [
        "Users can apply to their desired marathon events",
        "Users can add and manage their desired marathon campaigns",
        "Users can search and sort their campaigns",
      ],
      image: runtrackImg,
      live: "https://assignment-11-4d65a.web.app/",
      client: "https://github.com/RaihanIslamRauf/b-10-a-11-client-side",
      server: "https://github.com/RaihanIslamRauf/b-10-a-11-server-side",
      technologies: [
        "React",
        "Tailwind",
        "Node",
        "Express",
        "MongoDB",
        "Firebase",
        "JWT",
        "Vercel",
      ],
    },
  ];

  // State to track which button is active per project (index)
  const [activeButtons, setActiveButtons] = useState({});

  const handleActive = (projectIndex, buttonType) => {
    setActiveButtons((prev) => ({
      ...prev,
      [projectIndex]: buttonType,
    }));
  };

  return (
    <div className="w-full py-12 px-4 md:px-8 text-white">
      <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-md cursor-pointer"
            variants={cardVariants}
            whileHover="hover"
          >
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-red-400">
                {project.title}
              </h3>
              <p className="text-gray-300 italic">{project.overview}</p>

              <p className="text-sm text-gray-400 font-semibold mt-2">
                Technologies:
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    className={`px-3 py-1 rounded-full text-xs font-semibold select-none ${
                      techColors[tech] || "bg-gray-600"
                    }`}
                    variants={techVariants}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              <ul className="list-disc list-inside text-sm text-gray-300 space-y-1 mt-4">
                {project.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleActive(index, "live")}
                  className={`inline-flex items-center gap-2 px-5 py-2 rounded-md text-sm font-semibold text-white transition transform focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2
                    ${
                      activeButtons[index] === "live"
                        ? "bg-red-700 ring-4 ring-red-400"
                        : "bg-red-600 hover:bg-red-700"
                    }
                  `}
                >
                  Live <FaExternalLinkAlt className="w-4 h-4" />
                </a>
                <a
                  href={project.client}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleActive(index, "client")}
                  className={`inline-flex items-center gap-2 px-5 py-2 rounded-md text-sm font-semibold text-white transition transform focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2
                    ${
                      activeButtons[index] === "client"
                        ? "bg-red-700 ring-4 ring-red-400"
                        : "bg-red-600 hover:bg-red-700"
                    }
                  `}
                >
                  Client <FaGithub className="w-4 h-4" />
                </a>
                <a
                  href={project.server}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleActive(index, "server")}
                  className={`inline-flex items-center gap-2 px-5 py-2 rounded-md text-sm font-semibold text-white transition transform focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2
                    ${
                      activeButtons[index] === "server"
                        ? "bg-red-700 ring-4 ring-red-400"
                        : "bg-red-600 hover:bg-red-700"
                    }
                  `}
                >
                  Server <FaGithub className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
