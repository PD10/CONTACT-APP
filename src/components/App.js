import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import axios from 'axios';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import EditContact from "./EditContact";
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
    const payload = {
      id: uuid(),
      ...contact
    }

    axios.post("http://localhost:3006/contacts", payload)
      .then((response) => {
        setContacts([...contacts, response.data]);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const updateContactHandler = (contact) => {
    axios.put(`http://localhost:3006/contacts/${contact.id}`, contact)
      .then((response) => {
        const { id, name, email } = response.data;
        setContacts(contacts.map(contact => {
          return contact.id === id ? { ...response.data } : contact
        }));
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const removeContactHandler = (id) => {
    axios.delete(`http://localhost:3006/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  }

  useEffect(() => {
    axios.get("http://localhost:3006/contacts")
      .then((response) => {
        setContacts(response.data)
      })
      .catch((error) => {
        console.log(error);
      })
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
          <Route 
            path = "/edit"
            render = {(props) => 
              <EditContact
                // Destructuring the props and unpacking it
                {...props}
                updateContactHandler={updateContactHandler} 
              />
            }
          />
          <Route path="/contact/:id" exact component={ContactDetail} />
        </Switch>
        {/* <ParentComponent /> */}
      </Router>
    </div>
  );
}

export default App;
