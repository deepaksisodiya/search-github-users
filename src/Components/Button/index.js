import React from 'react';

import './Button.css';

const Button = () => {
  const onClick = event => {
    event.preventDefault();
    console.log('The button was clicked.');
  };

  return (
    <button onClick={onClick} className="button">
      Details
    </button>
  );
};

export default Button;