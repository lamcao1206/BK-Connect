import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function NavBarChat() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="bg-white p-3 fixed top-0 left-0 w-full z-10 shadow-lg h-16">
      <div className="container mx-auto flex justify-between items-center h-full">
        <Link to="/" className="text-blue-500 text-2xl font-bold flex items-center">
          <img src="/bku-logo.png" alt="Logo" className="h-14" />
          BK Connect
        </Link>
        <form onSubmit={handleSearchSubmit} className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            placeholder="Search users..."
            className="p-2 pl-10 w-96 outline-none hover:bg-sky-200 focus:bg-sky-200 focus:shadow-sm"
          />
          <span className="absolute left-2 top-1/2 transform -translate-y-1/2 text-blue-500">
            <i className="fas fa-search"></i>
          </span>
        </form>
        <div className="flex items-center">
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? "link-style active-link" : "link-style")}
            onClick={handleLogout}
          >
            Logout
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
