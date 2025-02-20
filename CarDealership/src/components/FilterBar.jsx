export default function FilterBar({ filter, setFilter }) {
  return (
    <input
      type="text"
      value={filter}
      placeholder="Filer by brand or model"
      onChange={(e) => setFilter(e.target.value)}
    />
  );
}
