import About from "./About";
import Footer from "./Footer";
import Projects from "./Projects";
import Skills from "./Skills";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <>
      <section className="min-h-screen px-4 flex flex-col md:flex-row items-center justify-between bg-gray-100">
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

          <p className="text-slate-700 leading-7 text-md">
            I'm{" "}
            <span className="text-indigo-600 font-semibold">Md Wasirul</span>, a
            Full-Stack Developer focused on building modern, scalable web
            applications. Skilled in React.js, Next.js, Node.js, TypeScript, and
            MongoDB, I enjoy turning ideas into responsive, user-friendly
            digital experiences. As a final-year BCA student graduating in 2026,
            I'm eager to contribute to innovative teams and impactful software
            projects.
          </p>

          {/* Buttons with enhanced hover effects */}
          <div className="flex space-x-4 ">
            <a
              href="#projects"
              className="px-6 py-3 mt-3 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="/Md_Wasirul_Resume.pdf"
              download
              className="px-6 py-3 mt-3 border-2 border-blue-600 text-blue-600 rounded-2xl hover:bg-blue-200 transition duration-300"
            >
              Download Resume
            </a>
          </div>
          <div className="flex gap-10 mt-6 flex-wrap">
            <div>
              <h3 className="text-3xl font-bold text-cyan-400">3+</h3>
              <p className="text-slate-400">Full-Stack Projects</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">5+</h3>
              <p className="text-slate-400">Technologies</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">2026</h3>
              <p className="text-slate-400">BCA Graduate</p>
            </div>
          </div>
        </div>

        {/* Image with hover effect and entrance animation */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full blur-xl opacity-40"></div>

          <img
            src="./portfolio.png"
            alt="Md Wasirul"
            className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-slate-700 hover:scale-105 transition-all duration-500"
          />
        </div>
      </section>
      <About />
      <Skills />
      <Projects />
    </>
  );
};

export default Hero;
