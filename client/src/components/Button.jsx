export default function Button({ text, type }) {
  return (
    <button
      type={type}
      className="w-full rounded-md bg-blue-600 text-white text-lg py-2 hover:bg-blue-700 transition duration-300"
    >
      {text}
    </button>
  );
}
