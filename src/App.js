import List from "./List";
import data from "./data";
import { useState } from "react";

function App() {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    setPeople((oldValue) => oldValue.filter((value) => value.id !== id));
  };

  const removeAll = () => {
    setPeople([]);
  };

  const reload = () => {
    setPeople(data);
  };

  return (
    <section className="container">
      <h2 style={{ color: "var(--bg-blue)" }}>Prossimi incontri</h2>
      <div className="people-list">
        <List data={people} removeItem={removeItem} />
      </div>
      <div className="btn-group">
        <button className="btn btn-reset" onClick={reload}>
          Reload
        </button>
        <button className="btn btn-delete" onClick={removeAll}>
          Delete all
        </button>
      </div>
    </section>
  );
}

export default App;
