"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

interface Admin {
  a_id: number;
  a_name: string;
  a_address: string;
  a_gender: string;
  a_dob: string;
  a_phone_number: string;
}

const UpdateAdminInfo = () => {
  const [adminId, setAdminId] = useState<number | string>("");
  const [admin, setAdmin] = useState<Admin | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdminId(e.target.value);
  };

  const fetchAdminDetails = async (id: number) => {
    try {
      const response = await axios.get(`http://localhost:3000/admin/getById/${id}`);
      setAdmin(response.data);
    } catch (err) {
      setError("Failed to fetch admin details. Please check the ID.");
    }
  };

  const handleFetch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (adminId) {
      await fetchAdminDetails(Number(adminId));
      setLoading(false);
    } else {
      setError("Please enter a valid ID.");
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (admin) {
      const { name, value } = e.target;
      setAdmin({
        ...admin,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (admin) {
      setLoading(true);
      setError("");

      try {
        const updatedAdminData = {
          a_name: admin.a_name,
          a_address: admin.a_address,
          a_gender: admin.a_gender,
          a_dob: admin.a_dob,
          a_phone_number: admin.a_phone_number
        };
        console.log(updatedAdminData);

        await axios.put(`http://localhost:3000/admin/update/${adminId}`, updatedAdminData);
        alert("Admin information updated successfully!");
      } catch (err) {
        setError("Failed to update admin information. Please check the details.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-black">Update Admin Information</h1> 

      <form onSubmit={handleFetch} className="mb-4">
        <input
          type="number"
          value={adminId}
          onChange={handleChangeId}
          className="border p-2 rounded-md text-black mr-2"
          placeholder="Enter Admin ID"
          required
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Fetch Admin
        </button>
      </form>

      {loading && <p>Loading...</p>}

      {error && <p className="text-black">{error}</p>} 

      {admin && (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="a_name">
              Name
            </label>
            <input
              type="text"
              name="a_name"
              value={admin.a_name}
              onChange={handleChange}
              className="border p-2 rounded-md w-full text-black"
              placeholder="Enter Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="a_address">
              Address
            </label>
            <input
              type="text"
              name="a_address"
              value={admin.a_address}
              onChange={handleChange}
              className="border p-2 rounded-md w-full text-black"
              placeholder="Enter Address"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="a_gender">
              Gender
            </label>
            <select
              name="a_gender"
              value={admin.a_gender}
              onChange={handleChange}
              className="border p-2 rounded-md w-full text-black"
              required
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="a_dob">
              Date of Birth
            </label>
            <input
              type="date"
              name="a_dob"
              value={admin.a_dob.split("T")[0]} 
              onChange={handleChange}
              className="border p-2 rounded-md w-full text-black"
              required
            />
          </div>
          {/* <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="a_phone_number">
              Phone Number
            </label>
            <input
              type="text"
              name="a_phone_number"
              value={admin.a_phone_number} 
              onChange={handleChange}
              className="border p-2 rounded-md w-full text-black"
              placeholder="Enter Phone Number"
              required
            />
          </div> */}
          <button type="submit" className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Update Admin
          </button>
        </form>
      )}
    </div>
  );
};

export default UpdateAdminInfo;
