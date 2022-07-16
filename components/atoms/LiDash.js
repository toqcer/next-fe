import React from 'react';

const LiDash = ({ children }) => {
  return (
    <li className='inline-block before:content-["-"]  before:mr-1'>
      {children}
    </li>
  );
};

export default LiDash;
