import { useState } from "react";
import { CreditCard, User, Mail, MapPin, Phone } from "lucide-react";
import "animate.css";

const Checkout = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    card: "",
  });

  const [errors, setErrors] = useState({});

  const cartItems = [
    { id: 1, name: "Premium Hoodie", price: 49 },
    { id: 2, name: "Smart Watch", price: 199 },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Required";
    if (!form.email.includes("@")) newErrors.email = "Invalid email";
    if (form.phone.length < 10) newErrors.phone = "Invalid phone";
    if (!form.address.trim()) newErrors.address = "Required";
    if (form.card.length < 12) newErrors.card = "Invalid card";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log({
        user: form,
        cart: cartItems,
        total,
      }); // ✅ required
    }
  };

  return (
    <div className="min-h-screen px-4 py-12 bg-gradient-to-b from-gray-50 to-white">
      <h1 className="text-3xl font-bold text-center mb-10 animate__animated animate__fadeInDown">
        Checkout 💳
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {/* ================= BILLING FORM ================= */}
        <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 animate__animated animate__fadeInLeft">
          <h2 className="text-xl font-semibold mb-6">Billing Details</h2>

          <div className="flex flex-col gap-5">
            {/* Name */}
            <div>
              <div className="flex items-center bg-gray-100 rounded-xl px-3 py-3">
                <User className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  className="bg-transparent outline-none px-2 w-full text-sm"
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-xs">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <div className="flex items-center bg-gray-100 rounded-xl px-3 py-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className="bg-transparent outline-none px-2 w-full text-sm"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email}</p>
              )}
            </div>

            {/* Phone */}
            <div>
              <div className="flex items-center bg-gray-100 rounded-xl px-3 py-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  className="bg-transparent outline-none px-2 w-full text-sm"
                />
              </div>
              {errors.phone && (
                <p className="text-red-500 text-xs">{errors.phone}</p>
              )}
            </div>

            {/* Address */}
            <div>
              <div className="flex items-start bg-gray-100 rounded-xl px-3 py-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                <textarea
                  name="address"
                  rows="3"
                  placeholder="Address"
                  value={form.address}
                  onChange={handleChange}
                  className="bg-transparent outline-none px-2 w-full text-sm resize-none"
                />
              </div>
              {errors.address && (
                <p className="text-red-500 text-xs">{errors.address}</p>
              )}
            </div>

            {/* Card */}
            <div>
              <div className="flex items-center bg-gray-100 rounded-xl px-3 py-3">
                <CreditCard className="w-5 h-5 text-gray-400" />
                <input
                  type="number"
                  name="card"
                  placeholder="Card Number"
                  value={form.card}
                  onChange={handleChange}
                  className="bg-transparent outline-none px-2 w-full text-sm"
                />
              </div>
              {errors.card && (
                <p className="text-red-500 text-xs">{errors.card}</p>
              )}
            </div>
          </div>
        </div>

        {/* ================= ORDER SUMMARY ================= */}
        <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 animate__animated animate__fadeInRight">
          <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

          <div className="flex flex-col gap-4 mb-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span>{item.name}</span>
                <span>${item.price}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-between font-bold text-lg mb-6">
            <span>Total</span>
            <span className="text-violet-600">${total}</span>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-violet-500 to-purple-500 text-white py-3 rounded-xl font-medium hover:opacity-90 transition"
          >
            Place Order 🚀
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
