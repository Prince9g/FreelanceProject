import React from "react";
import { Outlet } from "react-router-dom";
import AdminPanel from "./AdminPanel"; // This is always visible

const AdminLayout = () => {
  return (
    <div>
      <AdminPanel />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
