import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* USER */
import Layout from "./components/Layout";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Categories from "./components/Categories";
import Deals from "./components/Deals";
import Cart from "./components/Cart";
import ShopDetails from "./components/ShopDetails";
import Checkout from "./components/Checkout";
import Contact from "./components/Contact";

/* AUTH */
import Login from "./components/Login";
import Signup from "./components/Signup";

/* ADMIN */
import AdminLayout from "./components/admin/AdminLayout";
import Dashboard from "./components/admin/Dashboard";
import Products from "./components/admin/Products";
import Orders from "./components/admin/Orders";
import Users from "./components/admin/Users";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* ✅ USER ROUTES WITH LAYOUT */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="categories" element={<Categories />} />
          <Route path="deals" element={<Deals />} />
          <Route path="cart" element={<Cart />} />
          <Route path="product/:id" element={<ShopDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* ✅ AUTH (NO LAYOUT) */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* ✅ ADMIN */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="users" element={<Users />} />
        </Route>

        {/* 404 */}
        <Route
          path="*"
          element={
            <div className="flex items-center justify-center h-screen text-2xl font-bold">
              404 | Page Not Found ❌
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
