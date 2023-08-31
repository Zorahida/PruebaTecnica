import { useLocation } from "react-router-dom"

const AuthRoute = ({ user, component }) => {
    const location = useLocation();

    if (user) return component;
    if (!user)return prevRoute;
}

export default AuthRoute