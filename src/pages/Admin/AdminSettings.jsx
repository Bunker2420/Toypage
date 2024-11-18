import React from 'react';

const AdminSettings = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-gradient-to-br from-indigo-200 via-purple-300 to-pink-200 p-6">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full sm:w-3/4 md:w-1/2 lg:w-1/3 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
        <h1 className="text-2xl font-semibold text-center text-purple-600 mb-6">Admin Settings</h1>
        
        <div className="flex flex-col space-y-4">
          <button className="p-4 text-lg font-medium text-white bg-blue-500 rounded-md shadow-md hover:bg-blue-600 hover:scale-105 transition-all duration-300">
            Update Profile
          </button>
          
          <button className="p-4 text-lg font-medium text-white bg-green-500 rounded-md shadow-md hover:bg-green-600 hover:scale-105 transition-all duration-300">
            Change Password
          </button>
          
          <button className="p-4 text-lg font-medium text-white bg-red-500 rounded-md shadow-md hover:bg-red-600 hover:scale-105 transition-all duration-300">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminSettings;
