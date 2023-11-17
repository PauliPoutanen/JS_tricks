import React from 'react';
import LoginPage from './components/LoginPage';
import {useSelector} from 'react-redux';
import {AppState} from './types/states';
import NavBar from './components/NavBar';
import ShoppingForm from './components/ShoppingForm';
import {Routes, Route, Navigate} from 'react-router-dom'
import ShoppingList from './components/ShoppinList';


function App() {
	
	const stateSelector = (state:AppState) => state;
	const state = useSelector(stateSelector);
	
	let messageArea = <h4 style={{height:40}}>*</h4>
	if(state.login.loading) {
		messageArea = <h4 style={{height:40}}>Loading ...</h4>
	}
	if(state.shopping.error) {
		messageArea = <h4 style={{height:40}}>{state.shopping.error}</h4>
	}
	if(state.login.error) {
		messageArea = <h4 style={{height:40}}>{state.login.error}</h4>
	}

	if(state.login.isLogged) {
		return (
			<div className="App">
				<NavBar/>
				{messageArea}
				<Routes>
					<Route path="/" element={<ShoppingList/>} />
					<Route path="/form" element={<ShoppingForm/>} />
					<Route path="*" element={<Navigate to="/"/>} />
				</Routes>
			</div>
			);		
	} else {
		return (
			<div className="App">
				<NavBar/>
				{messageArea}
				<LoginPage/>
			</div>
	);
}}

export default App;