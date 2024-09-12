export default function Button({ text, type, color = "bg-blue-600", onClick = null }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full ${color} text-white text-lg py-2 hover:bg-blue-700 transition duration-300`}
    >
      <p className="font-semibold">{text}</p>
    </button>
  );
}
