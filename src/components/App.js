import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { GlobalStyle } from './GlobalStyle';
import { Container, Title } from './App.styled';
import { useSelector } from 'react-redux';
import { getContacts } from '../redux/contactsSlice';
export const App = () => {
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
