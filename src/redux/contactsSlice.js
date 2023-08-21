import { createSlice } from "@reduxjs/toolkit";


export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
    },
    reducers: {
        addContact(state, action) {

            if (state.contacts.some((contact) => contact.name.toLowerCase() === action.payload.name.toLowerCase())) {
                return alert(`${action.payload.name} already in contacts`)
            }
            state.contacts.push(action.payload)
        },
        delateContact(state, action) {

            state.contacts.filter((contact) => contact.id !== action.payload)
        }
    }
})

export const { addContact, delateContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
