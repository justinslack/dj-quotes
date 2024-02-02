// pages/index.tsx
import React from 'react';
import {Logo} from './components/Logo'; // Adjust the path as necessary
import QuoteDisplay from './components/Quote'; // Adjust the path as necessary

const HomePage: React.FC = () => {
  return (
    <main className="m-8 mt-16 bg-bg-blue p-8">
      <header>
        <Logo className=" relative -top-16 left-0"/>
      </header>
      <div>
        <p>Being a DJ isn&rsquo;t hard. Getting traction for your relentless self-promotion is.</p>
        <p>That&rsquo;s why we have created this handy tool to up your Intagram game. Just generate a quote, download the image(s) and get to it. Easy!</p>
        <p>Before you know it you will be booked for all those 30 minute sets!!</p>
      </div>
      <div>
        <h1>Random Quote Generator</h1>
        <QuoteDisplay />
      </div>
    </main>
  );
};

export default HomePage;