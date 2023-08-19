

"use client"


import axios from 'axios';
import { useEffect, useState } from 'react';

const ListAdmins = () => {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('type') !== 'ADMIN') {
      // Navigate logic here
    }
  }, []);

  useEffect(() => {
    axios
      .get('http://localhost:5000/admin/admins')
      .then((res) => {
        setAdmins(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-semibold mb-4">List of Admins</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-collapse border">
          <thead className="bg-gray-50 border">
            <tr className="border">
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider border">ID</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider border">Name</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider border">Password</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider border">Admin/SubAdmin</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider border">Status</th>
              <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider border">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 border">
            {admins.map((adminItem, adminIndex) => (
              <tr
                key={adminItem._id}
                className={adminIndex % 2 === 0 ? 'bg-white border-t border-b' : 'bg-gray-50 border-t border-b'}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 border">{adminIndex + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border">{adminItem.userName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border">{adminItem.password}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border">{adminItem.type}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border">{adminItem.status}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 border">{adminItem.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListAdmins;

