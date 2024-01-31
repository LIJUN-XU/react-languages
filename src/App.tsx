import { useEffect,useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import browserLang from 'browser-lang';
import {IntlProvider, FormattedMessage} from 'react-intl'
const supportedLanguages = ["en","zh","es","ar"];

function App() {
  // const [count, setCount] = useState(0)
  const defaultLocale = browserLang({
    languages: supportedLanguages,
    fallback: 'en'
  });
  const [locale, setLocale] = useState(defaultLocale);
  const [messages, setMessages] = useState(undefined);
  useEffect(() => {
    const apiKey = 'Ydcivo7woXSvaw0fhE6NpQ';

    fetch(
      `https://api.i18nexus.com/project_resources/translations/${locale}/default?api_key=${apiKey}`
    )
      .then(response => response.json())
      .then(data => {
        setMessages(data);
      });
  }, [locale]);

  return (
    <IntlProvider locale={locale} messages={messages}>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p>
        <FormattedMessage id="welcome_msg" />
        {/* welcome to my app! */}
      </p>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </IntlProvider>
  )
}

export default App