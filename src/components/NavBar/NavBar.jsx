import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <nav>
        <div className="NavBar">
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/Contact">Contact us!</Link></li>
            </ul>
        </div>
        </nav>
    )

}

export default NavBar