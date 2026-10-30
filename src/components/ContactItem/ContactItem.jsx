import { Component } from "react";
import { Item, Btn } from "./ContactItem.styled";

class ContactItem extends Component {
  render() {
    const { contact, deleteContact } = this.props;

    return (
      <>
        <Item>
          {contact.name}: {contact.number}
          <Btn type="button" onClick={() => deleteContact(contact.id)}>
            Delete
          </Btn>
        </Item>
      </>
    );
  }
}

export default ContactItem;
