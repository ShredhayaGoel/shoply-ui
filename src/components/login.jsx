import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import "animate.css";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.email.includes("@")) {
      newErrors.email = "Valid email required";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    }

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
          Welcome Back 👋
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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

          {/* Forgot Password */}
          <div className="text-right">
            <span className="text-sm text-violet-500 cursor-pointer hover:underline">
              Forgot Password?
            </span>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-2 bg-violet-500 text-white py-2 rounded-xl font-medium hover:bg-violet-600 transition"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-gray-600 text-center mt-4">
          Don’t have an account?{" "}
          <span className="text-violet-500 cursor-pointer hover:underline">
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
