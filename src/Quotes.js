import './Quotes.css';
import { useState } from 'react';
import { Color } from './color';

const Quotes = (props) => {
  const { quotes } = props.quotes;
  const [index, setIndex] = useState(0);
  const colorElements = document.getElementsByClassName('color');
  const bkColorElements = document.getElementsByClassName('bkColor');
  console.log(colorElements);

  console.log(bkColorElements);
  const clickHandlder = () => {
    const colorIndex = Math.floor(Math.random() * Color.length);
    const randomColor = Color[colorIndex];
    console.log(randomColor);
    for (let i = 0; i < colorElements.length; i++) {
      colorElements[i].style.color = `${randomColor}`;
    }
    for (let i = 0; i < bkColorElements.length; i++) {
      bkColorElements[i].style.backgroundColor = `${randomColor}`;
    }
    // colorElements.style.color = `${randomColor}`;

    if (quotes.length > 0) {
      const newIndex = Math.floor(Math.random() * quotes.length);
      setIndex(newIndex);
    }
  };

  return (
    <>
      {quotes && (
        <h2 className="quote-text color">
          <i className="fas fa-quote-left color"></i>
          {quotes[index].quote}
        </h2>
      )}

      {quotes && <h4 className="author color">{quotes[index].author}</h4>}
      <div className="btn-container">
        <div className="left-btn">
          <button className="btn bkColor">
            <i className="fab fa-twitter"></i>
          </button>
          <button className="btn bkColor">
            <i className="fab fa-tumblr"></i>
          </button>
        </div>
        <div className="right-btn ">
          <button className="btn bkColor" onClick={clickHandlder}>
            new quote
          </button>
        </div>
      </div>
    </>
  );
};

export default Quotes;
