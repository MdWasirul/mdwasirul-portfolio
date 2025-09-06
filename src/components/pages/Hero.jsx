import About from "./About";
import Footer from "./Footer";
import Projects from "./Projects";
import Skills from "./Skills";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <>
      <section className="min-h-screen px-4 flex flex-col md:flex-row items-center justify-between bg-gray-100 border border-red-600  ">
        <div className="max-w-xl space-y-6 ml-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Hi, I'm <span className="text-blue-600">MD Wasirul</span>
          </h1>

          <TypeAnimation
            sequence={[
              "React JS Developer.",
              2000,
              "Aspiring Full-Stack Developer.",
              2000,
              "I Build Scalable Web Applications.",
              2000,
              "From Concept to Code.",
              2000,
              "Bridging Frontend and Backend.",
              2000,
            ]}
            wrapper="h2"
            speed={40}
            className="text-2xl text-pink-700  font-bold"
            repeat={Infinity}
          />

          <p className="text-gray-600 font-semibold text-xl">
            I craft responsive and engaging web interfaces using HTML, CSS,
            JavaScript, and React. Passionate about learning, building, and
            creating pixel-perfect UIs.
          </p>

          {/* Buttons with enhanced hover effects */}
          <div className="flex space-x-4 ">
            <a
              href="#projects"
              className="px-6 py-3 mt-5 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 mt-5 border-2 border-blue-600 text-blue-600 rounded-2xl hover:bg-blue-50 transition duration-300 transform hover:scale-105"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Image with hover effect and entrance animation */}
        <div className="">
          <img
            src="./vite.svg" // Replace with your actual image path
            alt="Developer at work"
            className="w-72 md:w-80 transition duration-300 ease-in-out transform hover:scale-105 rounded-full border border-green-500 m-4"
          />
        </div>
      </section>
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
};

export default Hero;
