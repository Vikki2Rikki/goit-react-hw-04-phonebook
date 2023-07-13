import { Component } from 'react';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import ContactForm from '../ContactForm/ContactForm';
import { Wrapper, MainTitle, Title } from './App.styled';
//import toast, { Toaster } from 'react-hot-toast';

const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

class App extends Component {
  state = { ...INITIAL_STATE };

  componentDidMount() {
    const localData = localStorage.getItem('contacts');
    if (localData) this.setState({ contacts: JSON.parse(localData) });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts)
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));

    // if (
    //   prevState.contacts &&
    //   prevState.contacts.length < this.state.contacts.length
    // )
    //   toast.success('Add new contsct!');

    // if (
    //   prevState.contacts &&
    //   prevState.contacts.length > this.state.contacts.length
    // )
    //   toast.error('Delete contact!');
  }

  //додавання нового контакту у контакт-лист або алерто що контакт вже є
  handleSubmit = data => {
    if (this.state.contacts.some(({ name }) => name === data.name)) {
      alert(`${data.name} is already in contacts.`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...data }],
    }));
  };

  // Виделення контакту кнопкою делейт

  handleDeleteContact = delId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== delId),
    }));
  };

  handelChangeFilter = value => {
    this.setState({ ...value });
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <Wrapper>
        {/* <Toaster /> */}
        <MainTitle>Phonebook</MainTitle>
        <ContactForm onSubmit={this.handleSubmit} />
        <Title>Contacts</Title>
        <Filter onChange={this.handelChangeFilter} />
        <ContactList
          contacts={contacts}
          filter={filter.toLowerCase()}
          onDeleteContact={this.handleDeleteContact}
        />
      </Wrapper>
    );
  }
}

export default App;
