import React, { useState, useEffect } from 'react';

import { createContactAPIEndpoint } from '../../API/api';

import ContactMessage from './ContactMessage';

const AdminInbox = () => {
  const [contactList, setContactList] = useState([]);


  useEffect(() => {
    getAllMessages(false);
  }, [])

  const getAllMessages = (productionUrl) => {
    createContactAPIEndpoint(productionUrl).fetchAll()
      .then(res => {
        console.log(res.data);
        let contactList = res.data.map(contact => ({
          id: contact.id,
          name: contact.name,
          subject: contact.subject,
          message: contact.message
        }));
        setContactList(contactList);
      })
      .catch(err => console.log(err));
  } 

  const deleteMessage = id => {
    createContactAPIEndpoint(false).delete(id)
      .then(res => {
        setContactList(res.data);
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="container py-5">
      <h2 className="mb-5">Inbox</h2>
      <div className="row">
        {
          contactList.map(c => {
            return (
              <ContactMessage
                key={c.id}
                id={c.id}
                name={c.name}
                subject={c.subject}
                message={c.message}
                deleteMessage={deleteMessage}
              />
            );
          })
        }
      </div>
    </div>
  );
}

export default AdminInbox;