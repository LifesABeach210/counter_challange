
import './App.css';
import star from './assets/star.png';
import React from 'react';
import useStarCounter from './hooks/useStarCounter';
function App() {
  const starCounter = useStarCounter(0);
  const { onIncreaseChange, onDecreaseChange, value, stars } = useStarCounter()
  return (
    <div>
      <p>Count: {value}</p>
      <button onClick={() => onIncreaseChange()}>Add</button>
      <button onClick={() => onDecreaseChange()}>Subtract</button>

      {stars.map((row) => (
        <img height={25} width={25} alt='start' src={star}></img>

      ))}
    </div>



  );
}

export default App;
