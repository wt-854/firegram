import React from 'react';

const Title = () => {
  return (
    <div className='title'>
      <h1>FireGram</h1>
      <h2>Random Cat Pictures</h2>
      <p>
        Come on, who doesn't love cats?
        <span role='img' aria-label='cat'>
          😸
        </span>
      </p>
    </div>
  );
};

export default Title;
