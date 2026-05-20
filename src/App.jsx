import { Routes, Route } from "react-router-dom"

// Layouts
import MainLayout from "./layouts/MainLayout"
import AuthLayout from "./layouts/AuthLayout"
import GuestLayout from "./layouts/GuestLayout" 

// Pages Admin
import Dashboard from "./pages/Dashboard"
import Orders from "./pages/Order"
import Customers from "./pages/Customer"
import NotFound from "./pages/NotFound"

// Pages Guest
import LandingPage from "./pages/LandingPage" // Pakai yang di folder pages

// Auth
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import Forgot from "./pages/auth/Forgot"

function App() {
  return (
    <Routes>
      {/* 🟢 HALAMAN GUEST (localhost:5173/guest) */}
      <Route path="/guest" element={<GuestLayout />}>
        <Route index element={<LandingPage />} />
      </Route>

      {/* 🔵 HALAMAN ADMIN (Langsung muncul di localhost:5173/) */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customers" element={<Customers />} />
      </Route>

      {/* 🟡 HALAMAN AUTH */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
      </Route>

      {/* 🔴 NOT FOUND */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App