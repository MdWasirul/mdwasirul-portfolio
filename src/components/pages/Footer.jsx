import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-indigo-200 py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Left - Name / Copyright */}
        <p className="text-gray-700 text-sm md:text-base">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">MD Wasirul</span>. All rights
          reserved.
        </p>

        {/* Middle - Navigation Links */}
        <div className="flex space-x-6 text-gray-700 font-medium">
          <a href="#about" className="hover:text-blue-600 transition">
            About
          </a>
          <Link to="/about">ABout</Link>
          <a href="#skills" className="hover:text-blue-600 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-blue-600 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-600 transition">
            Contact
          </a>
        </div>

        {/* Right - Social Icons */}
        <div className="flex space-x-5 text-gray-700 text-xl">
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourtwitter"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:yourmail@gmail.com"
            className="hover:text-red-500 transition"
          >
            <MdEmail />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
