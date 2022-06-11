import React, { useState, useEffect } from "react";
import { v4 as uuid } from 'uuid';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
// import ParentComponent from "./ParentComponent";
// import './App.css';

// const contacts = [
//   {
//     id: "1",
//     name: "Pritish",
//     email: "pritishdas01@gmail.com",
//   },
//   {
//     id: "2",
//     name: "Pratik",
//     email: "pratikdas01@gmail.com",
//   }
// ]

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    // Yaha pe ek naya array bann raha hai and usme contacts unpack hua ek ek karke and ek aur item bass judd gaya
    setContacts([...contacts, { id: uuid(), ...contact }]);
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  }

  useEffect(() => {
    const retrieveContacts = JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log(retrieveContacts);
    if(retrieveContacts) {
      setContacts(retrieveContacts);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className = "ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} removeContactHandler={removeContactHandler}/>
      {/* <ParentComponent /> */}
    </div>
  );
}

export default App;
