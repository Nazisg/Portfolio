import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-[#282829] border border-[#383838] absolute top-0 right-0 rounded-tr-[20px] rounded-bl-[20px] py-4 px-8">
      <nav>
        <ul className="flex gap-7 text-[#d6d6d6]">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-primary-color duration-150"
                  : "text-[#d6d6d6] hover:text-[#d6d6d6b2] duration-150"
              }
              to="/"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-primary-color duration-150"
                  : "text-[#d6d6d6] hover:text-[#d6d6d6b2] duration-150"
              }
              to="/resume"
            >
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-primary-color duration-150"
                  : "text-[#d6d6d6] hover:text-[#d6d6d6b2] duration-150"
              }
              to="/projects"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-primary-color duration-150"
                  : "text-[#d6d6d6] hover:text-[#d6d6d6b2] duration-150"
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
