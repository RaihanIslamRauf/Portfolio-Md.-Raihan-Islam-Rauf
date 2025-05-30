import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const ContactMe = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="mx-auto mt-4 px-4 md:px-8 mb-8 py-12 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>

      <div className="flex flex-col md:flex-row gap-10">
        {/* Contact Info Column */}
        <div className="md:w-1/2 space-y-8">
          <div className="flex items-center gap-3 text-lg">
            <FaEnvelope className="text-red-500" />
            <span>md.raufislam27@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <FaPhone className="text-red-500" />
            <span>+8801831539667</span>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <FaMapMarkerAlt className="text-red-500" />
            <span>Dhaka, Bangladesh</span>
          </div>

          <div className="flex gap-8 text-gray-400 text-3xl mt-6">
            <a
              href="https://www.linkedin.com/in/raihan-islam-rauf-6a6660227/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/RaihanIslamRauf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.facebook.com/yourfacebookprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
          </div>
        </div>

        {/* Form Column */}
        <form onSubmit={handleSubmit} className="md:w-1/2 space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-red-500 transition"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-red-500 transition"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-red-500 transition resize-none"
          />

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-md font-semibold transition"
          >
            Send Message
          </button>

          {submitted && (
            <p className="text-red-400 text-center mt-4">
              Thanks for reaching out! I'll get back to you soon.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
