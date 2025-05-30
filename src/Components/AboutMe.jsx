import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import profileImage from "../assets/rauf_islam.png";
import headerBg from "../assets/header_bg.png";

const AboutMe = () => {
  return (
    <div className="w-full py-12 px-4 md:px-8">
      <div
        className="mx-auto lg:flex flex-col-reverse lg:flex-row items-center gap-12 md:gap-20 text-white"
        style={{
          backgroundImage: `url(${headerBg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom right",
        }}
      >
        {/* Text Content */}
        <div className="flex-1 space-y-4 md:space-y-5">
          <h4 className="text-base md:text-lg text-gray-400">Hi, I am</h4>
          <h1 className="text-2xl md:text-4xl font-bold text-red-500">Md. Raihan Islam Rauf</h1>
          <h2 className="text-lg md:text-2xl font-semibold">Junior Frontend Developer</h2>
          
          <div className="text-gray-300 text-sm md:text-base space-y-1 flex flex-col">
            <span className="flex items-center gap-1">
              <FaMapMarkerAlt className="text-red-400" />
              Moghbazar, Dhaka, Bangladesh
            </span>
            <span className="flex items-center gap-1">
              <FaEnvelope className="text-red-400" />
              <a
                href="mailto:md.raufislam27@gmail.com"
                className="hover:text-red-300"
              >
                md.raufislam27@gmail.com
              </a>
            </span>
            <span className="flex items-center gap-1">
              <FaPhone className="text-red-400" />
              +880183159667
            </span>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-4 text-sm md:text-base">
            <a
              href="https://github.com/RaihanIslamRauf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 flex items-center gap-1"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/raihan-islam-rauf-6a6660227/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-400 flex items-center gap-1"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>

          {/* About Me Section */}
          <h3 className="text-base md:text-lg font-semibold mt-6">About Me</h3>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            I am a passionate frontend developer who loves creating clean, responsive,
            and user-friendly websites. I enjoy working with modern web technologies and
            continuously learning to improve my skills. My goal is to build engaging digital
            experiences that make a difference.
          </p>

          <a
            href="https://drive.google.com/file/d/1li9utSaXiObC-3-y3CowK8eIt3KFhaed/view?usp=drive_link"
            download
            target="_blank"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md font-semibold transition duration-300 text-sm md:text-base"
          >
            <FaDownload /> Download Resume
          </a>
        </div>

        {/* Profile Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={profileImage}
            alt="Md. Raihan Islam Rauf"
            className="w-64 sm:w-72 md:w-[360px] lg:w-[420px] xl:w-[500px] 2xl:w-[584px]"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
