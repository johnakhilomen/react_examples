import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

/*  <button onClick={() => navigate(-2)}>
        Go 2 pages back
      </button>
      <button onClick={() => navigate(-1)}>Go back</button>
      <button onClick={() => navigate(1)}>
        Go forward
      </button>
      <button onClick={() => navigate(2)}>
        Go 2 pages forward
      </button>
*/
function UserProfile() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  // Use `useParams()` and `useEffect()`
  // Load profile data from https://jsonplaceholder.typicode.com/users/${userId}
  const userId = useParams().userId;
  useEffect(() => {
    async function loadUser() {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const userFromAPI = await response.json();
      setUser(userFromAPI);
    }
    loadUser();
  }, [userId]);

  // No need to change anything below here
  if (user.id) {
    return Object.entries(user).map(([key, value]) => (
      <div key={key}>
        <label>{key}</label>: {JSON.stringify(value)}
        <hr />
        <button type="button" onClick={() => navigate(-1)}>
      Go Back
    </button>
      </div>
    ));
  }
  return "Loading...";
}

export default UserProfile;