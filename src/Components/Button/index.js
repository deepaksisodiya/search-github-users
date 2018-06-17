import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = props => {
  const onPress = event => {
    props.onClick();
    event.preventDefault();
  };

  return (
    <button className="button" onClick={onPress}>
      {props.text}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
};

export default Button;
