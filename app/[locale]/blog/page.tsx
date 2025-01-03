import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 px-4 mt-auto border-t border-default-200">
      <div className="container mx-auto flex justify-center">
        <div className="text-default-500 text-sm">
          © {currentYear} <span className="text-violet-500">Tomo</span>rrow's Media House. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;