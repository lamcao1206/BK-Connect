export default function InputField({ label, type, name, placeholder, onChange, required = false }) {
  return (
    <div className="flex flex-col mb-[15px] relative">
      <label className=" font-semibold text-md text-gray-700">{label}</label>
      <input
        className="w-full text-md rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}
