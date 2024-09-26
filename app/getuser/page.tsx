"use client";

import React, { useState } from "react";
import axios from "axios";

interface Admin {
  a_id: number;
  a_name: string;
  a_address: string;
  a_gender: string;
  a_dob: string;
  a_phoneNumber: string;
}

const GetAdminById = () => {
  const [adminId, setAdminId] = useState<number | string>("");
  const [admin, setAdmin] = useState<Admin | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdminId(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.get(`http://localhost:3000/admin/getById/${adminId}`);
      setAdmin(response.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch admin details. Please check the ID.");
      setLoading(false);
      setAdmin(null);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-black mb-6">Get Admin by ID</h1>
      
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="number"
          name="adminId"
          value={adminId}
          onChange={handleChange}
          className="border p-2 rounded-md text-black mr-2"
          placeholder="Enter Admin ID"
          required
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Fetch Admin
        </button>
      </form>

      {loading && <p className="text-black">Loading...</p>}

      {error && <p className="text-red-500">{error}</p>}

      {admin && (
        <div className="bg-white shadow-md rounded-lg p-4 mt-4 w-80">
          <h2 className="text-xl font-bold text-black mb-2">Admin Details</h2>
          <p className="text-black"><strong>ID:</strong> {admin.a_id}</p>
          <p className="text-black"><strong>Name:</strong> {admin.a_name}</p>
          <p className="text-black"><strong>Address:</strong> {admin.a_address}</p>
          <p className="text-black"><strong>Gender:</strong> {admin.a_gender}</p>
          <p className="text-black"><strong>Date of Birth:</strong> {new Date(admin.a_dob).toLocaleDateString()}</p>
          <p className="text-black"><strong>Phone Number:</strong> {admin.a_phoneNumber}</p>
        </div>
      )}
    </div>
  );
};

export default GetAdminById;
