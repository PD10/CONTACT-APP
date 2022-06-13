import React from 'react';
import { Link } from 'react-router-dom';

const ContactCard = (props) => {
    const {
        contact,
        handleDelete
    } = props;

    return (
        <div className = "item">
            <div className = "content">
                {contact.id}
                {`/contact/${contact.id}`}
                <Link 
                    to = {{
                        pathName: `/contact/${contact.id}`,
                        state: { contact: contact }
                    }}
                >
                {/* <Link 
                    to = {`/contact/${contact.id}`}
                    state = { {contact: contact} }
                > */}
                    <div className = "header">
                        {contact.name}
                    </div>
                    <div>
                        {contact.email}
                    </div>
                </Link>
            </div>
            <i 
                className = "trash alternate outline icon" 
                style = {{ color: "red", marginTop: "7px" }}
                onClick = {() => handleDelete(contact.id)}
                >
            </i>
        </div>
    );
}

export default ContactCard;