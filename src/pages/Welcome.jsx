import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center bg-white p-8 rounded-lg shadow w-96">
        <h1 className="text-2xl font-bold mb-2">Welcome to PopX</h1>
        <p className="text-gray-500 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <button
          onClick={() => navigate('/register')}
          className="w-full bg-purple-600 text-white font-semibold py-2 rounded mb-3 hover:bg-purple-700"
        >
          Create Account
        </button>
        <button
          onClick={() => navigate('/login')}
          className="w-full bg-purple-200 text-black font-semibold py-2 rounded"
        >
          Already Registered? Login
        </button>
      </div>
    </div>
  );
}
