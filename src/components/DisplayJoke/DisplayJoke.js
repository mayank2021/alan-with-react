import React from 'react';
import './DisplayJoke.css';

const DisplayJoke = ({joke}) => {

  return (
      <div>
          <div className='display-joke--container'>
              <h2>Try saying, <i>Get me a joke.</i></h2>
            <h3>{joke?joke:"No! Joke yet"}</h3>
          </div>
      </div>
  );
};

export default DisplayJoke;
