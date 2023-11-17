import './App.css';
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import Home from './routet/Home';
import Secret from './routet/Secret';
import About from './routet/About';

function App() {
  return (
    <div className="App">
		<ul style={{"listStyleType":"none"}}>
			<li><Link to="/">Home</Link></li>
			<li><Link to="/about">About</Link></li>
		</ul>
		<Routes>
			<Route path="/" element={<Home/>}/>
			<Route path="/about" element={<About/>}/>
			<Route path="/secret" element={<Secret/>}/>
			<Route path="*" element={<Navigate to="/"/>}/>
		</Routes>
    </div>
  )
}

export default App;
