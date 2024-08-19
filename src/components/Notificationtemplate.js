import React from "react";
import { Link } from "react-router-dom";
import '../css/Notificationtemplate.css'

const Notificationtemplate = ({ Notificationdata }) => {

  const { notificationimage, content, read } = Notificationdata;

  return (
    <div class="notification-card">
      <img class="notification-img" src={notificationimage}  alt="Notification image"/>
      <div className="notification-content"><p>{content}</p></div>
      <div>{read}</div>
    </div>
  );
}

export default Notificationtemplate;