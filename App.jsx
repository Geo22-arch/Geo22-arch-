import React, { useState } from "react";

const App = () => {
  const [items, setItems] = useState(["First Item"]);
  const [input, setInput] = useState("");

  const addItem = () => {
    if (input.trim() !== "") {
      setItems([...items, input.trim()]);
      setInput("");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Dynamic List Manager</h2>
      <div style={styles.inputRow}>
        <input
          type="text"
          placeholder="Enter an item"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
        />
        <button onClick={addItem} style={styles.button}>
          Add Item
        </button>
      </div>
      <div style={styles.listBox}>
        <ul style={styles.ul}>
          {items.map((item, index) => (
            <li key={index} style={styles.li}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "360px",
    margin: "50px auto",
    padding: "20px",
    background: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    color: "#059669",
    marginBottom: "15px",
  },
  inputRow: {
    display: "flex",
  },
  input: {
    flex: 1,
    padding: "8px",
    border: "2px solid #059669",
    borderRight: "none",
    borderRadius: "4px 0 0 4px",
    outline: "none",
  },
  button: {
    padding: "8px 12px",
    backgroundColor: "#059669",
    color: "#fff",
    border: "none",
    borderRadius: "0 4px 4px 0",
    cursor: "pointer",
  },
  listBox: {
    backgroundColor: "#e6fffa",
    border: "1px solid #a7f3d0",
    padding: "15px",
    borderRadius: "6px",
    marginTop: "15px",
  },
  ul: {
    margin: 0,
    paddingLeft: "20px",
  },
  li: {
    color: "#111827",
  },
};

export default App;
