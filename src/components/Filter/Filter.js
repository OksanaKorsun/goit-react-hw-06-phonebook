import { setFilter } from '../../redux/filterSlice';
import { FilterInput } from './Filter.styled';
import { useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <p>Find contacts by name</p>
      <FilterInput
        type="text"
        name="filter"
        placeholder='Search contact'
        onChange={evt => dispatch(setFilter(evt.target.value))}
        required
      />
    </>
  );
};
