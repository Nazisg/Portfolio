import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">About</Link>
            <Link to="/resume">Resume</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
