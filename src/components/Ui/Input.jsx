import React from 'react'

export const Input = ({ name, value, onChange, placeholder, error }) => {
  return (
    <input
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full h-11 p-3 border rounded-lg transition-all ${
        error ? 'border-red-500 bg-red-50' : 'border-gray-300'
      }`}
    />
  );
};
