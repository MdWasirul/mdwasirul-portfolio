import { Link } from "react-router-dom";

const Header = () => {
  const navlink = [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "About",
      link: "/about",
    },

    {
      label: "Skills",
      link: "/skills",
    },
    {
      label: "Project",
      link: "/projects",
    },
    {
      label: "Contact us",
      link: "/contact",
    },
  ];
  return (
    <header className="bg-indigo-800 py-4 px-6 flex justify-between items-center sticky top-0 left-0 z-50">
      <div>
        <h2 className="font-bold text-3xl ml-8 text-white">
          <span className="text-yellow-300">Wasirul's</span> Portfolio
        </h2>
      </div>
      <nav className="text-white">
        <ul className="flex flex-col md:flex-row ">
          {navlink.map((navItem, i) => (
            <li key={i} className="px-5  text-lg ">
              <Link
                to={navItem.link}
                className="hover:underline decoration-3 decoration-pink-300 underline-offset-8"
              >
                {navItem.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
