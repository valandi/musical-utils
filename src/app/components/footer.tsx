import React from 'react';

const Footer = () => {
  return (
    <footer className="py-4 text-center text-sm text-gray-500 dark:text-gray-400">
      © {new Date().getFullYear()} Musical Utils
    </footer>
  );
};

export default Footer;
