// components/QuoteDisplay.ts

'use client'

import React, { useState } from 'react';
import { quotes, Quote } from '../utils/quotes';
import { downloadQuoteAsImage } from '../utils/imageHelpers';

const QuoteDisplay: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState<Quote>(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ marginBottom: '20px' }}>
        <p>{currentQuote.text}</p>
        <p>- {currentQuote.author}</p>
      </div>
      <button onClick={getRandomQuote} style={{ marginRight: '10px' }}>Get another one</button>
      <button onClick={() => downloadQuoteAsImage(currentQuote.text, currentQuote.author)}>Download for your story</button>
    </div>
  );
};

export default QuoteDisplay;
