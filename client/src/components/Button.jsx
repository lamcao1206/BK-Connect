export default function Button({ text, type }) {
  return (
    <button
      type={type}
      className="w-full bg-blue-600 text-white text-lg py-2 hover:bg-blue-700 transition duration-300"
    >
      {text}
    </button>
  );
}
