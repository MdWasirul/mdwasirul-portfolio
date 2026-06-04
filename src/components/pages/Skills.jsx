import React from "react";
const skills = [
  { name: "HTML5", icon: "/icons/html5.svg", level: 90 },
  { name: "CSS3", icon: "/icons/css3.svg", level: 85 },
  { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg", level: 85 },
  { name: "JavaScript", icon: "/icons/js.svg", level: 85 },
  { name: "React JS", icon: "/icons/reactjs.svg", level: 85 },
  { name: "Node JS", icon: "/icons/nodejs.svg", level: 75 },
  { name: "SQL", icon: "/icons/sql.svg", level: 70 },
  { name: "Java", icon: "/icons/java.svg", level: 65 },
  { name: "Git", icon: "/icons/git.svg", level: 80 },
  { name: "GitHub", icon: "/icons/github.svg", level: 85 },
  { name: "Next.js", icon: "/icons/nextjs.svg", level: 80 },
  { name: "TypeScript", icon: "/icons/typescript.svg", level: 75 },
  { name: "MongoDB", icon: "/icons/mongodb.svg", level: 75 },
];
const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-slate-50 to-slate-100"
    >
      {" "}
      <div className="max-w-6xl mx-auto px-6">
        {" "}
        <h2 className="text-4xl font-bold text-center mb-4">My Skills </h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          Technologies and tools I use to build responsive, scalable, and modern
          web applications.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex justify-center">
                <img src={skill.icon} alt={skill.name} className="w-16 h-16" />
              </div>

              <h3 className="text-center font-semibold text-lg mt-4">
                {skill.name}
              </h3>

              <div className="mt-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-slate-500">Proficiency</span>
                  <span className="font-medium">{skill.level}%</span>
                </div>

                <div className="w-full bg-slate-200 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
