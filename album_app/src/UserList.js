import React from "react";
import User from "./User";

function UserList({ users, setCurrentUser }) {
  return (
    <ul className="user-list">
      {users.map((user) => (
          <User key={user.id} setCurrentUser={setCurrentUser} user={user} />
      ))}
    </ul>
  );
}

export default UserList;