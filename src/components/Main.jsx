import React, { useState } from "react";
import dummyContacts from "../dummyData";

const Main = () => {
  const [contacts, setContacts] = useState(dummyContacts);
  {
    contacts.map((contact) => {
      return contact.name;
    });
  }
  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>
      <div id="container">
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
            </tr>

            {contacts.map((contact, index) => {
              return (
                <tr key={index}>
                  <td>{contact.name}</td>
                  <td>{contact.phone}</td>
                  <td>{contact.email}</td>
                </tr>
              );
            })}

            {/* Contact 2 */}
            {/* <tr>
              <td>Person Two</td>
              <td>111-111-1111</td>
              <td>two@email.com</td>
            </tr>  */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Main;
