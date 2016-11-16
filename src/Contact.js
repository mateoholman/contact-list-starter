import React from 'react';

const Contact = (props) => {
  return (
    <li className="contact">
      <div className="image-cropper">
        <img src={props.avatar} alt="avatar" />
      </div>
      <div className="contact-info">
        <h2>{props.name}</h2>
        {props.occupation}
      </div>
    </li>
  );
}

Contact.propTypes = {
  avatar: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  occupation: React.PropTypes.string.isRequired
}

export default Contact;
