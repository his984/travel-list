import "./App.css";
import { useState } from "react";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];
function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <State />
    </div>
  );
}
export default App;
// Logo
function Logo() {
  return <h1> 🌴Far Away💼</h1>;
}
// Form
function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handelSubmit(e) {
    e.preventDefault();
    if (!description) return;
    // console.log(e.target.elements);
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handelSubmit}>
      <h3>What do you need to your 🤩 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (__, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item ..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
// PackingList
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item, index) => (
          <Item item={item} key={item.id}></Item>
        ))}
      </ul>
    </div>
  );
}
// State
function State() {
  return (
    <footer className="stats">
      <em>👜 You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}
// Item
function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
