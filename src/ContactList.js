import React, { Component } from 'react';
import Contact from './Contact';

class ContactList extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [
        {
          _id: 'zeus',
          name: 'Zeus',
          occupation: 'God of the sky',
          avatar: 'http://img01.deviantart.net/dd93/i/2009/303/3/0/zeus_by_aracubus.jpg',
        },
        {
          _id: 'poseidon',
          name: 'Poseidon',
          occupation: 'God of the sea',
          avatar: 'https://a2ua.com/poseidon/poseidon-013.jpg',
        },
        {
          _id: 'ares',
          name: 'Ares',
          occupation: 'God of war',
          avatar: 'http://pre13.deviantart.net/2da3/th/pre/i/2013/018/f/a/ares_by_peterprime-d5rvzcq.png',
        },
        {
          _id: 'nemisis',
          name: 'Nemisis',
          occupation: 'God of revenge',
          avatar: 'http://www.talesbeyondbelief.com/images/nemesis-alfred-rethel.jpg',
        },
        {
          _id: 'hades',
          name: 'Hades',
          occupation: 'God of the underworld',
          avatar: 'http://www.greekmyths-greekmythology.com/wp-content/uploads/2010/05/hades-02.jpg',
        }
      ]
    };
  }

  render() {
    return (
      <ul className="contact-list">
        {this.state.contacts.map(contact => {
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
}

export default ContactList;
