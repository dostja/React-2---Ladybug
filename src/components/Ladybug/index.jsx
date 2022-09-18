import React from 'react';
import './style.css';

const Ladybug = ({ ladybugState: { posX, posY, orientation }}) => {
  return (
    <div 
      className={`ladybug ladybug--${orientation}`} 
      style={{
        top: `${posY}px`,
        left: `${posX}px`,
      }}
    />
  );
};

export default Ladybug;