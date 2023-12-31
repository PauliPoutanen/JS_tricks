import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {logout} from '../actions/loginActions'
import {AppState} from '../types/states'
import {ThunkDispatch} from 'redux-thunk'
import {AnyAction} from 'redux'

const NavBar:React.FC<{}> = (props) => {

    const stateSelector = (state:AppState) => state
    const state = useSelector(stateSelector)
    const dispatch:ThunkDispatch<any, any, AnyAction> = useDispatch()


    if(state.login.isLogged) {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <p className="navbar-brand" style={{marginLeft:10}}>Shop App</p>
                <ul className="navbar-nav">
                    <li className="nav-item" style={{marginLeft:10}}>
                        <Link to="/" className="nav-link">ShopList</Link>
                    </li>

                    <li className="nav-item" style={{marginLeft:10}}>
                    <Link to="/form" className="nav-link">Add new item</Link>
                    </li>

                    <li className="nav-item" style={{marginLeft:10}}>
                        <p className="nav-link" style={{color:"blue"}}>Logged in as {state.login.user}</p>


                    </li>
                    <li className="nav-item" style={{marginLeft:10}}>
						<Link to="/" className="nav-link" onClick={() => dispatch(logout(state.login.token))}>Logout</Link>
					</li>	
                </ul>
                </nav>
                    )                }
                    else {
                        return(
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <p className="navbar-brand" style={{marginLeft:10}}>Shop App</p>
                            </nav>
                        )
                    }
    }



export default NavBar
