import React, { useState } from "react";
import "./styles.css";
import data from "./data";
import List from "./List";
export default function App() {
  const [people, setPeople] = useState(data);
  return (
    <div className="App">
      <section>
        <h1>{people.length} Birthday Today</h1>
        <List people={people} />
        <button onClick={() => setPeople([])}>Clear All List</button>
      </section>
    </div>
  );
}
