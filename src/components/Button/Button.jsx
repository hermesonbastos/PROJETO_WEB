import React from 'react';
import './styles.css';

const Button = ({ label, onClick, className, icon, ...props }) => {
  return (
    <button style={{ display: "flex", gap: "8px", justifyContent: "center", alignItems: "center" }} onClick={onClick} className={className} {...props}>
      {icon}
      {label}
    </button>
  );
};

export default Button;