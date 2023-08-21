import React from "react";
import { Button, LI, Name } from "./contactItems.styled";
import { useDispatch } from "react-redux";
import { delateContact } from "redux/contactsSlice";



export const ContactItem = ({ item }) => {

        const { name, number, id } = item
        const dispatch = useDispatch()


        return <LI >
                <Name>{name}</Name>
                <span>{number}</span>
                <Button onClick={() => dispatch(delateContact(id))}>Delate contact</Button>
        </LI>
};




