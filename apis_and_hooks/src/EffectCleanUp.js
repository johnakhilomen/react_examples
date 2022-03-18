import React, { useEffect, useState } from "react";

function ProfileEdit({ userID }) {

    const [user, setUser] = useState({});

    const [userId, setUserID] = useState(1);

    const userIds = [1, 2, 3, 4];

    useEffect(() => {
        setUser({});
        const abortController = new AbortController(); // Create a new `AbortController`
      
        async function loadUser() {
          try {
            const response = await fetch(
              `https://jsonplaceholder.typicode.com/users/${userId}`,
              { signal: abortController.signal } // Pass the `AbortController` signal to `fetch()`
            );
            const userFromAPI = await response.json();
            setUser(userFromAPI);
          } catch (error) {
            if (error.name === "AbortError") {
              // Ignore `AbortError`
              console.log("Aborted", userID);
            } else {
              throw error;
            }
          }
        }
      
        loadUser();
      
        return () => {
          console.log("cleanup", userID);
          abortController.abort(); // Cancels any pending request or response
        };
      }, [userId]);

  return (
    <div className="App">
    {userIds.map((id) => (
      <button key={id} onClick={() => setUserID(id)}>
        User ID {id}
      </button>
    ))}
    <h2>User ID {userId}</h2>
  </div>
  );

}

export default ProfileEdit;