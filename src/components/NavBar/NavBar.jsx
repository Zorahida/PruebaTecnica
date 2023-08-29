import { useState } from "react";
import { Link } from "react-router-dom";
import Spanish from "../Language/es.json"
import English from "../Language/en.json"



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

    return(
        <nav>
        <div className="NavBar">
            <ul>
                <li><Link to="/">{message.home}</Link></li>
                <li><Link to="/Contact">{message.contact}</Link></li>
            </ul>

            <button onClick={selectLanguage}>{!message.ButtonLanguage}</button>
        </div>
        </nav>
        
    )

}

export default NavBar