import { Component } from "react";
import ContactItem from "../ContactItem/ContactItem";
import { List } from "./ContactList.styled";

class ContactList extends Component {
  render() {
    const { contacts, deleteContact } = this.props;

    return (
      <>
        <List>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              deleteContact={deleteContact}
            />
          ))}
        </List>
      </>
    );
  }
}

export default ContactList;
