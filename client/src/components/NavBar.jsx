import { Link } from "react-router-dom";
import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome CSS

export default function NavBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement search logic here, e.g., redirect to a search results page
    console.log("Searching for:", searchQuery);
  };

  return (
    <nav className="bg-white p-3 fixed top-0 left-0 w-full z-10 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-blue-500 text-2xl font-bold">
          BK Connect
        </Link>
        <form onSubmit={handleSearchSubmit} className="relative mr-4">
          <input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            placeholder="Search users..."
            className="p-2 pl-10 w-full outline-none hover:bg-sky-50 focus:bg-sky-50 focus:shadow-sm"
          />
          <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-blue-500">
            <i className="fas fa-search"></i>
          </span>
        </form>
        <div className="flex items-center">
          <Link
            to="/sign-up"
            className="text-blue-500 rounded-xl font-bold mr-4 p-2 hover:text-white hover:bg-blue-500"
          >
            Sign Up
          </Link>
          <Link to="/login" className="text-blue-500">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
