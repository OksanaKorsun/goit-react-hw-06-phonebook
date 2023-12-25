import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { GlobalStyle } from './GlobalStyle';
import { Container, Title } from './App.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
export const App = () => {
  // handleFilter = evt => {
  //   this.setState({
  //     filter: evt.target.value,
  //   });
  // };
  // deleteContact = contactId => {
  //   this.setState(prevState => {
  //     return {
  //       contacts: prevState.contacts.filter(item => item.id !== contactId),
  //     };
  //   });
  // };
  // addContact = newContact => {
  //   const contact = {
  //     id: nanoid(),
  //     ...newContact,
  //   };
  //   const checkContact = this.state.contacts.find(
  //     contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
  //   );

  //   if (checkContact) {
  //     alert(`${newContact.name} is already in contacts.`);
  //     return;
  //   }
  //   this.setState(prevState => {
  //     return { contacts: [...prevState.contacts, contact] };
  //   });
  // };

  // filteredList = () => {
  //   const { contacts, filter } = this.state;
  //   return contacts.filter(contact => {
  //     return contact.name.toLowerCase().includes(filter.toLowerCase());
  //   });
  // };
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length > 0 && <Filter />}
      <ContactList />
      <GlobalStyle />
    </Container>
  );
};
