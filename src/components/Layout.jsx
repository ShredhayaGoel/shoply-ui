import { Link, Outlet, useLocation } from "react-router-dom";
import { ShoppingCart, User, Shield } from "lucide-react";
import Logo from "./logo";
import "animate.css";

const Layout = () => {
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Categories", path: "/categories" },
    { name: "Deals", path: "/deals" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* ================= NAVBAR ================= */}
      <header className="w-full bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50 animate__animated animate__fadeInDown">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link, index) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={index}
                  to={link.path}
                  className={`transition ${
                    isActive
                      ? "text-violet-600 font-semibold"
                      : "text-gray-700 hover:text-violet-600"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Cart */}
            <Link to="/cart" className="relative">
              <ShoppingCart className="w-5 h-5 text-gray-700 hover:text-violet-600 transition" />
            </Link>

            {/* Login */}
            <Link
              to="/login"
              className="hidden sm:flex items-center gap-1 text-sm text-gray-700 hover:text-violet-600"
            >
              <User size={16} />
              Login
            </Link>

            {/* Signup */}
            <Link
              to="/signup"
              className="hidden sm:block text-sm font-medium text-violet-600 border border-violet-500 px-3 py-1.5 rounded-lg hover:bg-violet-50 transition"
            >
              Signup
            </Link>

            {/* Admin */}
            <Link
              to="/admin"
              className="flex items-center gap-2 px-4 py-2 rounded-xl 
                         bg-gradient-to-r from-violet-500 to-purple-500 
                         text-white text-sm font-medium shadow-md 
                         hover:scale-105 hover:shadow-lg transition-all duration-200"
            >
              <Shield size={16} />
              Admin
            </Link>
          </div>
        </div>
      </header>

      {/* ================= MAIN (IMPORTANT FIX) ================= */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-900 text-gray-300 mt-10">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold text-white mb-3">Shoply</h2>
            <p className="text-sm text-gray-400">
              Premium ecommerce experience with modern UI and seamless shopping.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/">Home</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/categories">Categories</Link>
              <Link to="/deals">Deals</Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Support</h3>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/contact">Contact</Link>
              <Link to="/cart">Cart</Link>
              <Link to="/checkout">Checkout</Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-3">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-3">
              Subscribe to get latest updates
            </p>
            <input
              type="email"
              placeholder="Enter email"
              className="w-full px-3 py-2 rounded-lg bg-gray-800 text-sm outline-none mb-2"
            />
            <button className="w-full bg-violet-600 hover:bg-violet-700 text-white py-2 rounded-lg text-sm">
              Subscribe
            </button>
          </div>
        </div>

        <div className="text-center text-sm py-4 border-t border-gray-800">
          © {new Date().getFullYear()} Shoply. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
