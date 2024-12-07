import React, { useEffect } from "react";
import HomePage from "./Pages/HomePage";
import "aos/dist/aos.css";
import Signup from "./Pages/Signup";
import { HashRouter as Router, Route, Routes } from "react-router-dom"  // Changed BrowserRouter to HashRouter
import VegetablesPage from "./Pages/Products/VegetablePage";
import CartPage from "./Pages/CartPage";
import FruitsPage from "./Pages/Products/FruitsPage";
import GrainsPage from "./Pages/Products/GrainsPage";
import ContactUs from "./Pages/ContactUs";
import ProductPage from "./Pages/ProductPage";
import AboutUs from "./Pages/AboutUs";
import LoginPage from "./Pages/LoginPage";
import Dashboard from "./Pages/Dashboard";
import CreateItem from "./admin/CreateItem";
import AccessDenied from "./Pages/AccessDenied";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <Router> {/* Wrap the Routes in Router (HashRouter now instead of BrowserRouter) */}
      <Routes>
        <Route path="/" element={<HomePage />}></Route>

        <Route
          element={
            <RequireAuth allowedRoles={["ADMIN", "CUSTOMER", "FARMER"]} />
          }
        >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>

        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/vegetable" element={<VegetablesPage />} />
        <Route path="/fruits" element={<FruitsPage />} />
        <Route path="/grains" element={<GrainsPage />} />
        <Route path="/denied" element={<AccessDenied />} />

        <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
          <Route path="/createItem" element={<CreateItem />} />
        </Route>
      </Routes>
    </Router>  {/* Ensure Routes are wrapped with HashRouter (Router now wraps the Routes) */}
  );
}

export default App;
