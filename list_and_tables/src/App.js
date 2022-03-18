import React from "react";
import List from "./List";

const todos = [
  { completed: false, description: "Finish the Lists & Tables checkpoint" },
  { completed: false, description: "Clean my desk" },
  { completed: false, description: "Make lunch" },
];

const groceryItems = { fruits : ["Bananas", "Apples", "Oranges"] }; 

function App() {
  const rows = todos.map(({ completed, description }, index) => (
    <tr key={index}>
      <td>{description}</td>
      <td>{completed ? "Yes" : "No"}</td>
    </tr>
  ));

  return (
    <div>
      <h2> TABLE </h2>
      <table>
      <thead>
        <tr>
          <th>Description</th>
          <th>Completed?</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>

    <hr />

    <h2> LIST </h2>

    <List groceryItems={groceryItems} />

    </div>
    
  );
}

export default App;