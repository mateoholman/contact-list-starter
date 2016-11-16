import React, { Component } from 'react';
import ContactList from './ContactList';
import SearchBar from './SearchBar';
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
    debugger;
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
    debugger;
    return (
      <div className="App">
        <SearchBar value={this.state.searchText} onChange={this.handleSearchBarChange.bind(this)} />
        <ContactList contacts={this.getFilteredContacts()} />
      </div>
    );
  }

  componentDidMount() {
    axios.get('https://limitless-bayou-36199.herokuapp.com/api/contacts')
    .then(resp => {
      this.setState({
        searchText: this.state.searchText,
        contacts: resp.data
      })
    })
    .catch(err => console.log('Error! ${err}'));
  }
}

export default App;
