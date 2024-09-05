import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-white p-3 fixed top-0 left-0 w-full z-10 shadow-lg h-16">
      <div className="container mx-auto flex justify-between items-center h-full">
        <Link to="/" className="text-blue-500 text-2xl font-bold flex items-center">
          <img src="/bku-logo.png" alt="Logo" className="h-14" />
          BK Connect
        </Link>
        {/* <form onSubmit={handleSearchSubmit} className="relative mr-4">
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
        </form> */}
        <div className="flex items-center">
          <NavLink to="/login" className={({ isActive }) => (isActive ? "link-style active-link" : "link-style")}>
            Login
          </NavLink>
          <NavLink to="/sign-up" className={({ isActive }) => (isActive ? "link-style active-link" : "link-style")}>
            Sign Up
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
