import 'modern-normalize';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import styles from './App.module.css';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchContacts} from '../redux/contactsOps.js';
import {selectIsLoading, selectError} from '../redux/contactsSlice.js';

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm/>
      <SearchBox/>
      {isLoading && !error && <b>Request in progress...</b>}
      <h2>Contacts</h2>
      <ContactList/>
    </div>
  );
}

export default App;
