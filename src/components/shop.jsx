import React from "react";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Premium Hoodie",
    price: 49,
    img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199,
    img: "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?q=80&w=800",
  },
  {
    id: 3,
    name: "Running Shoes",
    price: 89,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=800",
  },
  {
    id: 4,
    name: "Wireless Headphones",
    price: 129,
    img: "https://m.media-amazon.com/images/I/81NfyaGuSVL.jpg",
  },
  {
    id: 5,
    name: "Backpack",
    price: 59,
    img: "https://images.unsplash.com/photo-1514474959185-1472d4c4e0d4?q=80&w=800",
  },
  {
    id: 6,
    name: "Sunglasses",
    price: 39,
    img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800",
  },
];

const Shop = () => {
  return (
    <div className="px-4 py-10">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-center mb-8">Shop Products 🛍️</h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>

            {/* Info */}
            <div className="p-4 flex flex-col gap-2">
              <h3 className="font-semibold text-lg">{product.name}</h3>

              <p className="text-violet-600 font-bold">${product.price}</p>

              <button
                onClick={() => console.log(product)}
                className="mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-violet-500 to-purple-500 text-white py-2 rounded-lg text-sm hover:opacity-90 transition"
              >
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
