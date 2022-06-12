import React from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    const {
        removeContactHandler
    } = props;

    const handleDelete = (id) => {
        removeContactHandler(id);
    }

    const contactList = props.contacts.map(contact => <ContactCard contact = {contact} handleDelete = {handleDelete} key={contact.id} />);

    return (
        <div class = "main">
            <h2>
                Contact List
                <Link to = "/add">
                    <button className = "ui button blue right" >Add Contact</button>
                </Link>
            </h2>
            <div className = "ui celled list">{contactList}</div>
        </div>
    );
}

export default ContactList;