import React from "react";

interface SpinnerProps {
  size?: "small" | "medium" | "large";
  color?: "blue" | "red" | "green" | "yellow";
}

const Spinner: React.FC<SpinnerProps> = ({
  size = "medium",
  color = "blue",
}) => {
  const sizeClasses = {
    small: "w-4 h-4",
    medium: "w-8 h-8",
    large: "w-12 h-12",
  };

  const colorClasses = {
    blue: "text-blue-500",
    red: "text-red-500",
    green: "text-green-500",
    yellow: "text-yellow-500",
  };

  return (
    <div
      className={`flex items-center justify-center animate-pulse ${sizeClasses[size]} ${colorClasses[color]}`}
      role="status"
    >
      <svg
        className="animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          strokeWidth="4"
          stroke="currentColor"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
