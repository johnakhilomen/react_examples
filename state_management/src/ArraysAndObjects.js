import React, { useState } from 'react'

export default function ArraysAndObjects() {
    const [results, setResults] = useState([]);
    const [counts, setCounts] = useState({ H: 0, T: 0 });

    const handleClick = (value) => {
        setResults([...results, value]);
        setCounts({
            ...counts,
            [value]: counts[value] + 1,
          });
    };

    const deleteToss = (indexToDelete) => {
        setResults((currentResults) =>
          currentResults.filter((ignored, index) => index !== indexToDelete)
        );
    };

    const handleDeleteLast = () => {
        const last = results[results.length - 1];
        const list = results.slice(0, -1);
      
        setResults(list);
        if (last) {
          setCounts({
            ...counts,
            [last]: counts[last] - 1,
          });
        }
      };
      

    const lis = results.map((result, index) => (
        <li key={`toss-${index}`}>{result === "H" ? "Heads" : "Tails"}</li>
    ));

  return (
    <section>
      <div>
        <button onClick={() => handleClick("H")}>Heads {counts["H"]}</button>
        <button onClick={() => handleClick("T")}>Tails {counts["T"]}</button>
        <button onClick={() => handleDeleteLast()}>Delete Last</button>
      </div>
      <ul>{lis}</ul>
    </section>
  )
}
