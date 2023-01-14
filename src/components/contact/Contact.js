import React , {useState} from 'react'
import ContactForm from '../contactForm/ContactForm'
import ContactList from '../contactList/ContactList'

const Contact = () => {
    const [contacts , setContacts] = useState([
        {full_name:"ABC" , phone_number:"123"},
        {full_name:"XYZ" , phone_number:"456"},
        {full_name:"EFG" , phone_number:"789"}
    ])
  return (
    <div id='container'>
        <div id='box'>
            <ContactList contacts={contacts}/>
            <ContactForm contacts={contacts} addContacts={setContacts}/>
        </div>
    </div>
  )
}

export default Contact