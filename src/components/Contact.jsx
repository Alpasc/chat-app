import React from 'react';
import PropTypes from "prop-types";

const Contact = (props) => (
      <div className="Contact">
        <img className="avatar" src={props.avatar}alt={props.name}/>
        <div className="text">
          <div className="name">{props.name}</div>
          <div className="status">
            <span class={props.online ? "status-online" : "status-offline"}></span>
            <p class="status-text">{props.online ? "online" : "offline"}</p>
          </div>
        </div>
      </div>
);
  

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  online: PropTypes.bool
};
export default Contact;

