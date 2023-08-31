import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import { IntlProvider } from 'react-intl';
import Spanish from "./components/Language/es.json";
import English from "./components/Language/en.json"
import { useState } from 'react';
import DaymodeContext from './components/DayNight/DayNight';

function App() {

const local = navigator.language;
const message = local === 'es' ? Spanish : English;
const [mode, setMode] = useState(false);
const handleClick =() => {
    setMode(false);
}
  
    return (
    <IntlProvider locale={local} messages={message}>
    <DaymodeContext.Provider value={{ mode, setMode}}>
            <div className={mode ? 'light' : 'dark'}>
            <input
            type='button'
            onClick={handleClick}
            true={mode} />
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:productId" element={<ProductDetail />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
            </div>
            </DaymodeContext.Provider>
      </IntlProvider>
    );
}
  
  export default App;