export default function FilterBar({ filter, setFilter }) {
  return (
    <input
      className="filter-bar"
      type="text"
      value={filter}
      placeholder="Search Bar"
      onChange={(e) => setFilter(e.target.value)}
    />
  );
}
