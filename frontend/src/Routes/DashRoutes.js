import { Navigate, Outlet } from "react-router-dom";
import DashLayout from "../Component/Dashlayout";
import { useSelector } from "react-redux";

const DashRoutes = () => {
  let token = true ;

  return token ? (
    <DashLayout>
      <Outlet />
    </DashLayout>
  ) : (
    <Navigate to="/login" />
  );
};

export default DashRoutes;