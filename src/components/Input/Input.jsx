import React from "react";
import "./styles.css";

const Input = ({ label, type, name, value, onChange, error, onBlur, isTextarea }) => {
  return (
    <div className="wrapper">
      <label className="label" htmlFor={name}>
        {label}
      </label>
      {isTextarea ? (
        <textarea
          id={name}
          name={name}
          className="input textarea"
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          rows="4"
        />
      ) : (
        <input
          id={name}
          name={name}
          className="input"
          value={value}
          onChange={onChange}
          type={type}
          onBlur={onBlur}
        />
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Input;
