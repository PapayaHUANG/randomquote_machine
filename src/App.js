import './App.css';
import { Color } from './color';
import { useState } from 'react';
import { useEffect } from 'react';
import Quotes from './Quotes';

const url =
  'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

function App() {
  const [quotes, setQuotes] = useState([]);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setQuotes(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <Quotes quotes={quotes} />
    </div>
  );
}

export default App;
