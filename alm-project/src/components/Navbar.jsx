import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    alert("Logged out successfully!");
    navigate("/login");
  };

  return (
    <nav className="fixed w-screen bg-black p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a
          onClick={() => navigate("/")}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <h1 className="text-white text-2xl font-bold">MyApp</h1>
        </a>

        <div className="space-x-4">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="text-white bg-red-500 hover:bg-red-700 px-4 py-2 rounded"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-2 rounded-full border border-gray-300 text-sm font-medium hover:bg-gray-500 text-white"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 rounded-full bg-blue-500 text-white text-sm font-medium hover:bg-blue-600"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
