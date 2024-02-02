// pages/index.tsx
import React from 'react';
import QuoteDisplay from './components/Quote'; // Adjust the path as necessary

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Random Quote Generator</h1>
      <QuoteDisplay />
    </div>
  );
};

export default HomePage;