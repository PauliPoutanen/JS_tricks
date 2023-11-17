import React, {useState} from 'react';
import ContactForm from './components/ContactForm';
import Contact from './models/Contact';
import ContactList from './components/ContactList';

function App() {

interface State {
  list:Contact[]
  id:number
}

const [state, setState] = useState<State>({
  list:[],
  id:100
})

const addContact = (contact:Contact)=>{
  setState(()=> {
    contact.id = state.id
    return {
      list:state.list.concat(contact),
      id:state.id+1
    }
  })
}
  const removeContact=(id:number) => {
    setState(()=> {
      let tempList = state.list.filter(contact => contact.id !==id)
      return {
        ...state,
        list:tempList
      }
    })
  }


  return (
    <div className="App">
      <ContactForm addContact={addContact}/>
      <hr/>
      <ContactList list={state.list} removeContact={removeContact}/>
      
    </div>
  );
  }

export default App;
