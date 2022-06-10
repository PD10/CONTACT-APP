import React from 'react';

const ChildComponent = ({ onClick, count }) => {
    return (
      <button onClick={onClick}>
         Click me
      </button>
    )
  };

export default ChildComponent;