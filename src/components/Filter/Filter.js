import { Label, InputStyled } from 'components/Phonebook.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { setStateFilter } from 'redux/selector';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(setStateFilter);

  const changeFilter = event => dispatch(setFilter(event.target.value));

  return (
    <Label>
      Find contact by name
      <InputStyled
        type="text"
        name="name"
        placeholder="Enter contact name"
        value={filter}
        onChange={changeFilter}
        pattern="^[a-zA-Zа-яіїєґА-ЯІЇЄҐ]+(([' -][a-zA-Zа-яіїєґА-ЯІЇЄҐ ])?[a-zA-Zа-яіїєґА-ЯІЇЄҐ]*)*$"
      />
    </Label>
  );
};
