import Contact from "../../components/Contact/Contact";
import styles from "./ContactList.module.css";
import {useSelector} from "react-redux";
import {selectContacts} from "../../redux/contactsSlice.js";
import {selectFilter} from "../../redux/filtersSlice.js";


const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = filter
    ? contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
    : contacts;


  return (
    <div className={styles.container}>
      <ul className={styles.contact_list}>
        {filteredContacts.map(({id, name, number}) => (
          <li key={id}>
            <Contact id={id} name={name} number={number}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;

