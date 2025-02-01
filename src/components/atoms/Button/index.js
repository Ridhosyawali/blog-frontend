import React from "react";

const Button = ({
  children,
  type = "button",
  onClick = () => {},
  className = "bg-slate-800 text-white ",
}) => {
  return (
    <button
      type={type}
      class={`px-2 rounded-lg ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
