import { Link } from "react-router-dom"

const NavBar = () => {
    return(
        <nav>
        <div className="Nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/loquesea">Loquesea</Link></li>
                <li><Link to="/Login">Contact us!</Link></li>
            </ul>
        </div>
        </nav>
    )

}

export default NavBar