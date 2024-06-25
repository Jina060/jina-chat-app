import React from "react";

type InputProps = {
    placeholder: string;
    value?: string;
    type?: string;
    className?: string;
    

};

const Input = ({
    type = "text",
    placeholder,
    value,
    className,
}: InputProps) => {
    return (
        <input
            value={value}
            type={type}
            placeholder={placeholder}
            className={`rounded-md bg-blue ${className}`}
            />
    );
}

export default Input