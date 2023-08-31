import { Link, useLocation } from "react-router-dom"


const AuthRoute = ({ user, component }) => {
    const location = useLocation();

   
    if (user) return component;
   
    if (!user) return <Link to="/login" state={{ prevRoute: location.pathname }} />

}
export default AuthRoute