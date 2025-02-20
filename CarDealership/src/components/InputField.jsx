export default function InputField({
  type,
  name,
  value,
  onChange,
  placeholder,
}) {
  return (
    <input
      className="form-input"
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
