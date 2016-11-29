import React, { Component } from 'react';

class ContactForm extends Component {
  constructor() {
    super();

    this.state = {
        name: '',
        occupation: '',
        avatar: ''
    };
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleOccupationChange(event) {
    this.setState({occupation: event.target.value});
  }

  handleAvatarChange(event) {
    this.setState({avatar: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, occupation, avatar} = this.state;
    this.props.onAdd({ name, occupation, avatar });
    this.setState({
        name: '',
        occupation: '',
        avatar: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>

        <input
          id='name'
          className='contact-field'
          type='text'
          placeholder='Name...'
          value={this.state.name}
          onChange={this.handleNameChange.bind(this)}
        />

        <input
          id='occupation'
          className='contact-field'
          type='text'
          placeholder='Occupation...'
          value={this.state.occupation}
          onChange={this.handleOccupationChange.bind(this)}
        />

        <input
          id='avatar'
          className='contact-field'
          type='text'
          placeholder='Avatar URL...'
          value={this.state.avatar}
          onChange={(event) => this.handleAvatarChange(event)}
        />

        <input type='submit' value="Add Contact" className="submit-button" />

      </form>
    );
  }
}

export default ContactForm;
