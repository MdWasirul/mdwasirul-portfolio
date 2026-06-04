import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-5">
      <div className="max-w-4xl mx-auto space-y-6">
        <h2 className="text-4xl font-bold text-center text-gray-700">
          About Me
        </h2>
        <p className="text-xl font-semibold text-center text-gray-600 leading-8">
          I'm a passionate{" "}
          <span className="text-pink-600">Full-Stack Developer</span> and
          final-year BCA student with experience building modern web
          applications using <span className="text-purple-600">React.js</span>,{" "}
          <span className="text-blue-600">Next.js</span>,{" "}
          <span className="text-green-600">Node.js</span>, and{" "}
          <span className="text-emerald-600">MongoDB</span>. I enjoy creating
          responsive user interfaces, developing secure APIs, and transforming
          ideas into scalable digital solutions while continuously improving my
          technical and problem-solving skills.
        </p>
      </div>
    </section>
  );
};

export default About;
