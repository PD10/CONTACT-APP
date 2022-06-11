import React, { useState, useEffect } from 'react';

const AddContact = (props) => {

    useEffect(() => {
        console.log('Component connected to DOM');
    }, []);

    useEffect(() => {
        console.log('Component rendered');
    });

    const [contact, setContact] = useState({ name: '', email: ''});

    const handleNameChnage = (event) => {
        console.log('handleNameChange');
        setContact({ ...contact, name: event.target.value});
    }

    const handleEmailChange = (event) => {
        console.log('handleEmailChange');
        setContact({ ...contact, email: event.target.value});
    }

    const add = (event) => {
        event.preventDefault();
        if(contact.name === "" || contact.email === "") {
            alert("All fields are mandatory");
            return;
        }

        props.addContactHandler(contact);
    }

    return (
        <div className = "ui main">
            <h2>Add Contact</h2>
            <form className = "ui form" onSubmit = {add}>
                <div className = "field">
                    <label>Name</label>
                    <input 
                        type = "text"
                        name = "name"
                        placeholder = "Name"
                        onChange ={handleNameChnage}
                        value = {contact.name} />
                </div>
                <div className = "field">
                    <label>Email</label>
                    <input 
                        type = "text"
                        name = "email"
                        placeholder = "Email"
                        onChange = {handleEmailChange}
                        value = {contact.email} />
                </div>
                <button className = "ui button blue">Add</button>
            </form>
        </div>
    );
}

export default AddContact;