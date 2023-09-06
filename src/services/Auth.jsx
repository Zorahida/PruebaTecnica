import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { userList } from "../App";

const AuthRoute = ({ user, component }) => {
    const location = useLocation();
    const navigate = useNavigate();
   
    if (user) return component;
   
    if (!user) {

    navigate("/login", {state: { prevRoute: location.pathname }} );
    }
};

export default AuthRoute