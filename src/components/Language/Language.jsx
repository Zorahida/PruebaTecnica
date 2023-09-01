import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import Spanish from "./es.json"
import English from "./en.json"

export const Context = React.createContext();

const local = navigator.language;

var lang;
if (local === "en") {
  lang = English;
  } else {
    lang = Spanish;
  }

const Language = (props) => {
  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(lang);

  function selectLanguage(e) {
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
  
export default Language;