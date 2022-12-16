import { useDispatch, useSelector } from 'react-redux';
// Імпортуємо генератор екшену
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

import { List, Button } from './ContactsList.styled.js';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const handleDelete = id => dispatch(deleteContact(id));

  const filterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const visibleContacts = filterContacts();
  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <Button
            type="button"
            onClick={() => {
              handleDelete(id);
            }}
          >
            Delete
          </Button>
        </li>
      ))}
    </List>
  );
};
