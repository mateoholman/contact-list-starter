import React from 'react';

const ContactForm = (props) => {
  return (
    <form>
      <label htmlFor='name' className='contact-label'>Name</label>
      <input
        id='name'
        className='contact-field'
        type='text'
      />
      <label htmlFor='occupation' className='contact-label'>Occupation</label>
      <input
        id='occupation'
        className='contact-field'
        type='text'
      />
      <label htmlFor='avatar' className='contact-label'>Avatar URL</label>
      <input
        id='avatar'
        className='contact-field'
        type='text'
      />
    </form>
  );
}

export default ContactForm;
