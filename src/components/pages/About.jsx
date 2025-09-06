import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-5">
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-4xl font-bold text-center text-gray-700">
          About Me
        </h2>
        <p className="text-xl font-semibold text-center text-gray-600">
          I'm an aspiring <span className="text-pink-600 font-semibold">Frontend Developer</span> specializing in <span className="text-purple-600 font-semibold">React.js</span>. 
          I love creating clean, responsive, and user-friendly web applications 
          while continuously improving my skills in JavaScript, HTML, CSS, and modern tools.
        </p>
      </div>
    </section>
  );
};

export default About;
