import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
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
      <Router>
        <Header />
        <Switch>
          {/* This is scenario of child to parent communication as function is passed as props + scenario of parent to child communication as data is passed from parent to child*/}
          <Route 
            path = "/" 
            exact
            render = {(props) => 
              <ContactList
                  // Destructuring the props and unpacking it
                  {...props}
                  contacts={contacts} 
                  removeContactHandler={removeContactHandler}
              />
            }
          />
          {/* This is scenario of child to parent communication as only function is passed as props */}
          <Route 
            path = "/add"
            render = {(props) => 
              <AddContact
                // Destructuring the props and unpacking it
                {...props}
                addContactHandler={addContactHandler} 
              />
            }
          />
          {/* <Route 
            path = "/contact/:id" 
            render = {(props) => 
              <ContactDetail
                // Destructuring the props and unpacking it
                {...props} 
              />
            }
          /> */}
          <Route path="/contact/:id" exact component={ContactDetail} />
        </Switch>
        {/* <ParentComponent /> */}
      </Router>
    </div>
  );
}

export default App;
