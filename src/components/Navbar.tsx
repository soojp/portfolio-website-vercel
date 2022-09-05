import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 text-sm">
      <h1 className="text-3xl font-bold">Soo Jee Park</h1>
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
            download
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fuchsia-600"
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
    </div>
  );
};

export default Navbar;
