import React from 'react';
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
        <div className = "ui celled list">
            {contactList}
        </div>
    );
}

export default ContactList;