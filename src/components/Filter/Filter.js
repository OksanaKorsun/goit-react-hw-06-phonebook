import { setFilter} from 'redux/filterSlice';
import { FilterInput } from './Filter.styled';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  // const filter = useSelector(getFilter);
  // const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  // const filteredList = () => {
  //   return contacts.filter(contact => {
  //     return contact.name.toLowerCase().includes(filter.toLowerCase());
  //   });
  // };

  return (
    <>
      <p>Find contacts by name</p>
      <FilterInput
        type="text"
        name="filter"
        // value={filter}
        onChange={(evt) => dispatch(setFilter(evt.target.value))}
        required
      />
    </>
  );
};
