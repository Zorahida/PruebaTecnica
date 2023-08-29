import { useContext } from "react";
import buttonContext from "../Context/ButtonContext";

function ButtonLanguage () {
    const currentLanguage = navigator.language;
    const buttonL = useContext(buttonContext);
    if (currentLanguage ==="es") {
        document.querySelector("html").setAttribute("lang", "Spanish")
    }else if ("lang" === "English");
}

export default ButtonLanguage