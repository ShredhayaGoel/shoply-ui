import { useState } from "react";
import { Plus, Minus, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

import "animate.css";

const Cart = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Premium Hoodie",
      price: 49,
      quantity: 1,
      image: "https://source.unsplash.com/100x100/?hoodie",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199,
      quantity: 1,
      image: "https://source.unsplash.com/100x100/?watch",
    },
  ]);

  const updateQuantity = (id, type) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                type === "inc"
                  ? item.quantity + 1
                  : item.quantity > 1
                    ? item.quantity - 1
                    : 1,
            }
          : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Cart is empty!");
      return;
    }

    console.log(cartItems); // ✅ required
  };

  return (
    <div className="min-h-screen px-4 py-10 bg-gradient-to-b from-gray-50 to-white">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-10 animate__animated animate__fadeInDown">
        Your Cart 🛒
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* ================= CART ITEMS ================= */}
        <div className="md:col-span-2 flex flex-col gap-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 animate__animated animate__fadeInUp"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-xl"
              />

              {/* Info */}
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-500">${item.price}</p>

                {/* Quantity */}
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, "dec")}
                    className="p-1 bg-gray-100 rounded-md hover:bg-gray-200"
                  >
                    <Minus className="w-4 h-4" />
                  </button>

                  <span className="text-sm font-medium">{item.quantity}</span>

                  <button
                    onClick={() => updateQuantity(item.id, "inc")}
                    className="p-1 bg-gray-100 rounded-md hover:bg-gray-200"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Remove */}
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:text-red-600"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}

          {cartItems.length === 0 && (
            <p className="text-center text-gray-500">Your cart is empty 😢</p>
          )}
        </div>

        {/* ================= SUMMARY ================= */}
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 h-fit animate__animated animate__fadeInRight">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

          <div className="flex justify-between text-sm mb-2">
            <span>Items</span>
            <span>{cartItems.length}</span>
          </div>

          <div className="flex justify-between text-sm mb-4">
            <span>Total</span>
            <span className="font-bold text-violet-600">${total}</span>
          </div>

          <button
            onClick={() => {
              handleCheckout();
              navigate("/checkout");
            }}
            className="w-full bg-gradient-to-r from-violet-500 to-purple-500 text-white py-2.5 rounded-xl font-medium hover:opacity-90 transition"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
