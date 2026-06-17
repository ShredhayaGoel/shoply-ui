import { useState } from "react";
import { Mail, Lock, User } from "lucide-react";
import "animate.css";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email.includes("@")) newErrors.email = "Valid email required";

    if (form.password.length < 6)
      newErrors.password = "Min 6 characters required";

    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log(form); // ✅ required
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md animate__animated animate__fadeIn">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
          Create Account ✨
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name */}
          <div>
            <div className="flex items-center bg-gray-100 rounded-xl px-3 py-2">
              <User className="w-5 h-5 text-gray-500" />
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
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <div className="flex items-center bg-gray-100 rounded-xl px-3 py-2">
              <Mail className="w-5 h-5 text-gray-500" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={form.email}
                onChange={handleChange}
                className="bg-transparent outline-none px-2 w-full text-sm"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center bg-gray-100 rounded-xl px-3 py-2">
              <Lock className="w-5 h-5 text-gray-500" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="bg-transparent outline-none px-2 w-full text-sm"
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <div className="flex items-center bg-gray-100 rounded-xl px-3 py-2">
              <Lock className="w-5 h-5 text-gray-500" />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={handleChange}
                className="bg-transparent outline-none px-2 w-full text-sm"
              />
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-2 bg-violet-500 text-white py-2 rounded-xl font-medium hover:bg-violet-600 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-gray-600 text-center mt-4">
          Already have an account?{" "}
          <span className="text-violet-500 cursor-pointer hover:underline">
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
