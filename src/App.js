import React, { Component } from 'react';
import ContactList from './ContactList';
import SearchBar from './SearchBar';

class App extends Component {

  constructor() {
    super();

    this.state = {
      searchText: '',
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
          avatar: 'http://mostwantedmegan.weebly.com/uploads/2/8/3/8/28389195/3247137_orig.jpg',
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

  handleSearchBarChange(event) {
    this.setState({
      contacts: this.state.contacts,
      searchText: event.target.value
    });
  }

  getFilteredContacts() {
    //Remove any whitespace and convert to lower case.
    const term = this.state.searchText.trim().toLowerCase();
    const contacts = this.state.contacts;

    //If our term is an empty string, we want to return all the contacts
    if(!term){
      return contacts;
    }

    //Filter through our contacts
    return contacts.filter(contact => {
      return contact.name.toLowerCase().search(term) >= 0;
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar value={this.state.searchText} onChange={this.handleSearchBarChange.bind(this)} />
        <ContactList contacts={this.getFilteredContacts()} />
      </div>
    );
  }
}

export default App;
