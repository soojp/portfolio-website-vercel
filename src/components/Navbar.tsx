import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-3 text-sm">
      <h1 className="font-bold text-3xl flex items-center">
        <img src="sp192.png" alt="logo" className="w-10 h-10 mr-2 md:mr-4"></img>
        <span className="invisible md:visible">Soo Jee Park</span>
      </h1>
      <ul className="flex">
        <li className="mr-6">
          <NavLink to={"/"} className="hover:text-fuchsia-600">
            About Me
          </NavLink>
        </li>
        <li className="mr-6">
          <NavLink to={"/projects"} className="hover:text-fuchsia-600">
            My Projects
          </NavLink>
        </li>
        <li className="mr-6">
          <a
            href="Resume.pdf"
            className="hover:text-fuchsia-600"
            target="_blank"
          >
            My Resume
          </a>
        </li>
        <li>
          <a
            href="mailto:soojeepark3@gmail.com"
            className="hover:text-fuchsia-600"
          >
            Email Me
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
