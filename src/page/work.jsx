import React from 'react'
import { Header } from '../component/Header';

export const WorkPage = () => {
  return (
    <>
      <Header></Header>
      <div className="App ">
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold mb-4">
            Apa yang kami lakukan?
          </h1>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            eget metus ac justo facilisis bibendum.
          </p>
        </div>
      </div>
    </>
  );
}
