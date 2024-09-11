import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="bg-teal-100 h-screen flex items-center justify-center">
      <div className="container bg-white w-[450px] shadow-2xl px-[30px] py-[25px] text-center">
        <h1 className="text-6xl font-bold mb-4 text-blue-600">404</h1>
        <p className="text-xl mb-4">Page Not Found</p>
        <Link to="/login" className="text-blue-600 hover:underline">
          Go to Home
        </Link>
      </div>
    </div>
  );
}
