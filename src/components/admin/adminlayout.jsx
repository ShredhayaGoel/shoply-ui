import { Outlet, Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Package, ShoppingCart, Users } from "lucide-react";
import "animate.css";

const AdminLayout = () => {
  const location = useLocation();

  const menu = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: <LayoutDashboard size={18} />,
    },
    {
      name: "Products",
      path: "/admin/products",
      icon: <Package size={18} />,
    },
    {
      name: "Orders",
      path: "/admin/orders",
      icon: <ShoppingCart size={18} />,
    },
    {
      name: "Users",
      path: "/admin/users",
      icon: <Users size={18} />,
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* ================= SIDEBAR ================= */}
      <aside className="w-64 bg-gradient-to-b from-black to-gray-900 text-white p-6 hidden md:flex flex-col animate__animated animate__fadeInLeft">
        {/* Logo */}
        <h1 className="text-2xl font-bold mb-10 tracking-wide">Shoply Admin</h1>

        {/* Menu */}
        <nav className="flex flex-col gap-3">
          {menu.map((item, index) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={index}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-2 rounded-xl transition-all duration-200
                  ${
                    isActive
                      ? "bg-gradient-to-r from-violet-500 to-purple-500 text-white shadow-md"
                      : "hover:bg-gray-800 text-gray-300"
                  }
                `}
              >
                {item.icon}
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* ================= MAIN ================= */}
      <div className="flex-1 flex flex-col">
        {/* ================= TOPBAR ================= */}
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-6 animate__animated animate__fadeInDown">
          <h2 className="text-lg font-semibold text-gray-800">Admin Panel</h2>

          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Admin</span>
            <div className="w-9 h-9 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center text-white font-bold">
              A
            </div>
          </div>
        </header>

        {/* ================= CONTENT ================= */}
        <main className="p-6 animate__animated animate__fadeIn">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
