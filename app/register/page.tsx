"use client";

import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

interface FormData {
  u_name: string;
  u_email: string;
  u_password: string;
  u_role: string;
  status: string;
  a_name: string;
  a_address: string;
  a_gender: string;
  a_dob: string;
  a_phone_number: string;
}

const RegistrationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    u_name: '',
    u_email: '',
    u_password: '',
    u_role: 'admin', 
    status: 'approved', 
    a_name: '',
    a_address: '',
    a_gender: '',
    a_dob: '',
    a_phone_number: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors: any = {};

    if (!formData.u_name.trim()) {
      newErrors.u_name = 'Username is required.';
    }

    if (!formData.u_email.trim()) {
      newErrors.u_email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.u_email)) {
      newErrors.u_email = 'Please enter a valid email address.';
    }

    if (!formData.u_password) {
      newErrors.u_password = 'Password is required.';
    } else if (formData.u_password.length < 8) {
      newErrors.u_password = 'Password must be at least 8 characters.';
    }

    if (!formData.a_name.trim()) {
      newErrors.a_name = 'Name is required.';
    }

    if (!formData.a_address.trim()) {
      newErrors.a_address = 'Address is required.';
    }

    if (!formData.a_gender) {
      newErrors.a_gender = 'Please select a gender.';
    }

    if (!formData.a_dob) {
      newErrors.a_dob = 'Date of Birth is required.';
    }

    if (!formData.a_phone_number.trim()) {
      newErrors.a_phone_number = 'Phone number is required.';
    } 
    // else if (!/^\d{10}$/.test(formData.a_phone_number)) {
    //   newErrors.a_phone_number = 'Please enter a valid phone number.';
    // }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post('http://localhost:3000/admin/register', formData);
        alert('Registration successful!');
        console.log('Server response:', response.data);
      } catch (error) {
        console.error('Error registering admin:', error);
        alert('Registration failed.');
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100"> 
      <form onSubmit={handleSubmit} className="max-w-lg w-full p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-black mb-4 text-center">Register User</h2> 

        {/* Username */}
        <div className="mb-4">
          <label className="block text-sm font-bold text-black mb-2">Username</label>
          <input
            type="text"
            name="u_name"
            value={formData.u_name}
            onChange={handleChange}
            className={`w-full p-2 border ${errors.u_name ? 'border-red-500' : 'border-gray-300'} rounded-lg text-black`}
          />
          {errors.u_name && <p className="text-red-500 text-sm">{errors.u_name}</p>}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-bold text-black mb-2">Email</label>
          <input
            type="email"
            name="u_email"
            value={formData.u_email}
            onChange={handleChange}
            className={`w-full p-2 border ${errors.u_email ? 'border-red-500' : 'border-gray-300'} rounded-lg text-black`}
          />
          {errors.u_email && <p className="text-red-500 text-sm">{errors.u_email}</p>}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm font-bold text-black mb-2">Password</label>
          <input
            type="password"
            name="u_password"
            value={formData.u_password}
            onChange={handleChange}
            className={`w-full p-2 border ${errors.u_password ? 'border-red-500' : 'border-gray-300'} rounded-lg text-black`}
          />
          {errors.u_password && <p className="text-red-500 text-sm">{errors.u_password}</p>}
        </div>

        {/* Role */}
        {/* <div className="mb-4">
          <label className="block text-sm font-bold text-black mb-2">Role</label>
          <select
            name="u_role"
            value={formData.u_role}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-lg text-black"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div> */}

        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm font-bold text-black mb-2">Name</label>
          <input
            type="text"
            name="a_name"
            value={formData.a_name}
            onChange={handleChange}
            className={`w-full p-2 border ${errors.a_name ? 'border-red-500' : 'border-gray-300'} rounded-lg text-black`}
          />
          {errors.a_name && <p className="text-red-500 text-sm">{errors.a_name}</p>}
        </div>

        {/* Address */}
        <div className="mb-4">
          <label className="block text-sm font-bold text-black mb-2">Address</label>
          <input
            type="text"
            name="a_address"
            value={formData.a_address}
            onChange={handleChange}
            className={`w-full p-2 border ${errors.a_address ? 'border-red-500' : 'border-gray-300'} rounded-lg text-black`}
          />
          {errors.a_address && <p className="text-red-500 text-sm">{errors.a_address}</p>}
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label className="block text-sm font-bold text-black mb-2">Gender</label>
          <select
            name="a_gender"
            value={formData.a_gender}
            onChange={handleChange}
            className={`w-full p-2 border ${errors.a_gender ? 'border-red-500' : 'border-gray-300'} rounded-lg text-black`}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          {errors.a_gender && <p className="text-red-500 text-sm">{errors.a_gender}</p>}
        </div>

        {/* Date of Birth */}
        <div className="mb-4">
          <label className="block text-sm font-bold text-black mb-2">Date of Birth</label>
          <input
            type="date"
            name="a_dob"
            value={formData.a_dob}
            onChange={handleChange}
            className={`w-full p-2 border ${errors.a_dob ? 'border-red-500' : 'border-gray-300'} rounded-lg text-black`}
          />
          {errors.a_dob && <p className="text-red-500 text-sm">{errors.a_dob}</p>}
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label className="block text-sm font-bold text-black mb-2">Phone Number</label>
          <input
            type="text"
            name="a_phone_number"
            value={formData.a_phone_number}
            onChange={handleChange}
            className={`w-full p-2 border ${errors.a_phone_number ? 'border-red-500' : 'border-gray-300'} rounded-lg text-black`}
          />
          {errors.a_phone_number && <p className="text-red-500 text-sm">{errors.a_phone_number}</p>}
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
