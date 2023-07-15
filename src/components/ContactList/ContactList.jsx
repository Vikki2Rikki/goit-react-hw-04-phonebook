import { List, ContacItem, DeleteBtn } from './ContactList.slyled';
import PropTypes from 'prop-types';
import React from 'react';

const ContactList = ({ contacts, filter, onDeleteContact }) => {
  const contactList = filter
    ? contacts.filter(({ name }) => name.toLowerCase().includes(filter))
    : contacts;
  return (
    <List>
      {contactList.map(({ id, name, number }) => (
        <ContacItem key={id}>
          {`${name}: ${number}`}
          <DeleteBtn type="submit" onClick={() => onDeleteContact(id)}>
            X
          </DeleteBtn>
        </ContacItem>
      ))}
    </List>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  filter: PropTypes.string,
  onDeleteContact: PropTypes.func,
};
