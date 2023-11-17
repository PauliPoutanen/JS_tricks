import React from "react";
import Contact from "../models/Contact";
import { AppState } from "../reducers/contactReducer";
import { useDispatch, useSelector } from "react-redux/es/exports";


const ContactList:React.FC<{}> = (props) => {

    const listSelector = (state:AppState) => state.list
    const list = useSelector(listSelector)

    const dispatch = useDispatch()

    let contacts = list.map((contact)=> {
        return (
            <tr key={contact.id}>
                <td>{contact.firstname}</td>
                <td>{contact.lastname}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>
                    <button onClick={() => dispatch({
                        "type":"REMOVE_CONTACT",
                        "id":contact.id
                    })}>
                 Poista   </button>
                </td>
            </tr>
        )
    })


    return (
        <table>
            <thead>
                <tr>
                    <th>Etunimi </th>
                    <th>Sukunimi </th>
                    <th>Email </th>
                    <th>Tel </th>
                </tr>
            </thead>
            <body>
                {contacts}
            </body>
        </table>
    )
}
export default ContactList