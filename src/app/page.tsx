// pages/index.tsx
import React from 'react';
import QuoteDisplay from './components/Quote';

const HomePage: React.FC = () => {
  return (
    <>
      <main className="m-8 bg-black">
        <QuoteDisplay />
      </main>
    </>
  );
};

export default HomePage;