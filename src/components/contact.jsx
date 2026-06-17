import { useState } from "react";
import { Mail, User, MessageSquare, Phone, MapPin } from "lucide-react";
import "animate.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.includes("@")) newErrors.email = "Valid email required";
    if (form.message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log(form);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-violet-200 px-4 py-12">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-10 animate__animated animate__fadeInDown">
        Get in Touch ✨
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* ================= LEFT: FORM ================= */}
        <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 animate__animated animate__fadeInLeft">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Send an Enquiry
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Name */}
            <div>
              <div className="flex items-center bg-gray-100 rounded-xl px-3 py-3 focus-within:ring-2 focus-within:ring-violet-400">
                <User className="w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  className="bg-transparent outline-none px-2 w-full text-sm"
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <div className="flex items-center bg-gray-100 rounded-xl px-3 py-3 focus-within:ring-2 focus-within:ring-violet-400">
                <Mail className="w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  className="bg-transparent outline-none px-2 w-full text-sm"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <div className="flex items-start bg-gray-100 rounded-xl px-3 py-3 focus-within:ring-2 focus-within:ring-violet-400">
                <MessageSquare className="w-5 h-5 text-gray-500 mt-1" />
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  className="bg-transparent outline-none px-2 w-full text-sm resize-none"
                />
              </div>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-violet-500 to-purple-500 text-white py-2.5 rounded-xl font-medium hover:opacity-90 transition"
            >
              Send Message 🚀
            </button>
          </form>
        </div>

        {/* ================= RIGHT: DETAILS ================= */}
        <div className="p-8 rounded-3xl shadow-lg text-white bg-gradient-to-br from-black via-gray-900 to-gray-800 animate__animated animate__fadeInRight">
          <h2 className="text-xl font-semibold mb-6">Contact Details</h2>

          <div className="flex flex-col gap-6 text-sm">
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-violet-400" />
              <span className="font-medium">Shredhaya Goel</span>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-violet-400" />
              <span>7818876354</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-violet-400" />
              <span>shredhayagoel@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-violet-400" />
              <span>Meerut</span>
            </div>
          </div>

          {/* Extra UI */}
          <div className="mt-10 p-4 bg-white/10 rounded-xl text-xs text-gray-300">
            We typically respond within 24 hours ⚡
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
