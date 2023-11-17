import React, {useState} from "react";
import ShoppingItem from "../models/ShoppingItem";
import Row from "./Row";
import RemoveRow from "./RemoveRow";
import EditRow from "./EditRow";
import {getList, remove, edit} from '../actions/shoppingActions'
import {useSelector, useDispatch} from 'react-redux'
import {AnyAction} from 'redux'
import { ThunkDispatch } from "redux-thunk";
import {AppState} from '../types/states'

interface State {
    removeIndex: number
    editIndex: number
}

interface SearchState {
    type:string
}

const ShoppingList:React.FC<{}> = (props) => {
    
    const [state,setState] = useState<State>({
		removeIndex:-1,
		editIndex:-1
	})
	
	const [search,setSearch] = useState<SearchState>({
		type:""
	})

    const stateSelector = (state:AppState) => state
    const AppState = useSelector(stateSelector)
    const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch()

    const changeMode =(index:number, mode:string) => {
        switch(mode) {
            case "remove":
            setState({
                removeIndex:-1,
                editIndex:index
            })

        return
        case "cancel":
            setState({
                removeIndex:-1,
                editIndex:-1
            })
            return 
            default:
                return
        }
    }

    const removeItem = (id:string) => {
        dispatch(remove(AppState.login.token, id))
        changeMode(0, "cancel")
    }

    const editItem =(item:ShoppingItem) => {
        dispatch(edit(AppState.login.token, item))
        changeMode(0, "cancel")
    }

    const onChange =(event:React.ChangeEvent<HTMLInputElement>) => {
        setSearch({
            type:event.target.value
        })
    }

    const searchByType =(event:React.SyntheticEvent) => {
        event.preventDefault()
        dispatch(getList(AppState.login.token, search.type))
    }

    const ShoppingItems = AppState.shopping.list.map((item, index) => {
        if(state.removeIndex===index) {
            return (
                <RemoveRow key={item._id} item={item} changeMode={changeMode} removeItem={removeItem}/>
                
            
                )
        }
        if(state.editIndex===index) 
        {
            return (
                <EditRow key={item._id} item={item} changeMode={changeMode} editItem={editItem}/>
                )
            }
            return (
                <Row key={item._id} item={item} index={index} changeMode={changeMode} />
                )

            })

            return (
            <div>
            
            <div style={{"margin":"auto"}}>
                <label htmlFor="search">Search by type</label>
                <input type="text"
                name="search"
                id="seach"
                onChange={onChange}
                value={search.type}/>

                <button className="btn btn-primary" onClick={searchByType}>Search</button>
            </div>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>Type</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>Remove</th>
                    <th>Edit</th>
                </tr>
                </thead>
                <tbody>
                    {ShoppingItems}
                </tbody>
            </table>
            </div>
            )

    
}


export default ShoppingList