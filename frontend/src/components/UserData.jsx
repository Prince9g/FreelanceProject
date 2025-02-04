import React, { useState } from 'react'
import User from './User';
// {onSortChange}
const UserData = () => {
    const data = [
        { fullname: "John Doe", mobilenumber:"+917937723423",email:"john@mail.com", country: "USA" , entryDate: "2024-02-01"},
        { fullname: "Casie Dior", mobilenumber:"+917933423423",email:"cohn@mail.com", country: "UK" , entryDate: "2024-03-01"},
        { fullname: "Json Atle", mobilenumber:"+918937723423",email:"jsohn@mail.com", country: "UAE" , entryDate: "2024-02-05" }
      ];
        const [sortOption, setSortOption] = useState("");
      
        const handleSortChange = (event) => {
          const selectedOption = event.target.value;
          setSortOption(selectedOption);
          console.log(selectedOption);
        //   onSortChange(selectedOption); // Call the parent function with selected value
        }
  return (
    <div>
      <div className="flex justify-end items-center gap-2 mr-4"><span className="font-semibold">Sort Users: </span>
        <select
        className="border border-gray-300 rounded-md p-2"
        value={sortOption}
        onChange={handleSortChange}
        >
        <option value="">Sort By</option>
        <option value="name">Sort by Names</option>
        <option value="new">Sort by New Entries</option>
        <option value="old">Sort by Old Entries</option>
        <option value="country">Sort by Country</option>
        </select>
      </div>
      {/* Display sorted data here */}
      <div>
        <User data={data} />
      </div>
    </div>
  )
}

export default UserData
