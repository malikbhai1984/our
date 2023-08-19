
"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const [dropdowns, setDropdowns] = useState({
    team: false,
    category: false,
    video: false,
    pdf: false,
    // Add more dropdowns here
    dropdown2: false,
    dropdown3: false,
    dropdown4: false,
    dropdown5: false,
    dropdown6: false,
    dropdown7: false,
    dropdown8: false,
    dropdown9: false,
    dropdown10: false,
  });

  const router = useRouter();

  const toggleDropdown = (dropdownName) => {
    setDropdowns((prevDropdowns) => ({
      ...prevDropdowns,
      [dropdownName]: !prevDropdowns[dropdownName],
    }));
  };

  const handleUpdateClick = (dropdownName) => {
    let updateLink = '';
    switch (dropdownName) {
      case 'team':
        updateLink = '/addadmin';
        break;
      case 'category':
        updateLink = '/adminlist';
        break;
      case 'video':
        updateLink = '/getservices';
        break;
      // Add more cases as needed
      default:
        break;
    }
    router.push(updateLink);
  };

  const handleDeleteClick = (dropdownName) => {
    let deleteLink = '';
    switch (dropdownName) {
      case 'team':
        deleteLink = '/delete-team';
        break;
      case 'category':
        deleteLink = '/servicespost';
        break;
      case 'video':
        deleteLink = '/delete-video';
        break;
      // Add more cases as needed
      default:
        break;
    }
    router.push(deleteLink);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-gray-700">Logo</p>
          <button className="text-blue-500" onClick={() => {

{
  localStorage.getItem('token') ?
      <button onClick={() => {
          localStorage.clear()
          navigate.push('/addadmin')
      }}>LOGOUT</button> :
      <button onClick={() => {
        navigate.push('/login')
      }}>LOGIN</button>
}



          }}>
            Logout
          </button>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white p-6">
          <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
          <ul>
            {/* Dropdowns */}
            {Object.keys(dropdowns).map((dropdownName) => (
              <li key={dropdownName} className="mb-2">
                <button
                  className="flex items-center text-blue-500"
                  onClick={() => toggleDropdown(dropdownName)}
                >
                  {dropdownName}
                </button>
                {dropdowns[dropdownName] && (
                  <ul className="ml-4">
                    <li>
                      <button
                        className="text-blue-500"
                        onClick={() => handleUpdateClick(dropdownName)}
                      >
                        Update {dropdownName}
                      </button>
                    </li>
                    <li>
                      <button
                        className="text-blue-500"
                        onClick={() => handleDeleteClick(dropdownName)}
                      >
                        Delete {dropdownName}
                      </button>
                    </li>
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Content Area</h2>
            {/* Placeholder Content */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

/*

//dashboard with navigation links
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const [dropdowns, setDropdowns] = useState({
    team: false,
    category: false,
    video: false,
    pdf: false,
    // Add more dropdowns here
    dropdown2: false,
    dropdown3: false,
    dropdown4: false,
    dropdown5: false,
    dropdown6: false,
    dropdown7: false,
    dropdown8: false,
    dropdown9: false,
    dropdown10: false,
  });

  const router = useRouter();

  const toggleDropdown = (dropdownName) => {
    setDropdowns((prevDropdowns) => ({
      ...prevDropdowns,
      [dropdownName]: !prevDropdowns[dropdownName],
    }));
  };

  const handleUpdateClick = (dropdownName) => {
    let updateLink = '';
    switch (dropdownName) {
      case 'team':
        updateLink = '/addadmin';
        break;
      case 'category':
        updateLink = '/adminlist';
        break;
      case 'video':
        updateLink = '/getservices';
        break;
      // Add more cases as needed
      default:
        break;
    }
    router.push(updateLink);
  };

  const handleDeleteClick = (dropdownName) => {
    let deleteLink = '';
    switch (dropdownName) {
      case 'team':
        deleteLink = '/delete-team';
        break;
      case 'category':
        deleteLink = '/servicespost';
        break;
      case 'video':
        deleteLink = '/delete-video';
        break;
      // Add more cases as needed
      default:
        break;
    }
    router.push(deleteLink);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar *}
      <nav className="bg-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-gray-700">Logo</p>
          <button className="text-blue-500" onClick={() => {}}>
            Logout
          </button>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar *}
        <aside className="w-64 bg-white p-6">
          <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
          <ul>
            {/* Dropdowns *}
            {Object.keys(dropdowns).map((dropdownName) => (
              <li key={dropdownName} className="mb-2">
                <button
                  className="flex items-center text-blue-500"
                  onClick={() => toggleDropdown(dropdownName)}
                >
                  {dropdownName}
                </button>
                {dropdowns[dropdownName] && (
                  <ul className="ml-4">
                    <li>
                      <button
                        className="text-blue-500"
                        onClick={() => handleUpdateClick(dropdownName)}
                      >
                        Update {dropdownName}
                      </button>
                    </li>
                    <li>
                      <button
                        className="text-blue-500"
                        onClick={() => handleDeleteClick(dropdownName)}
                      >
                        Delete {dropdownName}
                      </button>
                    </li>
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content *}
        <main className="flex-1 p-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Content Area</h2>
            {/* Placeholder Content *}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;




*/