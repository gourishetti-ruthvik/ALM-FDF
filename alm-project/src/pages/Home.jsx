import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-200">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">
          Welcome to MyApp
        </h1>
        <p className="text-gray-700 mb-6">
          This is the homepage of your application. Please login or register to
          continue.
        </p>
        <div className="space-x-4">
          <Link
            to="/login"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
