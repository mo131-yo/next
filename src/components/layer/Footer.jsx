import React from 'react'

export const Footer = ({ handleNext, handlePrev, step, totalSteps }) => {
  return (
    <div className="flex gap-4 pt-10">
      {step > 0 && (
        <button
          onClick={handlePrev}
          className="bg-white shadow-md w-full h-11 justify-center items-center text-black flex rounded-md border"
        >
          Back
        </button>
      )}
      <button
        onClick={handleNext}
        className="bg-black w-full h-11 justify-center items-center text-white flex rounded-md"
      >
        Continue
        <div className="flex pl-3 text-sm text-gray-400">
          {step + 1}/{totalSteps}
        </div>
      </button>
    </div>
  );
};
