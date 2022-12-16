import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';

import { Wrapper, TitleEl, SpanEl, SpinnerEl } from './Contacts.styled.js';
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
      <SpanEl>
        <TitleEl>Phonebook</TitleEl>
        <ContactsForm />
      </SpanEl>
      <SpanEl>
        <TitleEl>Filter</TitleEl>
        <Filter />
        {isLoading && !error && <SpinnerEl size="xl" />}
      </SpanEl>
      <SpanEl>
        <TitleEl>Contacts</TitleEl>

        <ContactsList />
      </SpanEl>
    </Wrapper>
  );
};
export default Contacts;
