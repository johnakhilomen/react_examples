import React, { useEffect, useState } from "react";
import "./App.css";

import AlbumList from "./AlbumList";
import UserList from "./UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const originalTitle = document.title;
  useEffect(() => {
    document.title = "Awesome Album App";
    setUsers([]);
    const abortController = new AbortController();
    async function loadUsers() {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users`,
          { signal: abortController.signal }
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    }
    loadUsers();
    return () => abortController.abort();
  }, []);

  return (
    <>
    <h1>A Simple Album App</h1>
    <div className="App">
      <div className="left column">
        <UserList users={users} setCurrentUser={setCurrentUser} />
      </div>
      <div className="right column">
        <AlbumList user={currentUser} originalTitle={originalTitle} />
      </div>
    </div>
    </>
  );
}

export default App;