import React from 'react';
import { ListItem, Button } from './ContactItem.styles';
import PropTypes from 'prop-types';

const ContactItem = ({ contact, onDelete }) => {
  const { name, number } = contact;

  return (
    <ListItem>
      <span>{name}: {number}</span>
      <Button type="button" onClick={() => onDelete(contact.id)}>Delete</Button>
    </ListItem>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;