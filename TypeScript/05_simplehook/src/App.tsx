import React from 'react';
import useCount from './hooks/useCount';

function App() {

  const [value,add,subtarct] = useCount(10)
  return (
    <div className="App">
      <h4>Value: {value}</h4>
      <button onClick={add}>Plus</button>
      <button onClick={subtarct}>Minus</button>

     
    </div>
  );
}

export default App;
