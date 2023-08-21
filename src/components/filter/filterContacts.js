import React from "react";
import { Filter, FilterContact } from "./filterContacts.styled";


export const FilterContacts = ({ filterContactsByName }) => {


    return (<FilterContact> Find contact by name
        <Filter type="text"
            onChange={(event) => filterContactsByName(event.currentTarget.value)}></Filter>
    </FilterContact>
    );



};



