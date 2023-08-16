import { configureStore } from "@reduxjs/toolkit";
import { createReducer } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
// import { rootReducer } from "./reducer";

// const myContacts = createReducer([], {})
const myFilter = createReducer('', {})


export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: myFilter,
    },
});
