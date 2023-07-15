import { useState } from 'react';
import {
  FormContainer,
  WrapInput,
  Input,
  BtnSubmit,
} from './ContactForm.styled';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import React from 'react';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInput = ({ target: { name, value } }) => {
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    onSubmit({
      id: nanoid(),
      name: name,
      number: number,
    });

    reset();
  };
  // Не працює
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormContainer>
      <form className="form" onSubmit={handleSubmit}>
        <WrapInput>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleInput}
            value={name}
          />
        </WrapInput>
        <WrapInput>
          <label htmlFor="exampleInputNumber" className="form-label">
            Number
          </label>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleInput}
            value={number}
          />
        </WrapInput>
        <BtnSubmit type="submit">Add contact</BtnSubmit>
      </form>
    </FormContainer>
  );
};

export default ContactForm;

ContactForm.propTypes = { onSubmit: PropTypes.func };
