import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';

import CircularProgress from '@mui/material/CircularProgress';
import { Wrapper } from './Contacts.styled.js';
import { ContactsForm } from 'components/ContactsForm';
import { ContactsList } from 'components/ContactsList';
import { Filter } from 'components/Filter';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactsForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && (
        <b>
          <CircularProgress />
        </b>
      )}
      <ContactsList />
    </Wrapper>
  );
};
export default Contacts;
