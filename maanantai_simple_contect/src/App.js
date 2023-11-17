import './App.css';
import {themes, ThemeContext} from './context/ThemeContext'
import { useState } from 'react';
import Headline from './components/Headline';
import Paragraph from './components/Paragraph';
import ThemeButton from './components/ThemeButton'


function App() {

const [state, setState] = useState({
  theme:themes.dark
})

const toggleTheme =() => {
  if(state.theme === themes.dark) {
    setState({
      theme:themes.light
    })
  }
  else {
    setState({
      theme:themes.dark
    })
  }
}


  return (
    <ThemeContext.Provider value={state.theme}>
    <div className="App">
     <Headline>
      CreteContext Context 
     </Headline>
     <Paragraph>
      CreateContext lets you Create Stuff like this components can provide etc. 
     </Paragraph>
     <ThemeButton toggleTheme={toggleTheme}/>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
