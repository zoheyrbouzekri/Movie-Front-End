import { Link } from "react-router-dom";
import "../css/Navbar.css"

const Navbar = () => {
    return ( 
        <div className="navbar">
            <div className="logo">
                <Link to="/">ZOHEYR MOVIES</Link>
            </div>
            <div className="navbar-links">
                <Link className="nav-link" to='/'>Home</Link>
                <Link className="nav-link" to='/favorite'>Favorites</Link>
            </div>
        </div>
    );
}

export default Navbar;