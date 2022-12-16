import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts/slices/filterSlice';
import { Text, Label, InputEl } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const onSearch = e => {
    e.preventDefault();

    dispatch(filterContacts(e.currentTarget.value));
  };

  return (
    <Label>
      <Text>Find contacts by name</Text>
      <InputEl
        type="text"
        name="filter"
        color="teal"
        placeholder="Please enter a name"
        _placeholder={{ color: 'inherit' }}
        onChange={onSearch}
      />
    </Label>
  );
};
