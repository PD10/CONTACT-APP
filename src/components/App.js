import React, { useState } from "react";
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

  const [contacts, setContacts] = useState([]);

  return (
    <div className = "ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
      {/* <ParentComponent /> */}
    </div>
  );
}

export default App;
