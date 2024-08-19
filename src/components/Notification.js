import React from "react";
import { Link } from "react-router-dom";
import '../css/Notification.css'
import Notificationtemplate from "./Notificationtemplate";

const Notification = () => {

  const notification = [
    {
      notificationimage: require('../images/Ellipse 7.png'),
      content: 'Andre_483 Recently added a article',
      read: '🟢'
    },
    {
      notificationimage: require('../images/Ellipse 9.png'),
      content: 'kevin-009 subscribed you',
      read: ''
    },
    {
      notificationimage: require('../images/Ellipse 11.png'),
      content: 'Ashley_33 Recently liked your article',
      read: '🟢'
    },
    {
      notificationimage: require('../images/Ellipse 6.png'),
      content: 'Andre_483 Recently added a article',
      read: '🟢'
    },
    {
      notificationimage: require('../images/Ellipse 8.png'),
      content: 'kevin-009 subscribed you',
      read: ''
    },
    {
      notificationimage: require('../images/Ellipse 10.png'),
      content: 'Ashley_33 Recently liked your article',
      read: '🟢'
    },
    {
      notificationimage: require('../images/Ellipse 7.png'),
      content: 'Andre_483 Recently added a article',
      read: '🟢'
    },
    {
      notificationimage: require('../images/Ellipse 9.png'),
      content: 'kevin-009 subscribed you',
      read: ''
    },
    {
      notificationimage: require('../images/Ellipse 11.png'),
      content: 'Ashley_33 Recently liked your article',
      read: '🟢'
    },
    {
      notificationimage: require('../images/Ellipse 6.png'),
      content: 'Andre_483 Recently added a article',
      read: '🟢'
    },
    {
      notificationimage: require('../images/Ellipse 12.png'),
      content: 'kevin-009 subscribed you',
      read: ''
    },
    {
      notificationimage: require('../images/Ellipse 10.png'),
      content: 'Ashley_33 Recently liked your article',
      read: '🟢'
    },
    {
      notificationimage: require('../images/Ellipse 7.png'),
      content: 'Andre_483 Recently added a article',
      read: '🟢'
    },
    {
      notificationimage: require('../images/Ellipse 12.png'),
      content: 'kevin-009 subscribed you',
      read: ''
    },
    {
      notificationimage: require('../images/Ellipse 8.png'),
      content: 'Ashley_33 Recently liked your article',
      read: '🟢'
    },
  ]

  return (
    <section className="notification-cotainer">
      <h1 className="title">Notification</h1>
      <div className="notification-body">
      {notification.map((article, index) => (
          <Notificationtemplate key={index} Notificationdata={article} />
        ))}
      </div>
    </section>
  );
} 

export default Notification;