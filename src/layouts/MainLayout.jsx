import { Outlet } from "react-router-dom"
import Sidebar from "../layouts/Sidebar"
import Header from "../layouts/Header"

export default function MainLayout() {
  return (
    <div className="flex h-screen bg-[#f5f6fa] overflow-hidden">

      {/* Sidebar */}
      <Sidebar />

      {/* Content */}
      <div className="flex-1 px-7 py-5 overflow-auto">

        <Header />

        <div className="mt-8">
          <Outlet />
        </div>

      </div>

    </div>
  )
}