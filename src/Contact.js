import React, { Component } from 'react';
import { Link } from 'react-router';

//Need to add onClick

class Contact extends Component {

  //Pass the id of the contact to be deleted back to the App
  handleClick(event) {
    event.preventDefault();
    this.props.handleDelContact(this.props.id);
  }

  render() {

    return (
      <li className="contact">
        <div className="image-cropper">
          <img src={this.props.avatar} alt="avatar" />
        </div>
        <div className="contact-info">
          <Link to={`/profile/${this.props.id}`} className='contact-link'>
            <h2>{this.props.name}</h2>
          </Link>
          {this.props.occupation}
        </div>
        <div className="crud-section">
          <button className='delete-btn' onClick={this.handleClick.bind(this)}>Delete</button>
        </div>
      </li>
    );
  }
} //End Contact

Contact.propTypes = {
  id: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  occupation: React.PropTypes.string.isRequired,
  avatar: React.PropTypes.string
}

export default Contact;
