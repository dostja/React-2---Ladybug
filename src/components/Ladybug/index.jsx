import React from 'react';
import './style.css';

const Ladybug = ({position}) => {
  return (
    <div 
      className={`ladybug ladybug--${position}`} 
      style={{
        top: `${position}px`,
        left: `${position}px`,
      }}
    />
  );
};

export default Ladybug;