import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = 'Full Name is required';
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(form.phone)) newErrors.phone = 'Phone must be 10 digits';

    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) newErrors.email = 'Invalid email format';

    if (!form.password.trim()) newErrors.password = 'Password is required';
    else if (form.password.length < 6) newErrors.password = 'Password must be at least 6 characters';

    if (!form.company.trim()) newErrors.company = 'Company name is required';

    if (!form.isAgency) newErrors.isAgency = 'Please select if you are an agency';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await axios.post('https://popx-backend-nlt3.onrender.com/api/register', {
        ...form,
        isAgency: form.isAgency === 'yes',
      });
      alert('User registered successfully');
      setForm({
        name: '',
        phone: '',
        email: '',
        password: '',
        company: '',
        isAgency: '',
      });
      setErrors({});
    } catch (error) {
      alert('Registration failed');
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Create your PopX account</h2>

        {['name', 'phone', 'email', 'password', 'company'].map((field, i) => (
          <div key={i} className="mb-4">
            <label className="block text-sm font-medium text-purple-600 mb-1 capitalize">
              {field === 'name' ? 'Full Name' : field === 'company' ? 'Company name' : field}
              <span className="text-red-500">*</span>
            </label>
            <input
              type={field === 'password' ? 'password' : field === 'email' ? 'email' : 'text'}
              name={field}
              value={form[field]}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
          </div>
        ))}

        <div className="mb-4">
          <p className="text-sm font-medium text-purple-600 mb-2">
            Are you an Agency?<span className="text-red-500">*</span>
          </p>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="isAgency"
                value="yes"
                checked={form.isAgency === 'yes'}
                onChange={handleChange}
                className="mr-2 accent-purple-600"
              />
              Yes
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="isAgency"
                value="no"
                checked={form.isAgency === 'no'}
                onChange={handleChange}
                className="mr-2 accent-purple-600"
              />
              No
            </label>
          </div>
          {errors.isAgency && <p className="text-red-500 text-sm">{errors.isAgency}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700 transition-colors"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Register;
