import { ArrowRight } from "lucide-react";
import Categories from "./Categories";
import Deals from "./Deals";
import Shop from "./Shop";
import "animate.css";

const Home = () => {
  return (
    <div className="flex flex-col gap-16">
      {/* ================= HERO SECTION ================= */}
      <div className="relative px-4 py-20 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-600 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Content */}
          <div className="max-w-lg animate__animated animate__fadeInLeft">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Discover Premium Products with{" "}
              <span className="bg-black text-white px-2 rounded-md">
                Shoply
              </span>
            </h1>

            <p className="mt-4 text-sm text-white/80">
              Your one-stop destination for fashion, electronics, and more.
              Experience shopping like never before.
            </p>

            <button className="mt-6 flex items-center gap-2 bg-white text-violet-600 px-5 py-2.5 rounded-xl font-medium hover:bg-gray-100 transition">
              Start Shopping
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Image */}
          <div className="animate__animated animate__fadeInRight">
            <img
              src="https://source.unsplash.com/500x400/?shopping,ecommerce"
              alt="hero"
              className="rounded-3xl shadow-xl"
            />
          </div>
        </div>

        {/* Glow Effect */}
        <div className="absolute w-72 h-72 bg-white/10 rounded-full blur-3xl top-[-50px] right-[-50px]"></div>
      </div>

      {/* ================= CATEGORIES ================= */}
      <Categories />

      {/* ================= DEALS ================= */}
      <Deals />

      {/* ================= FEATURED PRODUCTS ================= */}
      <div>
        <h2 className="text-2xl font-bold text-center mb-6">
          Featured Products
        </h2>
        <Shop />
      </div>
    </div>
  );
};

export default Home;
