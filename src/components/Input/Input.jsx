import React from "react";
import "./styles.css";

const Input = ({ label, type, name, value, onChange, error, onBlur, className, placeholder }) => {
  return (
    <div className="wrapper">
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        className={className} 
        value={value}
        onChange={onChange}
        type={type}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Input;