import React from 'react';

const User = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 shadow-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border-b">Full Name</th>
            <th className="py-2 px-4 border-b">Mobile Number</th>
            <th className="py-2 px-4 border-b">Email Id</th>
            <th className="py-2 px-4 border-b">Country</th>
            <th className="py-2 px-4 border-b">Entry Date</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item) => {
              const date = item.createdAt ? new Date(item.createdAt).toISOString().split("T")[0] : "N/A";
              return (
                <tr key={item._id} className="text-center">
                  <td className="py-2 px-4 border-b">{item.fullname}</td>
                  <td className="py-2 px-4 border-b">{item.phone || "N/A"}</td>
                  <td className="py-2 px-4 border-b">{item.email}</td>
                  <td className="py-2 px-4 border-b">{item.country}</td>
                  <td className="py-2 px-4 border-b">{date}</td> {/* Use extracted date */}
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="5" className="py-4 text-center text-gray-500">No Users Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default User;
