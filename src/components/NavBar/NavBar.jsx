import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Spanish from "../Language/es.json";
import English from "../Language/en.json";
import "../../styles/DayMode.css"
import DaymodeContext from "../DayNight/DayNight";
import "./NavBar.css"
import { userList } from "../../App";

function NavBar  () {

    
    const local = navigator.language;
    const language = local === "en" ? English : Spanish;
    
    const [message, setMessage] = useState(language);
    
    const selectLanguage = (e) => {
        const newLocale = e.target.value;
        if (newLocale === "en") {
            setMessage(English);
        } else {
            setMessage(Spanish);
        }
    };

    const { mode, setMode} = useContext(DaymodeContext);

    return(
        <nav>
        <div className="nav">
            <ul className="navlist">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Contact">Contact Us</Link></li>
                {userList ? (
                <li><Link to="/LogOut">LogOut</Link></li>
                 ) : (
                <li><Link to="/LogIn">LogIn</Link></li>
                 )}
                <li><Link to="/Register">Register</Link></li>
                <li><Link to="/Profile">Your Profile</Link></li>
            </ul>

            <button onClick={()=>setMode(!mode)}>{mode ? "dark" : "light"}</button>
            <button onClick={selectLanguage}>Change to:{message.ButtonLanguage}</button>
        </div>
        </nav>
        
    )
    }


export default NavBar