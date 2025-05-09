
// components/QuoteDisplay.tsx

'use client'

import React, { useState, useEffect } from 'react';
import { quotes, Quote } from '../utils/quotes'; // Make sure this path matches your file structure
import { downloadQuoteAsImage } from '../utils/imageHelpers';
import Button from '../components/Button'; // Make sure this path matches your file structure

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
        setImageUrl(image.urls.regular); // Make sure to use the correct property from the response
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
    <div className="content-grid grid grid-cols-1 md:grid-cols-3 relative">
      <div className="text-blurb text-white p-8">
        <p>Being a DJ isn&rsquo;t hard. Getting traction for your relentless self-promotion is.</p>
        <p>That&rsquo;s why we have created this handy tool to up your Instagram game. Just generate a quote, download the image(s) and get to it. Easy!</p>
        <p>Before you know it you will be booked for all those 30 minute sets!!</p>
      </div>
      <div className="quote-generate bg-bg-blue">
        <div className='tracking-tight'>
          <p className="text-3xl">{currentQuote.text}</p>
          {/* <p>- {currentQuote.author}</p> */}
        </div>
        <div className="flex w-100">
          <Button className="inline-flex mr-2" onClick={updateQuoteAndImage}>Get another one</Button>
          <Button className="inline-flex" onClick={() => downloadQuoteAsImage(currentQuote.text, currentQuote.author, 0.92)}>Download for your story</Button>
        </div>
      </div>
      <div className='unsplash-image relative aspect-square w-full h-auto'>
        {imageUrl && <img className="object-cover h-screen w-screen" src={imageUrl} alt="Random"/>}
      </div>
    </div>
  );
};

export default QuoteDisplay;

