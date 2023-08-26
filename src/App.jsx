import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import { FormattedMessage, IntlProvider } from 'react-intl';
import Spanish from './lang/es.json';
import English from './lang/en.json';


function App(props) {
    const locale = navigator.languaje;

    let lang;
    if (locale ==="en") {
      lang = English;
    } else if (locale === "es") {
        lang = Spanish;
      }
  
    return (
      <IntlProvider locale={locale} messages={lang}>
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
              <p>
                <FormattedMessage
                  id="app.header"
                  defaultMessage="Edit the files and save to reload"
                  values={{
                    fileName:"src/App.js",
                    code: (word) => <strong>{word}</strong>
                  }}
                />
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FormattedMessage id="app.content" defaultMessage="Learn React" />
              </a>
              <FormattedMessage
                id="app.channel.plug"
                defaultMessage="Internationalization for Upgraders"
              />
            </header>
          </div>
        </BrowserRouter>
      </IntlProvider>
    );
  }
  
  export default App;