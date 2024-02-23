
// import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { IntlProvider } from "react-intl";
import zh from "./locales/zh";
import en from "./locales/en";


const messageMap = {
  zh,
  en,
};

const getLocale = () => {
  const locale = navigator.language;
  console.log(locale);
  return locale.startsWith('zh') ? 'zh' : 'en'; // en 是兜底语言
};
const locale = getLocale();

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <IntlProvider locale={locale} messages={messageMap[locale]}>
    <App />
  </IntlProvider>
)
