import React from 'react';

const Hero = () => {
  return (
    <section className="w-3/5 mx-auto bg-white dark:bg-gray-800 py-8 px-4 mb-8 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
        Overview
      </h2>
      <p className="text-gray-600 dark:text-gray-300">
        Welcome to the Musical Utils. This tool provides essential features for
        musicians, including:
      </p>
      <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300">
        <li>A precise metronome to help you keep time</li>
        <li>An accurate tuner for various instruments</li>
      </ul>
    </section>
  );
};

export default Hero;
