import {createSlice} from '@reduxjs/toolkit';
import {nanoid} from 'nanoid';


const contactsInitialState = {
  items: [
    {
      id: nanoid(),
      name: 'vad',
      number: '+380987654321',
    },
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(values) {
        return {
          payload: {
            id: nanoid(),
            name: values.name,
            number: values.number,
          },
        };
      },
    },

    deleteContact(state, action) {
      const index = state.items.findIndex((contact) => contact.id === action.payload);
      state.items.splice(index, 1);
    },
  },
});

export const selectContacts = state => state.contacts.items;
export const {addContact, deleteContact} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
