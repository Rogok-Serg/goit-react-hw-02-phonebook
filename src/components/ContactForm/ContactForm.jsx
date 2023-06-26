import PropTypes from 'prop-types';
import css from './ContactForm.module.css';
import React from 'react';

export class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  handelInputChange = e => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handelSubmit = e => {
    e.preventDefault();
    const contactData = { ...this.state };
    console.log(this.state);
    this.props.onAddContact(contactData);
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    return (
      <form onSubmit={this.handelSubmit}>
        <h2>ContactForm</h2>
        <label>
          <span>Name:</span>
          <input
            onChange={this.handelInputChange}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          <span>Number:</span>
          <input
            onChange={this.handelInputChange}
            type="text"
            name="number"
            value={this.state.number}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
