import React from "react";
const skills = [
  {
    name: "HTML",
    icon: "/icons/html5.svg",
  },
  {
    name: "CSS",
    icon: "/icons/css3.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "/icons/tailwindcss.svg",
  },
  {
    name: "JavaScript",
    icon: "/icons/js.svg",
  },
  {
    name: "React JS",
    icon: "/icons/reactjs.svg",
  },
  {
    name: "Git",
    icon: "/icons/git.svg",
  },
  {
    name: "Github",
    icon: "/icons/github.svg",
  },
  {
    name: "Node JS",
    icon: "/icons/nodejs.svg",
  },
  {
    name: "Sql",
    icon: "/icons/sql.svg",
  },
  {
    name: "Java",
    icon: "/icons/java.svg",
  },
];
const Skills = () => {
  return (
    <section id="skill" className="bg-gray-100 ">
      <div className="space-y-10 max-w-10/12 mx-auto px-10 py-10">
        <h2 className="text-center font-bold mt-12 text-4xl">Skills</h2>
        <div className="grid grid-cols-2 gap-8 place-items-center md:grid-cols-5">
          {skills.map((skil, key) => (
            <p
              key={key}
              className=" text-center font-semibold transition ease-in-out duration-300 transform hover:scale-110"
            >
              <span>
                <img
                  src={skil.icon}
                  alt="Skill icons"
                  className="w-[100px] h-[100px] mb-2"
                />
              </span>
              {skil.name}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
