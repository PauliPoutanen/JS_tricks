import useCount from "./hooks/useCount"

const App = ()=> {

const [value,add,subtract, zerota] = useCount(0)

  return (
<div>
  <p>Count: {value}</p>
  <button onClick={add}>Plus 1</button>
  <button onClick={subtract}>Minus 1</button>
  <button onClick={zerota}>SetZero</button>
</div>
  )
}

export default App