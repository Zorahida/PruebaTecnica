import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import DaymodeContext from "../DayNight/DayNight";
import { userList } from "../../App";
import Spanish from "../Language/es.json";
import English from "../Language/en.json";
import "../../styles/DayMode.css";
import "./NavBar.css";

function NavBar() {

    const navigate = useNavigate();

     const logout = () => {
        userList(null);
        navigate('/login', {replace: true});
    }

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

    const { mode, setMode } = useContext(DaymodeContext);

    return (
        <nav>
            <div className="nav">
                <ul className="navlist">
                    <li><Link to="/"><FormattedMessage id="navbar.home" defaultMessage="Home" /></Link></li>
                    <li><Link to="/Contact"><FormattedMessage id="navbar.contactUs" defaultMessage="Contact Us" /></Link></li>
                    {userList ? (
                    <Link to="/login" onClick={logout}><FormattedMessage id="navbar.logOut" defaultMessage="Log Out" /></Link>
                    ) : (<Link to="/login"><FormattedMessage id="navbar.logIn" defaultMessage="Log In" /></Link>)}
                    <li><Link to="/Register"><FormattedMessage id="navbar.register" defaultMessage="Register" /></Link></li>
                    <li><Link to="/Profile"><FormattedMessage id="navbar.yourProfile" defaultMessage="Your Profile" /></Link></li>
                </ul>

                <button onClick={() => setMode(!mode)}>{mode ? "dark" : "light"}</button>
                <button onClick={selectLanguage}><FormattedMessage id="navbar.changeLanguage" defaultMessage={`Change to: ${message.ButtonLanguage}`} /></button>
            </div>
        </nav>
    )
}

export default NavBar;
