import React, { Component } from 'react';
import Contact from './Contact';

class ContactList extends Component {

  render() {
    const { contacts } = this.props;
    return (
    <ul className="contact-list">
      {contacts.map(contact => {
        return (
          <Contact
            key={contact._id}
            id={contact._id}
            name={contact.name}
            avatar={contact.avatar}
            occupation={contact.occupation}
            handleDelContact={this.props.handleDelContact.bind(this)}
          />
        )
      })}
    </ul>
  );}
}

ContactList.propTypes = {
  contacts: React.PropTypes.array.isRequired
}

export default ContactList;
