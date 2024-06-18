import React, { useState, useEffect } from 'react';
import reactIcon from '../assets/react.svg';
import laravelIcon from '../assets/laravel.svg';
import nodejsIcon from '../assets/nodejs.svg';
import tailwindIcon from '../assets/tailwind.svg';
import TypeIt from 'typeit-react';

export default function Home() {
  // fetch api from https://api-ninjas.com/api/quotes
  // const [quote, setQuote] = useState({});
  // useEffect(() => {
  //   fetch('https://api-ninjas.com/api/quotes')
  //     .then(res => res.json())
  //     .then(data => setQuote(data[0]))
  //     .catch(err => console.error(err));
  // }, []);

  return (
    <div className="text-slate-100 font-figtree mb-20">
      <TypeIt className="md:text-5xl font-bold text-3xl">
      mohd hoiruttamim
      </TypeIt>
      <span className="text-7xl font-bold text-cyan-400">.</span>
      <div className="description md:text-5xl text-5xl mt-10">
        <p>i'm Software Developer, who interest about <span className="font-bold underline decoration-cyan-400">backend eng.</span> and <span className="font-bold underline decoration-wavy decoration-red-500">cloud computing</span> ☁</p>
      </div>
      <div className="qoutes mt-20">
        <h2 className="text-1xl md:text-3xl italic">"The only way to do great work is to love what you do"</h2>
        {/* <p className="text-xl font-bold">- {quote.author}</p> */}
        <p className="text-md md:text-xl font-bold">- Steve Jobs</p>
      </div>
      <div className="tech">
        <p className="text-2xl mt-20 font-bold">Tech Stack<span className="font-thin"> what i use 🚀</span></p>
        <div className="flex flex-wrap items-center justify-center mt-5 bg-slate-100 rounded w-fit px-5 py-3 bg-filter-blur bg-opacity-5">
          <div className="mx-2">
            <img src={ reactIcon } alt="reac-logo" className="w-10 bg-slate-100 bg-opacity-5 p-2 rounded-lg drop-shadow-md"/>
          </div>
          <div className="mx-2">
            <img src={ tailwindIcon } alt="reac-logo" className="w-10 bg-slate-100 bg-opacity-5 px-2 py-3 rounded-lg drop-shadow-md"/>
          </div>
          <div className="mx-2">
            <img src={ nodejsIcon } alt="reac-logo" className="w-10 bg-slate-100 bg-opacity-5 p-2 rounded-lg drop-shadow-md"/>
          </div>
          <div className="mx-2">
            <img src={ laravelIcon } alt="reac-logo" className="w-10 bg-slate-100 bg-opacity-5 p-2 rounded-lg drop-shadow-md"/>
          </div>
        </div>
      </div>
    </div>
  );
}
