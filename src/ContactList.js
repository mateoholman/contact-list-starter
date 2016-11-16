import React from 'react';
import Contact from './Contact';

const ContactList = (props) => {
  return (
    <ul className="contact-list">
      {props.contacts.map(contact => {
        return (
          <Contact
            key={contact._id}
            name={contact.name}
            avatar={contact.avatar}
            occupation={contact.occupation}
          />
        )
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: React.PropTypes.array.isRequired
}

export default ContactList;
