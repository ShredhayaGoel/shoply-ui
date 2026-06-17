import React from "react";
import { Tag } from "lucide-react";
import "animate.css";

const dealsData = [
  {
    id: 1,
    title: "50% OFF on Fashion",
    desc: "Trendy outfits at half price",
    img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg",
  },
  {
    id: 2,
    title: "Electronics Mega Sale",
    desc: "Latest gadgets at best price",
    img: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg",
  },
  {
    id: 3,
    title: "Home Decor Deals",
    desc: "Beautify your home",
    img: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
  },
];

const Deals = () => {
  return (
    <div className="px-4 py-10">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
        <Tag className="w-6 h-6 text-violet-600" />
        Hot Deals 🔥
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {dealsData.map((deal) => (
          <div
            key={deal.id}
            className="relative rounded-2xl overflow-hidden shadow-lg group animate__animated animate__fadeInUp"
          >
            {/* Image */}
            <img
              src={deal.img}
              alt={deal.title}
              className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-5">
              <h3 className="text-white text-lg font-semibold">{deal.title}</h3>
              <p className="text-gray-200 text-sm">{deal.desc}</p>

              <button className="mt-3 bg-white text-violet-600 px-4 py-1.5 rounded-lg text-sm w-fit hover:bg-gray-100 transition">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Deals;
