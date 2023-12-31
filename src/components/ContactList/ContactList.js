import {
  ListItemText,
  DeleteButton,
  ListItem,
  List,
} from './ContactList.styled';
import { deleteContact, getContacts } from '../../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from '../../redux/filterSlice';
export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const getVisibleContacts = () => {
    if (filter === '') {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const visibleContacts = getVisibleContacts();

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            <ListItemText>
              {name} - {number}
            </ListItemText>
            <DeleteButton onClick={() => dispatch(deleteContact(id))}>
              Delete
            </DeleteButton>
          </ListItem>
        );
      })}
    </List>
  );
};
