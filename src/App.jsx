import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import { IntlProvider } from 'react-intl';
import Spanish from "./components/Language/es.json";
import English from "./components/Language/en.json"


function App() {

const local = navigator.language;
const message = local === 'es' ? Spanish : English;


  
return (
    <IntlProvider locale={local} messages={message}>
        <BrowserRouter>
          <>
          <div className = {mode ? 'day' : 'night'}>
            <mode.Provider value={mode}>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:productId" element={<ProductDetail />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
            </div>
          </>
        </BrowserRouter>
      </IntlProvider>
    );
}
  
  export default App;