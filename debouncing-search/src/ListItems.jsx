const ListItems = ({ users }) => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.firstName}</li>
      ))}
    </ul>
  );
};

export default ListItems;
