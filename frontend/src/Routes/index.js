import React from "react";
import { Routes, Route } from "react-router-dom";

import HomeView from "../View/Home";
import DashboardView from "../View/Dashboard";
import ProductView from "../View/Product";
import SalesView from "../View/Sales";
import PurchaseView from "../View/Purchase";
import UsersView from "../View/User";
import DashRoutes from "./DashRoutes";


const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/login" element={<HomeView />} />
      <Route element={<DashRoutes />}>
        <Route path="/user" element={<UsersView />} />
        <Route path="/dashboard" element={<DashboardView />} />
        <Route path="/sales" element={<SalesView />} />
        <Route path="/purchase" element={<PurchaseView />} />
        <Route path="/product" element={<ProductView />} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;