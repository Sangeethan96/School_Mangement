import React from 'react';
import './Contact.css'; // Import CSS file for styling

function Contact() {
  // Sample contact data
  const contacts = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', twitter: 'johndoe', linkedin: 'johndoe', facebook: 'johndoe' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210', twitter: 'janesmith', linkedin: 'janesmith', facebook: 'janesmith' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', phone: '111-222-3333', twitter: 'alicejohnson', linkedin: 'alicejohnson', facebook: 'alicejohnson' }
  ];

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <div className="contact-list">
        <h3>Sample Contacts:</h3>
        <ul>
          {contacts.map(contact => (
            <li key={contact.id} className="contact-item">
              <strong>Name:</strong> {contact.name}<br />
              <strong>Email:</strong> {contact.email}<br />
              <strong>Phone:</strong> {contact.phone}<br />
              <strong>Twitter:</strong> @{contact.twitter}<br />
              <strong>LinkedIn:</strong> {contact.linkedin}<br />
              <strong>Facebook:</strong> {contact.facebook}<br />
            </li>
          ))}
        </ul>
      </div>

      <div className="contact-form">
        <h3>Contact Form:</h3>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;


