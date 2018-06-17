import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = props => {
  const onPress = event => {
    props.onClick();
    event.preventDefault();
  };

  return <button onClick={onPress}>Details</button>;
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default Button;
