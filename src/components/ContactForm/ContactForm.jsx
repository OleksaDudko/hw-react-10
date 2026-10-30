import { Component } from "react";
import { Form, Label, Btn } from "./ContactForm.styled";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (evt) => {
    const { name, value } = evt.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    const { name, number } = this.state;

    const isAdded = this.props.addContact(name, number);

    if (isAdded) {
      this.setState({
        name: "",
        number: "",
      });
    }
  };

  render() {
    const { name, number } = this.state;

    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces."
              required
            />
          </Label>

          <Label>
            Number
            <input
              type="tel"
              name="number"
              value={number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>

          <Btn type="submit">Add contact</Btn>
        </Form>
      </>
    );
  }
}

export default ContactForm;
