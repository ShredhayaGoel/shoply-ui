import { useState } from "react";
import { Star, ShoppingCart } from "lucide-react";
import { useParams } from "react-router-dom";
import "animate.css";

const dummyProduct = {
  id: 1,
  name: "Premium Hoodie",
  price: 49,
  description:
    "This premium hoodie is crafted with high-quality fabric for maximum comfort and style. Perfect for casual wear and all seasons.",
  images: [
    "https://image1.superdry.com/static/images/optimised/zoom/upload9223368955666206645.jpg",
    "https://image1.superdry.com/static/images/optimised/zoom/upload9223368955666102059.jpg",
    "https://www.jockey.in/cdn/shop/files/AW30_BSGRN_0103_S225_JKY_1.webp?v=1761210945&width=560",
  ],
  rating: 4.5,
};

const ShopDetails = () => {
  const { id } = useParams(); // for future dynamic use
  const [selectedImage, setSelectedImage] = useState(dummyProduct.images[0]);

  const handleAddToCart = () => {
    console.log({ productId: id || dummyProduct.id }); // ✅ required
  };

  return (
    <div className="min-h-screen px-4 py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* ================= IMAGES ================= */}
        <div className="animate__animated animate__fadeInLeft">
          {/* Main Image */}
          <div className="rounded-3xl overflow-hidden shadow-md">
            <img
              src={selectedImage}
              alt="product"
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 mt-4">
            {dummyProduct.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="thumb"
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-20 object-cover rounded-xl cursor-pointer border-2 ${
                  selectedImage === img
                    ? "border-violet-500"
                    : "border-transparent"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ================= DETAILS ================= */}
        <div className="flex flex-col gap-5 animate__animated animate__fadeInRight">
          <h1 className="text-3xl font-bold text-gray-900">
            {dummyProduct.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-1 text-yellow-500">
            <Star className="w-5 h-5 fill-yellow-400" />
            <span className="text-sm text-gray-600">
              {dummyProduct.rating} Rating
            </span>
          </div>

          {/* Price */}
          <div className="text-2xl font-bold text-violet-600">
            ${dummyProduct.price}
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm leading-relaxed">
            {dummyProduct.description}
          </p>

          {/* Quantity */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium">Quantity:</span>
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="w-16 border rounded-lg px-2 py-1 text-sm outline-none focus:ring-2 focus:ring-violet-400"
            />
          </div>

          {/* Button */}
          <button
            onClick={handleAddToCart}
            className="mt-4 flex items-center justify-center gap-2 bg-gradient-to-r from-violet-500 to-purple-500 text-white py-3 rounded-xl font-medium hover:opacity-90 transition"
          >
            <ShoppingCart className="w-5 h-5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;
