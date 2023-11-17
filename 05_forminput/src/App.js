import {useState} from 'react'
import NameForm from './NameForm'

const App = () => {

const [state, setState] = useState({greeting: "Still no hi's"})

const setGreeting = (name) => {
  setState({greeting: "Hello" + name})
}


  return (
  <div>
<NameForm setGreeting={setGreeting}/>
<h4>{state.greeting}</h4>

</div>)
}

export default App