import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import { IntlProvider } from "react-intl";
import Spanish from "./components/Language/es.json";
import English from "./components/Language/en.json";
import { useState } from "react";
import DaymodeContext from "./components/DayNight/DayNight";
import { RegisterForm } from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { useLocation } from "react-router-dom";

const userList = [
    {
    email: 'zorahida@gmail.com',
    password: 'Z123456d@'
    },
    {
    email: 'pepe@gmail.com',
    password: '123456P@'
    }
  ]


function App() {
  const local = navigator.language;
  const message = local === "es" ? Spanish : English;
  const [mode, setMode] = useState(true);
  const handleClick = () => {
    setMode(true);
  };
  const [logError,setLogError] = useState();

  const location = useLocation();

  const loginUser = (form) =>{
      const checkuser = userList.find(
    (user) => user.email === form.email && user.password === form.password
    );
    if(checkuser) {
        logError('');
    } else{
        setLogError('User or password incorrect, please, check it again')
    }

  return (
    <IntlProvider locale={local} messages={message}>
      <DaymodeContext.Provider value={{ mode, setMode }}>
        <div className={mode ? "light" : "dark"}>
          <input type="button" onClick={handleClick} />
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/LogIn" element={<Login loginUser={loginUser} location={location} />} />
            <Route path="/Register" element={<RegisterForm />} />
          </Routes>
        </div>
      </DaymodeContext.Provider>
    </IntlProvider>
  );
}}

export default App;
