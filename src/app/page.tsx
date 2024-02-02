// pages/index.tsx
import React from 'react';
import {Logo} from './components/Logo'; // Adjust the path as necessary
import QuoteDisplay from './components/Quote'; // Adjust the path as necessary

const HomePage: React.FC = () => {
  return (
    <>
      <header className='relative'>
        <Logo className="mt-8 ml-24" />
      </header>
      <main className="m-8 bg-black">
        <QuoteDisplay />
      </main>
    </>
  );
};

export default HomePage;