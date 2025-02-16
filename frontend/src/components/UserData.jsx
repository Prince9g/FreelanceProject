import React, { useState, useEffect } from 'react';
import User from './User';
import axios from 'axios';

const UserData = () => {
  const [users, setUsers] = useState([]); // Store original fetched users
  const [sortedUsers, setSortedUsers] = useState([]); // Store sorted users
  const [sortOption, setSortOption] = useState("");

  // Fetch data once when component mounts
  useEffect(() => {
    axios.get("http://localhost:8080/admin/getuser")
      .then((res) => {
        setUsers(res.data); // Store original data
        setSortedUsers(res.data); // Also set sorted data initially
      })
      .catch((error) => console.log(error));
  }, []); // Run only once

  // Sort users whenever sortOption changes
  useEffect(() => {
    let sorted = [...users]; // Copy users array

    if (sortOption === "name") {
      sorted.sort((a, b) => a.fullname.localeCompare(b.fullname));
    } else if (sortOption === "old") {
      sorted.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)); // Oldest first
    } else if (sortOption === "new") {
      sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // Newest first
    } else if (sortOption === "country") {
      sorted.sort((a, b) => a.country.localeCompare(b.country));
    }

    setSortedUsers(sorted); // Update displayed users
  }, [sortOption, users]); // Re-run sorting when sortOption or users change

  return (
    <div>
      <div className="flex justify-end items-center gap-2 mr-4">
        <span className="font-semibold">Sort Users: </span>
        <select
          className="border border-gray-300 rounded-md p-2"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="name">Sort by Names</option>
          <option value="new">Sort by New Entries</option> {/* Sort latest entries first */}
          <option value="old">Sort by Old Entries</option> {/* Sort oldest entries first */}
          <option value="country">Sort by Country</option>
        </select>
      </div>
      {/* Pass sorted data to User component */}
      <div>
        <User data={sortedUsers} />
      </div>
    </div>
  );
};

export default UserData;
