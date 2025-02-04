import React from 'react'

const User = ({data}) => {
  return (
    <div className="overflow-x-auto">
    <table className="min-w-full bg-white border border-gray-300 shadow-md">
      <thead className="bg-gray-100">
        <tr>
          <th className="py-2 px-4 border-b">FullName</th>
          <th className="py-2 px-4 border-b">Mobile Number</th>
          <th className="py-2 px-4 border-b">Email Id</th>
          <th className="py-2 px-4 border-b">Country</th>
          <th className="py-2 px-4 border-b">Entry Date</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.email} className="text-center">
            <td className="py-2 px-4 border-b">{item.fullname}</td>
            <td className="py-2 px-4 border-b">{item.mobilenumber}</td>
            <td className="py-2 px-4 border-b">{item.email}</td>
            <td className="py-2 px-4 border-b">{item.country}</td>
            <td className="py-2 px-4 border-b">{item.entryDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default User
