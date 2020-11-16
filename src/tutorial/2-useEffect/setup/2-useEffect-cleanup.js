import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, Setsize] = useState(window.innerWidth);

  const checkSize = () => {
    Setsize(window.innerWidth);
  };

  useEffect(() => {
    console.log('useEffect');
    window.addEventListener('resize', checkSize);
    // return () => {
    //   console.log('cleanup');
    //   window.removeEventListener('resize', checkSize);
    // };
  }, []);
  console.log('rander');

  return (
    <>
      <h1>window</h1>
      <h2>{size}PX</h2>
    </>
  );
};

export default UseEffectCleanup;
