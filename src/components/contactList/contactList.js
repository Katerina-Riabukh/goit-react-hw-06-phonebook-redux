import React from "react";
import { ContactItem } from "./contactItem";
import { UL } from "./contactList.styled";
import { useSelector } from "react-redux";
import { selectContacts, selectfilter } from "redux/selectors";



export const ContactList = () => {
    const contacts = useSelector(selectContacts)
    const filterValue = useSelector(selectfilter)


    const filteredContactsList = contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(filterValue.toLowerCase())
    });


    return <UL >
        {filteredContactsList.map((i) => {
            return <ContactItem item={i} key={i.id} />
        })}
    </UL>


}





