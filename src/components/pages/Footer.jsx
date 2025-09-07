import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-200 py-10 ">
      <div className=" px-8 space-y-2 flex flex-col md:flex-row items-center justify-between md:space-y-0">
        <div>
          <p className="text-sm md:text-base">
            &copy;{currentYear}{" "}
            <span className="font-semibold text-blue-600">Md Wasirul</span> All
            rights reserved.
          </p>
        </div>
        <div className="flex space-x-6 font-medium">
          <Link
            to="/about"
            className="hover:text-blue-600 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/skills"
            className="hover:text-blue-600 transition duration-300"
          >
            Skills
          </Link>
          <Link
            to="/projects"
            className="hover:text-blue-600 transition duration-300"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-600 transition duration-300"
          >
            Contact
          </Link>
        </div>

        {/* Right - Social Icons */}
        <div className="flex space-x-5 text-gray-700 text-2xl">
          <a
            href="https://github.com/MdWasirul/mdwasirul-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/md-wasirul-ab8a96271/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:techbymdwasirul2024@gmail.com"
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
