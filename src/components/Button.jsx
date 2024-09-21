import React from 'react';

const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="home__btn__c">
      {label}
    </button>
  );
};

export default Button;