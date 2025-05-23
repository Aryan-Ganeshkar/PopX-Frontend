import React, { useEffect, useState } from 'react';

export default function Dashboard() {
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser) setUser(savedUser);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-96 text-center">
       <div className='flex'>
         <div className="relative w-25 h-25 mx-auto mb-4">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg" // Example image
            alt="Profile"
            className="rounded-full w-25 h-25 object-cover"
          />
        </div>
        <div className='mt-10'>
            <h2 className="text-lg font-bold">{user.name}</h2>
        <p className="text-sm text-gray-600">{user.email}</p>
        </div>
       </div>
        <p className="mt-4 text-gray-500 text-sm leading-relaxed">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
    </div>
  );
}
