/**
 * Component to display a list of users.
 * @param {Object} props - Component props.
 * @param {function} props.deleteUser - A function to delete a user.
 * @param {Array} props.backendUsers - An array of user objects from the backend.
 * @returns {JSX.Element} The UserList component.
 */

const UserList = ({ deleteUser, backendUsers }) => {
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {backendUsers.map((user) => (
          <li key={user._id}>
            {user.username} - {user.email}
            <button onClick={() => deleteUser(user._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
