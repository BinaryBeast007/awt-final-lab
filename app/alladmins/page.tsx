"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

interface Admin {
  a_id: number;
  a_name: string;
  a_address: string;
  a_gender: string;
  a_dob: string;
  a_phoneNumber: string;
}

const AdminsPage = () => {
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await axios.get("http://localhost:3000/admin/alladmins");
        setAdmins(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching admins:", err);
        setError("Failed to load admin data.");
        setLoading(false);
      }
    };

    fetchAdmins();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-black mb-6">Admin List</h1>
      <table className="min-w-full bg-white shadow-md rounded-lg text-black">
        <thead>
          <tr>
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Address</th>
            <th className="px-4 py-2 border">Gender</th>
            <th className="px-4 py-2 border">Date of Birth</th>
            <th className="px-4 py-2 border">Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((admin) => (
            <tr key={admin.a_id}>
              <td className="px-4 py-2 border">{admin.a_id}</td>
              <td className="px-4 py-2 border">{admin.a_name}</td>
              <td className="px-4 py-2 border">{admin.a_address}</td>
              <td className="px-4 py-2 border">{admin.a_gender}</td>
              <td className="px-4 py-2 border">{new Date(admin.a_dob).toLocaleDateString()}</td>
              <td className="px-4 py-2 border">{admin.a_phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminsPage;
