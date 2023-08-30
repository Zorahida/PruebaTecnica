import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import { IntlProvider } from 'react-intl';
import Spanish from "./components/Language/es.json";
import English from "./components/Language/en.json"
import { useState } from 'react';


function App() {

const local = navigator.language;
const message = local === 'es' ? Spanish : English;
const [mode, setMode] = useState(false);

  
    return (
    <IntlProvider locale={local} messages={message}>
        <>
            <div className={mode ? 'light' : 'dark'}>
            <NavBar mode={mode} setMode={setMode} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:productId" element={<ProductDetail />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
            </div>
          </>
      </IntlProvider>
    );
}
  
  export default App;