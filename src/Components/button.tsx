import React from "react";

type ButtonProps = {
  text?: string;
  className?: string;
  secondary?: boolean;
  onClick?: () => void;
  secondary_2?: boolean;
};

function Button({
  className,
  secondary,
  text = "Button",
  onClick,
  secondary_2,
}: ButtonProps) {
  return (
    <button
      className={` text-myAsh hover:text-black ${
        secondary
          ? "py-2 px-5 justify-center items-center rounded-full text-myAsh hover:bg-myCyan hover:text-white transition-all"
          : secondary_2
          ? "text-white hover:text-white bg-myCyan rounded-full py-2 px-5 justify-center items-center"
          : "bg-transparent"
      } ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );     
}
export default Button;
