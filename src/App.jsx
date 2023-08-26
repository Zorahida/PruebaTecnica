import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import { FormattedMessage, IntlProvider } from 'react-intl';
import Spanish from './components/Languaje/es.json'
import English from './components/Languaje/en.json';

export const Context = React.createContext();

function App() {

    const local = navigator.language;

var lang;
if (local === "en") {
  lang = English;
  } else {
    lang = Spanish;
  }

const Traduction = (props) => {
  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(lang);

  const selectLanguage = (e) => {
    const newLocale = e.target.value;
    setLocale(newLocale);
    if (newLocale === "en") {
      setMessages(English);
      } else {
        setMessages(Spanish);
      }
    }
  
  return (
    <Context.Provider value={{ locale, selectLanguage }}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
};
  
return (
    <Traduction>
        <BrowserRouter>
          <>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:productId" element={<ProductDetail />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </>
    
          <div className="App">
            <header className="App-header">
        
    <Context.Consumer>
        {context => (
        <button onClick={() => context.selectLanguage('es')}>Change the language</button>
        )}
    </Context.Consumer>
              <a
                className="App-link"
                href="http://localhost:3000"
                target="_blank"
                rel="noopener noreferrer"
                >
                <FormattedMessage
                id="app.content"
                 defaultMessage={"Current language: {locale}"}
                 />
                 </a>
              <FormattedMessage
                id="app.channel.plug"
                defaultMessage="English"/>
            </header>
          </div>
        </BrowserRouter>
      </Traduction>
    );
}
  
  export default App;