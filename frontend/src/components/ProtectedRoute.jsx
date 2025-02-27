import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const adminData = JSON.parse(localStorage.getItem("admin"));
  return adminData?.isAuthenticated ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default ProtectedRoute;
