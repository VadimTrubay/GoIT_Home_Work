import Contact from "../../components/Contact/Contact";
import styles from "./ContactList.module.css";
import {useSelector} from "react-redux";
import {selectFilteredContacts} from "../../redux/contactsSlice.js";


const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

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

