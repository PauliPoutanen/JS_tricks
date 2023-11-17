import './App.css';
import {useState, useMemo} from 'react'

function App() {

const [count,setCount]=useState(0)
const [currentWord, setCurrentWord] =useState(0)
const words =["yksi", "kaksi", "kolme", "neljä"]
const word =words[currentWord]

const computeWordLength = (word) => {
  let i=0;
  while(i<1000000000) {
    i++
  }
  return word.length
}
// let wordLength = computeWordLength(word)
let wordLength = useMemo(()=> computeWordLength(word), [word])
  return (
    <div className="App">
      <h2>"MEMO-DEMO"</h2>
      <h3>Laske {word} pituus</h3>
      <h4>{word} on {wordLength} kirjainta</h4>

      <button onClick={() => {
        const next = currentWord+1===words.length ? 0 : currentWord+1
        setCurrentWord(next)
      }}>Seuraava sana</button>

      <h5>Laskuri on nyt :{count}</h5>
      <button onClick={()=> setCount(count=>count+1)}>Lissää</button>
    </div>
  );
}

export default App;
