// components/QuoteDisplay.tsx

'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image'; // Import the Image component
import { quotes, Quote } from '../utils/quotes'; // Adjust the import path as needed
import { downloadQuoteAsImage } from '../utils/imageHelpers'; // Adjust the import path as needed

const QuoteDisplay: React.FC = () => {
  const [currentQuote, setCurrentQuote] = useState<Quote>(quotes[0]);
  const [imageUrl, setImageUrl] = useState<string>('');

  const updateQuoteAndImage = async () => {
    // Update the quote
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);

    // Fetch a new image
    try {
      const response = await fetch('/api/unsplash');
      if (response.ok) {
        const image = await response.json();
        setImageUrl(image.urls.regular); // Use the correct property from the response
      } else {
        console.error('Failed to fetch images:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching image:', error);
    }
  };

  // Initial load
  useEffect(() => {
    updateQuoteAndImage();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <div>
        <div style={{ marginBottom: '20px' }}>
          <p>"{currentQuote.text}"</p>
          <p>- {currentQuote.author}</p>
        </div>
        <button onClick={updateQuoteAndImage} style={{ marginRight: '10px' }}>Get another one</button>
        <button onClick={() => downloadQuoteAsImage(currentQuote.text, currentQuote.author, 0.92)}>Download for your story</button>
      </div>
      <div>
        {imageUrl && (
          <Image 
            src={imageUrl} 
            alt="Random" 
            width={400} // Specify desired width
            height={700} // Specify desired height, maintaining aspect ratio
            layout="responsive" // This makes the image scale nicely to the parent element's width
          />
        )}
      </div>
    </div>
  );
};

export default QuoteDisplay;
