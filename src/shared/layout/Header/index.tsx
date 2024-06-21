import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-[#282829] z-30 flex justify-center border border-[#383838] fixed w-full md:w-auto md:absolute  bottom-0 md:bottom-auto md:left-auto left-0 md:top-0 md:right-0 rounded-tr-[20px] rounded-tl-[20px] md:rounded-tl-[0px] md:rounded-bl-[20px] py-4 px-8">
      <nav>
        <ul className="flex gap-5 md:gap-7 text-[#d6d6d6] text-sm md:text-lg">
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
