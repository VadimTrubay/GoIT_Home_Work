import {BsPersonFill} from "react-icons/bs";
import {BsTelephoneFill} from "react-icons/bs";
import styles from "./Contact.module.css";
import {deleteContact} from "../../redux/contactsSlice";
import {useDispatch} from "react-redux";


const Contact = ({id, name, number}) => {
  const dispatch = useDispatch();

  const handleDelete = (contactId) => {
    dispatch(deleteContact(contactId));
  }

  return (
    <div className={styles.contact}>
      <div>
        <p>
          <BsPersonFill className={styles.name}/>
          <span>{name}</span>
        </p>
        <p>
          <BsTelephoneFill className={styles.number}/>
          <span>{number}</span>
        </p>
      </div>
      <div>
        <button onClick={() => handleDelete(id)}>Delete</button>
      </div>
    </div>
  );
};

export default Contact;
