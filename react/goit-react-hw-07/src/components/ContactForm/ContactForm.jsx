import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {addContact} from '../../redux/contactsOps.js';
import {selectContacts} from "../../redux/contactsSlice.js";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required('required')
      .min(3, 'min 3 characters')
      .max(50, 'max 50 characters'),
    number: Yup.string()
      .required('required')
      .min(3, 'min 3 characters')
      .max(50, 'max 50 characters'),
  });

  const handleSubmit = newContact => {
    if (contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    dispatch(addContact({...newContact}));
  };

  return (
    <div className={styles.contact_form}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          handleSubmit(values);
          actions.resetForm();
        }}
      >
        <Form>
          <div className={styles.field}>
            <p>
              <label htmlFor='name'>Name</label>
            </p>
            <Field type='text' id='name' name='name'/>
            <ErrorMessage name='name' component='div'/>
          </div>

          <div className={styles.field}>
            <p>
              <label htmlFor='number'>Number</label>
            </p>
            <Field type='text' id='number' name='number'/>
            <ErrorMessage name='number' component='div'/>
          </div>
          <div className={styles.button}>
            <button type='submit'>Add contact</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;

