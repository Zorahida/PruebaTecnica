import React from 'react';
import { FormattedMessage } from 'react-intl';
import "./Contact.css"

function Contact() {
  return (
    <div>
      <h1>
        <FormattedMessage id="contact.title" defaultMessage="Contact Us" />
      </h1>
      <form>
        <label htmlFor="name">
          <FormattedMessage
            id="contact.nameLabel"
            defaultMessage="Name"
          />
        </label>
        <input type="text" id="name" /> <br />

        <label htmlFor="comment">
          <FormattedMessage
            id="contact.commentLabel"
            defaultMessage="Leave your comment here"
          />
        </label>
        <textarea name="comment" id="comment" cols="50" rows="25" />
      </form>
    </div>
  );
}

export default Contact;
