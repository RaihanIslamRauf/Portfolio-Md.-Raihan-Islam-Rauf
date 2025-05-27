import React from "react";
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

  return (
    <div className="w-full py-12 px-4 md:px-8 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">🚀 Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-red-500/50 transition duration-300 transform hover:scale-[1.02]"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
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
                  <span
                    key={tech}
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      techColors[tech] || "bg-gray-600"
                    }`}
                  >
                    {tech}
                  </span>
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
                  className="text-sm underline hover:text-red-400"
                >
                  Live Link
                </a>
                <a
                  href={project.client}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline hover:text-red-400"
                >
                  GitHub Client
                </a>
                <a
                  href={project.server}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline hover:text-red-400"
                >
                  GitHub Server
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
