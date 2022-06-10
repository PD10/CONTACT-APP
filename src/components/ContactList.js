import React from 'react';
import ContactCard from './ContactCard';

const ContactList = (props) => {

    const contactList = props.contacts.map(contact => <ContactCard contact={contact} />);

    return (
        <div className = "ui celled list">
            {contactList}
        </div>
    );
}

export default ContactList;