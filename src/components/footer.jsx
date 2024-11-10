// import React, { useState, useEffect } from 'react';

const Footer = () => {
  // const [currentDateTime, setCurrentDateTime] = useState('');

  // useEffect(() => {
    // Update the current date and time on the client side
    // const interval = setInterval(() => {
      // setCurrentDateTime(new Date().toString());
    // }, 1000);

    // Clear the interval on component unmount
    // return () => clearInterval(interval);
  // }, [1]);

  return (
    <footer className="bg-purple-200 text-purple-600 py-5 md:text-center px-4">
      <div className="container mx-auto space-y-3 font-mono">
        <p>Grateful for your visit to my portfolio. Thank You!</p>
        {/* <p>{currentDateTime ? currentDateTime : 'Loading date and time...'}</p> */}
      </div>
    </footer>
  );
};

export default Footer;
