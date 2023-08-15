import React, { useState, useEffect } from "react";
import AddUserForm from "./Components/AddUserForm";
import UserList from "./Components/UserList";
import axios from "axios";
import "./App.css";

/**
 * Main application component.
 * @returns {JSX.Element} The main App component.
 */

const App = () => {
  const [backendUsers, setBackendUsers] = useState([]);

  const addUser = (user) => {
    setBackendUsers([...backendUsers, user]);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        //Step-1 Call get Api to fetch all users
        const response = await axios.get(
          "http://localhost:5000/user/getAllUsers"
        );
        //Step-2 Store Fetched Data
        setBackendUsers(response.data.result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, [backendUsers]);

  const deleteUser = async (id) => {
    try {
      //Step-1 Call delete Api to delete a user using id
      const response = await axios.delete(
        `http://localhost:5000/user/deleteUser/${id}`
      );
      console.log(response.data.message);
      //Step-2 Filter out existing state data using id
      const updatedUsers = backendUsers.filter((user) => user._id !== id);
      setBackendUsers(updatedUsers);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <AddUserForm addUser={addUser} />
      <UserList backendUsers={backendUsers} deleteUser={deleteUser} />
    </div>
  );
};

export default App;
