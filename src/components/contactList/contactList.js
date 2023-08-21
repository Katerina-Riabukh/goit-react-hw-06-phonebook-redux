import React from "react";
import { ContactItem } from "./contactItem";
import { UL } from "./contactList.styled";
import { useSelector } from "react-redux";
import { selectContacts } from "redux/selectors";



export const ContactList = () => {
    const contacts = useSelector(selectContacts)

    return <UL >
        {contacts.map((i) => {
            return <ContactItem item={i} key={i.id} />
        })}
    </UL>


}




