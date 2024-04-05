import React, { useState } from 'react';
import '../styles/customercare.css';

function CustomerCarePage() {
  const [tickets, setTickets] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTicket = { ...formData };
    setTickets([...tickets, newTicket]);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Serene Stay Customer Care</h1>
        <p>We're here to help you!</p>
      </header>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="tickets">
        <h2>Tickets</h2>
        <ul>
          {tickets.map((ticket, index) => (
            <li key={index}>
              <strong>Name:</strong> {ticket.name}<br />
              <strong>Email:</strong> {ticket.email}<br />
              <strong>Message:</strong> {ticket.message}
            </li>
          ))}
        </ul>
      </div>
      <div className="contact-info">
        <h2>Connect with Us</h2>
        <p>For further assistance, you can reach us through the following channels:</p>
        <ul>
          <li>Social Media:
            <ul>
              <li>Twitter: <a href="https://twitter.com/example">Example Twitter</a></li>
              <li>Facebook: <a href="https://www.facebook.com/example">Example Facebook</a></li>
              <li>Instagram: <a href="https://www.instagram.com/example">Example Instagram</a></li>
            </ul>
          </li>
          <li>Call Options:
            <ul>
              <li>Main Office: 1-800-123-4567</li>
              <li>Support Line: 1-800-987-6543</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CustomerCarePage;
