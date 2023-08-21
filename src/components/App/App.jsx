
import { Form } from "../form/form";
import { ContactList } from "../contactList/contactList";
import { FilterContacts } from "../filter/filterContacts";
import { H1, H2, Wraper } from "./App.styled";
// import { useState, useEffect, useMemo } from "react";
import { selectContacts } from "redux/selectors";
import { useSelector } from "react-redux";



export const App = () => {

  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  // });

  // const [filter, setFilter] = useState('');
  const contacts = useSelector(selectContacts)



  // const formSubmit = (data) => {

  //   if (contacts.some((contact) => contact.name.toLowerCase() === data.name.toLowerCase())) {
  //     return alert(`${data.name} already in contacts`)
  //   }
  //   // setContacts(prevState => contacts.concat(data));

  // };



  /**variant 2 *///=============

  // const filteredContactsList = contacts.filter((contact) => {
  //   return contact.name.toLowerCase().includes(filter.toLowerCase())
  // });

  //============================

  return (
    <Wraper>
      <H1>Phone book</H1>
      <Form />
      <H2>Contacts</H2>
      <FilterContacts />

      <ContactList />
    </Wraper>
  );
}

