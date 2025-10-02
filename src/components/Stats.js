export default function Stats({ items }) {
  if (!items.length)
    return <p className="stats">Start add some items to your packed list ➕</p>;

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You are ready to go ✈️"
          : `👜 You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
      </em>
      <br />
      <small>
        {numItems === 0
          ? "Tip: Add items to start your packing list."
          : percentage === 0
          ? "Tip: Start packing by checking off items as you go!"
          : percentage < 100
          ? "Keep going! You're making progress."
          : "All items packed. Double-check if you missed anything!"}
      </small>
    </footer>
  );
}
