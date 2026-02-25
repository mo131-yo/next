import React from 'react'

export const Input = ({ name, value, onChange, placeholder, error }) => {
  return (
    <input
      name={name}        // ЭНЭ МАШ ЧУХАЛ: Үүнийг заавал нэм
      value={value}      // State-ээс ирж буй утга
      onChange={onChange} // Home-оос ирж буй handleChange
      placeholder={placeholder}
      className={`w-full h-11 p-3 border rounded-lg transition-all ${
        error ? 'border-red-500 bg-red-50' : 'border-gray-300'
      }`}
    />
  );
};
