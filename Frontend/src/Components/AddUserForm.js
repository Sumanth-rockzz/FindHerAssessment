import React, { useState } from "react";
import axios from "axios";

/**
 * Component for adding a user through a form.
 * @param {Object} props - Component props.
 * @param {function} props.addUser - Function to add a user to the list.
 * @returns {JSX.Element} The AddUserForm component.
 */

const AddUserForm = ({ addUser }) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  //Step -1 : On Submit call  post api to add user
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !email) return;

    try {
      const response = await axios.post("http://localhost:5000/user/signup", {
        username,
        email,
      });

      console.log(response.data.result);
      //Step -2 : Store the result in state
      addUser(response.data.result);

      //Step -3 : Clear the form fields
      setUsername("");
      setEmail("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div>Add User Form</div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUserForm;
