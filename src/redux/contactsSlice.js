import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { truncateInnerWhitespaces } from 'utils';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(newContactData) {
        return {
          payload: {
            id: nanoid(14),
            name: truncateInnerWhitespaces(newContactData.name),
            number: truncateInnerWhitespaces(newContactData.number),
          },
        };
      },
    },
    removeContact(state, action) {
      return state.filter(contact => contact.id !== action.payload.contactID);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, removeContact } = contactsSlice.actions;
