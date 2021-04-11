import React, { useState, useEffect } from 'react';
import useWindowDimensions from '../../hooks/useWindowDimensions';

import { createContactAPIEndpoint } from '../../API/api';

const ContactForm = () => {
  const [contactList, setContactList] = useState([]);
  const [contactName, setContactName] = useState("");
  const [contactSubject, setContactSubject] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [feedback, setFeedback] = useState("");
  const { width } = useWindowDimensions();

  useEffect(() => {
    setFeedback(false);
  }, [])

  const handleSubmit = e => {
    e.preventDefault();

    const contactForm = {
      name: contactName,
      subject: contactSubject,
      message: contactMessage,
    };

    createContactAPIEndpoint(false).create(contactForm)
      .then(res => {
        let newContact = res.data;
        setContactList([...contactList, newContact]);
        clearForm();
        setFeedback(true);
      })
      .catch(err => console.log(err));
  }

  const clearForm = () => {
    document.getElementById('contactForm').reset();
  }

  const handleNameChange = e => {
    setContactName(e.target.value);
  }

  const handleSubjectChange = e => {
    setContactSubject(e.target.value);
  }

  const handleMessageChange = e => {
    setContactMessage(e.target.value);
  }

  const checkFeedback = (feedback) => {
    if (feedback) {
      return (
        <div className="bg-success p-2 mb-3 rounded-top rounded-right rounded-bottom rounded-left">
          Thank you, your message has been sent!
        </div>
      );
    }
  }

  const responsiveContainer = () => {
    if (width <= 600)
      return "col-12 pb-3";
    else
      return "col-6";
  }

  return (
    <div className="container pb-5">
      <h2 className="mb-5">Contact Us</h2>
      <div className="container">
        <div className="row">
          <div className={responsiveContainer()}>
            <h4>Visit us here</h4>
            <hr />
            <div>2682 Oliverio Drive</div>
            <div>Toronto, Ontario</div>
            <div>B3C 5D2</div>
            <div><i className="fas fa-phone"></i> (647) 637-8475</div>
            <div><i className="fas fa-envelope"></i> DestXplore@info.ca</div>
          </div>
          <div className={responsiveContainer()}>
            <img
              src="./images/toronto-map.png"
              alt="map of Toronto"
              style={{ width: "100%", maxHeight: "300px" }}
            />
          </div>
        </div>
      </div>
      <div className="container my-5">
        <h4 className="mb-4">Leave us a message</h4>
        {checkFeedback(feedback)}
        <form
          className="flex-column"
          id="contactForm"
          style={{ maxWidth: "700px" }}
          onSubmit={handleSubmit}
        >
        <div className="form-group">
          <input
            className="form-control"
            placeholder="Name"
            onChange={handleNameChange}
            required />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            placeholder="Subject"
            onChange={handleSubjectChange}
            required />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Message"
            onChange={handleMessageChange}
            style={{ resize: "none" }}
            rows={5}
            required>
          </textarea>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;