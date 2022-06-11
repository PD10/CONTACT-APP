import React from 'react';

const ContactCard = (props) => {
    const {
        contact,
        handleDelete
    } = props;

    return (
        <div className = "item">
            <div className = "content">
                <div className = "header">
                    {contact.name}
                </div>
                <div>
                    {contact.email}
                </div>
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