import { useEffect, useState } from 'react';
import React from 'react';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import ContactForm from '../ContactForm/ContactForm';
import { Wrapper, MainTitle, Title } from './App.styled';
//import toast, { Toaster } from 'react-hot-toast';
import data from '../Data/data.json';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const localData = localStorage.getItem('contacts');

    if (localData && JSON.parse(localData).length > 0)
      setContacts(JSON.parse(localData));
    else setContacts([...data]);
  }, []);

  useEffect(() => {
    if (contacts) localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = data => {
    console.log('data', data);
    if (contacts.some(({ name }) => name === data.name)) {
      alert(`${data.name} is already in contacts.`);
      return;
    }
    setContacts([...contacts, { ...data }]);
  };

  const handleDeleteContact = delId => {
    setContacts(contacts.filter(({ id }) => id !== delId));
  };

  const handelChangeFilter = value => {
    setFilter(value);
  };

  return (
    <Wrapper>
      {/* <Toaster /> */}
      <MainTitle>Phonebook</MainTitle>
      <ContactForm onSubmit={handleSubmit} />
      <Title>Contacts</Title>
      <Filter handelChangeFilter={handelChangeFilter} />
      <ContactList
        contacts={contacts}
        filter={filter.toLowerCase()}
        onDeleteContact={handleDeleteContact}
      />
    </Wrapper>
  );
};

export default App;
