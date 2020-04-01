import React from 'react';
import PropTypes from "prop-types";

function Contact(props) {
  return (
  <div className="Contact">
    <img className="avatar" src={props.avatar}alt={props.name}/>
    <div className="text">
      <div className="name">{props.name}</div>
      <div className="status">
        <span className={props.online ? "status-online" : "status-offline"}></span>
        <p className="status-text">{props.online ? "online" : "offline"}</p>
      </div>
    </div>
  </div>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  online: PropTypes.bool
};
export default Contact;

