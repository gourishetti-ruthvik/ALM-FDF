function UserProfile() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">User Profile</h2>
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