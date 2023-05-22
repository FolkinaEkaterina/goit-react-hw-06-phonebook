import PropTypes from 'prop-types';
import { List, Item, Btn } from 'components/Phonebook.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { setStateFilter, setStateContacts } from 'redux/selector';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(setStateContacts);
  const filter = useSelector(setStateFilter);

  const delContact = id => dispatch(deleteContact(id));

  const list = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  return (
    <List>
      {list().map(({ id, number, name }) => {
        return (
          <Item key={id}>
            {name}: {number}{' '}
            <Btn type="button" onClick={() => delContact(id)}>
              Delete
            </Btn>
          </Item>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
