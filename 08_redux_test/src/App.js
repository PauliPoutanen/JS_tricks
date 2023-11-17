import logo from './logo.svg';
import './App.css';
import {useSelector, useDispatch} from 'react-redux'

function App() {

  const dispatch = useDispatch()
  const count = useSelector(state => state.count)

const increment = () => {
  dispatch({
    type:"INCREMENT"
  })
}

const decrement = () => {
  dispatch({
    type:"DECREMENT"
  })
}



  return (
    <div className="App">
      <button onClick={increment}>PLUZ</button>
      
      <button onClick={decrement}>MINUS</button>
      <p>  {count}</p>

    </div>
  );
}

export default App;
