import React, { useState } from "react";

const ContactList = (contacts) => {
  const [filterText, setFilterText] = useState();
  const filteredData = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowercase().includes(filterText.toLowerCase())
    );
  });
  return (
    <div>
      <h2>Contact List</h2>
      <input type="text" placeholder="search" onChange={(e) => setFilterText(e.target.value)} />
      <ul id="list">
        {filteredData.map((item , key) =>(
            <li key={key}>
                <span>{item.full_name}</span>
                <span>{item.phone_number}</span>
            </li>
        ))}
      </ul>
      <span id="totalCount">
        Toatal Contacts : ({filteredData.length})
      </span>
    </div>
  );
};

export default ContactList;
