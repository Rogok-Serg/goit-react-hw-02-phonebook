import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export const ContactList = ({ contacts, onRemoveContact }) => (
  <ul className={css.list}>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <button onClick={() => onRemoveContact(id)}>Delete</button>
        <p>Name: {name}</p>
        <p>Number: {number}</p>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};
