import React from 'react';
import s from '../Notification/Notification.module.css';
import PropTypes from 'prop-types';

function Notification({ message }) {
  return <h2 className={s.title}>{message}</h2>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
