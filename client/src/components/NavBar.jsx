import { jwtDecode } from "jwt-decode";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

function NavBarMain() {
  return (
    <nav className="bg-white p-3 top-0 left-0 w-full z-10 shadow-lg h-16 fixed">
      <div className="container mx-auto flex justify-between items-center h-full">
        <Link to="/" className="text-blue-500 text-2xl font-semibold flex items-center">
          <img src="/bku-logo.png" alt="Logo" className="h-14" />
          BK Connect
        </Link>
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

function NavBarChat() {
  const token = localStorage.getItem("user");

  if (token) {
    const decodedToken = jwtDecode(token);
    console.log(decodedToken);
  }
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="bg-white p-3 top-0 left-0 w-full z-10 shadow-lg h-16 fixed">
      <div className="container mx-auto flex justify-between items-center h-full">
        <Link to="/chat" className="text-blue-500 text-2xl font-bold flex items-center">
          <img src="/bku-logo.png" alt="Logo" className="h-14" />
          BK Connect
        </Link>
        {/* <form onSubmit={handleSearchSubmit} className="relative">
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
        </form> */}
        <div className="flex items-center">
          <img src="http://localhost:3000/api/v1/img/user1" alt="User Avatar" className="w-10 h-10 rounded-full mr-4" />
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

export default function NavBar() {
  const location = useLocation();
  const isAuthPage = !(location.pathname === "/login" || location.pathname === "/sign-up" || location.pathname === "/");

  return isAuthPage ? <NavBarChat /> : <NavBarMain />;
}
