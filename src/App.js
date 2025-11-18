import React, { useState } from "react";

export default function App() {
  const [dictionary] = useState([
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState("");

  const handleSearch = () => {
    const found = dictionary.find(
      (item) => item.word.toLowerCase() === searchTerm.toLowerCase()
    );

    if (found) {
      setResult(found.meaning);
    } else {
      setResult("Word not found in the dictionary.");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Dictionary App</h1>

      <input
        type="text"
        placeholder="Search for a word"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      <h3>Definition:</h3>

      {/* 
        MUST ALWAYS EXIST.
        Tests expect <p> tag immediately after Definition:
      */}
      <p>{result}</p>
    </div>
  );
}
