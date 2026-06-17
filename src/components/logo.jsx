import { ShoppingBag } from "lucide-react";
import "animate.css";

const Logo = ({
  size = "md", // sm | md | lg
  showText = true,
  className = "",
}) => {
  const sizeStyles = {
    sm: {
      icon: "w-6 h-6",
      text: "text-lg",
      gap: "gap-2",
    },
    md: {
      icon: "w-8 h-8",
      text: "text-2xl",
      gap: "gap-2.5",
    },
    lg: {
      icon: "w-10 h-10",
      text: "text-3xl",
      gap: "gap-3",
    },
  };

  const current = sizeStyles[size];

  return (
    <div
      className={`flex items-center ${current.gap} cursor-pointer select-none animate__animated animate__fadeIn ${className}`}
    >
      {/* Gradient Icon */}
      <div className="bg-gradient-to-tr from-violet-500 via-purple-500 to-pink-500 text-white p-2 rounded-xl shadow-lg flex items-center justify-center">
        <ShoppingBag className={`${current.icon}`} />
      </div>

      {/* Shiny Black Brand Text */}
      {showText && (
        <h1
          className={`${current.text} font-extrabold tracking-tight bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent`}
        >
          Shoply
        </h1>
      )}
    </div>
  );
};

export default Logo;
