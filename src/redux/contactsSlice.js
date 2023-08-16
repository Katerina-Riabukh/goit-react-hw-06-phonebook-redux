import { createSlice } from "@reduxjs/toolkit";

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
    },
    reducer: {
        addContact(state, action) { },
        delateContact(state, action) { }
    }
})

export const { addContact, delateContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;