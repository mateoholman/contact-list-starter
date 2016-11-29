import React, { Component } from 'react';
import ContactList from './ContactList';
import SearchBar from './SearchBar';
import ContactForm from './ContactForm';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
      contacts: []
    };
  }

  componentWillMount() {

  }

  handleSearchBarChange(event) {
    this.setState({
      contacts: this.state.contacts,
      searchText: event.target.value
    })
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

  handleAddContact(attributes) {
    axios.post('http://localhost:3001/api/contacts', attributes)
      .then(resp => {
        this.setState(prev => {
          return {
            ...prev,
            contacts: [...prev.contacts, resp.data]
          };
        });
      })
      .catch(err => console.log(err));
  }

  handleDelContact(contact) {
    //Remove a contact when the remove button is clicked
    console.log('App registered click:' + contact.name);
    //When the 'delete' button is clicked, we want it to send us the 'id' or
    //'name' of the contact that was clicked. Then, we can slice that contact
    //out of the contact list and return a new contact list.

    //Get the current contact list
    //const contacts = this.state.contacts;
    //Find the index of the deleted contact in the contacts list
  }

  render() {
    return (
      <div className="App">
        <h1>Contacts</h1>
        <div className='contactForm'>
          <ContactForm onAdd={this.handleAddContact.bind(this)}/>
        </div>
        <SearchBar value={this.state.searchText} onChange={this.handleSearchBarChange.bind(this)} />
        <ContactList contacts={this.getFilteredContacts()} handleDelContact={this.handleDelContact}/>
      </div>
    );
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/contacts')
    .then(resp => {
      this.setState({
        searchText: this.state.searchText,
        contacts: resp.data
      })
    })
    .catch(err => console.log(`Error! ${err}`));
  }
}

export default App;
