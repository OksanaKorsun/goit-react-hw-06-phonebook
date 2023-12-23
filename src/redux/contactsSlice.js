import { createSlice, nanoid } from '@reduxjs/toolkit';
import initialContacts from '../contacts.json';
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(value) {
        return {
          payload: {
            name: value.name,
            number: value.number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
