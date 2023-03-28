import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header>
            <nav className="navbar">
                <div className="navbar-logo navbar-item">
                    <Link to="/" className="nav-link">
                        Yums
                    </Link>
                </div>
                <ul className="navbar-items">
                    <li className="navbar-item">
                        <Link to="/" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/about" className="nav-link">
                            About Me
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
