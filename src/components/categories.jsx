import { Shirt, Laptop, Watch, Home, Headphones, Sparkles } from "lucide-react";
import "animate.css";

const categories = [
  { name: "Fashion", icon: Shirt },
  { name: "Electronics", icon: Laptop },
  { name: "Watches", icon: Watch },
  { name: "Home", icon: Home },
  { name: "Audio", icon: Headphones },
  { name: "Beauty", icon: Sparkles },
];

const Categories = () => {
  return (
    <div className="px-4 py-14 bg-gradient-to-b from-white to-gray-50">
      {/* Heading */}
      <div className="text-center mb-12 animate__animated animate__fadeInDown">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-transparent">
          Shop by Categories
        </h2>
        <p className="text-gray-500 text-sm mt-2">
          Explore premium collections curated for you
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {categories.map((cat, index) => {
          const Icon = cat.icon;
          return (
            <div
              key={index}
              className="group cursor-pointer bg-white rounded-2xl p-5 flex flex-col items-center justify-center shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition animate__animated animate__fadeInUp"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-purple-500 text-white mb-3 group-hover:scale-110 transition">
                <Icon className="w-6 h-6" />
              </div>

              {/* Text */}
              <span className="text-sm font-medium text-gray-700 group-hover:text-violet-600 transition">
                {cat.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
