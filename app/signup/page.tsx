"use client"; 

import React, { useState, useEffect } from 'react';

interface FormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  dob: string;
  gender: string;
}

const RegistrationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dob: '',
    gender: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({}); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors: any = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    } else if (!/^[a-zA-Z ]+$/.test(formData.fullName)) {
      newErrors.fullName = 'Full Name must contain only alphabets.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required.';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters.';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm Password is required.';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    if (!formData.dob) {
      newErrors.dob = 'Date of Birth is required.';
    }

    if (!formData.gender) {
      newErrors.gender = 'Please select a gender.';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert('Registration successful!');
      console.log(formData);
    }
  };

  // This useEffect ensures the component only renders on the client side
  useEffect(() => {
    // This effect can be used to do anything that should only happen on the client
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100"> 
      <form onSubmit={handleSubmit} className="max-w-lg w-full p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold text-black mb-4 text-center">Register</h2> 
        
        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-sm font-bold text-black mb-2">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className={`w-full p-2 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
          />
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-bold text-black mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm font-bold text-black mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={`w-full p-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-lg text-black`}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label className="block text-sm font-bold text-black mb-2">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`w-full p-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-lg text-black`}
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
        </div>

        {/* Date of Birth */}
        <div className="mb-4">
            <label className="block text-sm font-bold text-black mb-2">Date of Birth</label>
            <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className={`w-full p-2 border ${errors.dob ? 'border-red-500' : 'border-gray-300'} rounded-lg text-black`}
            />
            {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}
        </div>

        {/* Gender */}
        <div className="mb-4">
            <label className="block text-sm font-bold text-black mb-2">Gender</label>
            <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={`w-full p-2 border ${errors.gender ? 'border-red-500' : 'border-gray-300'} rounded-lg text-black`} 
            >
                <option value="">Select Gender</option> 
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
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
