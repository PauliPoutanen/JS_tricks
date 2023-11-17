import './App.css'
import ContactInfo from './components/ContactInfo'
import ContactCard from './components/ContactCard'
import NamedChildren from './components/NamedChildren'
import {useState} from 'react'






function App() {

  const [click,setClick]=useState(0)
  return (
    <div className="App">
<ContactCard>
  <ContactInfo name="Minä" profession="outdated" />
  <h4>CurrentClick{click}</h4>
  <button onClick={()=>setClick(click + 1)}>Klik plusaa</button>

</ContactCard>
<NamedChildren 
header={<h3>Complex Card</h3>}
media = {<h3>Mediea area</h3>}
content = {<h3>Content area</h3>} />

<NamedChildren header={<h2>No Media Card</h2>}
content={<h3>Content area</h3>} />


    </div>
  )
}

export default App
