import React from "react";
import Contact from "../models/Contact";

interface Props {
    list:Contact[]
    removeContact(id:number):void
}

const ContactList:React.FC<Props> = (props:Props) => {

    let contacts = props.list.map((contact)=> {
        return (
            <tr key={contact.id}>
                <td>{contact.firstname}</td>
                <td>{contact.lastname}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>
                    <button onClick={() => props.removeContact(contact.id)}>
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