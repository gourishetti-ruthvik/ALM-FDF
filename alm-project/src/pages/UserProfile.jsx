function UserProfile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-cyan-600 via-teal-400 to-indigo-600"
    style={{
        backgroundSize: '200% 200%',
        animation: 'gradientAnimation 6s ease infinite',
      }}>
        <style>
        {`
          @keyframes gradientAnimation {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 class="text-center font-bold text-4xl mb-3"> Welcome!</h1>
        <h2 className="text-2xl font-semibold mb-6">User Profile:</h2>
        <p className="text-gray-700 mb-4">
          <strong>Name:</strong> {user.name}
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Email:</strong> {user.email}
        </p>
      </div>
    </div>
  );
}

export default UserProfile;
