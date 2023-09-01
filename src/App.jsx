import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import { Context } from "react-intl/src/components/injectIntl";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import { FormattedMessage } from "react-intl";
import Spanish from "./components/Language/es.json";
import English from "./components/Language/en.json";
import { useContext, useState } from "react";
import DaymodeContext from "./components/DayNight/DayNight";
import { RegisterForm } from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { useLocation } from "react-router-dom";
import AuthRoute from "./services/Auth";
import Profile from "./pages/Profile/Profile";

export const userList = [
    {
    email: 'zorahida@gmail.com',
    password: 'Z123456d@'
    },
    {
    email: 'pepe@gmail.com',
    password: '123456P@'
    }
  ]


function App(props) {
  const context = useContext(Context);
  const locale = navigator.language;
  const message = locale === "es" ? Spanish : English;
  const [mode, setMode] = useState(true);
  const handleClick = () => {
    setMode(true);
  };
  const [logError,setLogError] = useState("");

  const location = useLocation();

  const loginUser = (form) =>{
      const checkUser = userList.find(
    (user) => user.email === form.email && user.password === form.password
    );
    if(checkUser) {
        setLogError('');
    } else{
        setLogError('User or password incorrect, please, check it again')
    }

  };

  return (
      <DaymodeContext.Provider value={{ mode, setMode }}>
        <>
        <div className={mode ? "light" : "dark"}>
          <input type="button" onClick={handleClick} />
          <NavBar />
          <select value={context.locale} onChange={context.selectLanguage}>
            <option value="en">English</option>
            <option value="es">Spanish</option>
          </select>
          <FormattedMessage id={locale}
          ></FormattedMessage>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/LogIn" element={<Login loginUser={loginUser} location={location} logError={logError}/>} />
            <Route path="/Profile" element= {<AuthRoute userList={userList} component={<Profile />} /> } />
            <Route path="/Register" element={<RegisterForm />} />
          </Routes>
        </div>
        </>
      </DaymodeContext.Provider>
  

  );
}

export default App;
