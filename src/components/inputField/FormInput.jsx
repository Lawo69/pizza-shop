import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // install lucide-react for icons

const InputField = ({
  label,
  name,
  type = "text",
  textarea = false,
  placeholder = "",
  required = false,
  value,
  onChange,
  className = "",
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword && !showPassword ? "password" : "text";

  return (
    <div className="mb-4 w-full">
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        {textarea ? (
          <textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            required={required}
            placeholder={placeholder}
            className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 ${className}`}
            rows="4"
          />
        ) : (
          <input
            id={name}
            name={name}
            type={isPassword ? inputType : type}
            value={value}
            onChange={onChange}
            required={required}
            placeholder={placeholder}
            className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-600 ${className}`}
          />
        )}

        {isPassword && (
          <div
            className="absolute right-3 top-3 cursor-pointer text-gray-600"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputField;
