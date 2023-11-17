import React from 'react';

import './App.css';
import ThemeContext, {themes, ThemeType} from './context/ThemeContext';
import { useState } from 'react';
import Headline from './components/Headline';
import Paragraph from './components/Paragraph';
import ThemeButton from './components/ThemeButton';


interface State{
  theme:ThemeType
}

function App() {

  const [state, setState] = useState<State>({
    theme:themes.dark
  })


  const toggleTheme=()=>{
    if(state.theme === themes.dark){
      setState({theme:themes.light})
    }
    else {
      setState({theme:themes.dark})
    }
  }


  return (
  
      <ThemeContext.Provider value={state.theme}>
      <div className="App">
<Headline>
  Mieti että tähänkin meni paljon settiä!
</Headline>

     <Paragraph>
     Huomaa: Kansainvälisten lähetysten kohdalla ensimmäisten seurantatietojen näkymisessä saattaa olla jopa 96 tunnin viive.
Onko sinulla kysyttävää? Ota suoraan yhteyttä yllä mainittuun toimittajaan, joka pystyy parhaiten neuvomaan toimitukseen liittyvissä asioissa.
Voit 

     </Paragraph>
     <ThemeButton toggleTheme={toggleTheme}/>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
