import React, { useState, useRef } from 'react'
import { Header } from '../layer/Header';
import { Footer } from '../layer/Footer';

export const Date = ({ 
  handleChange,
  formValues,
  formErrors, 
  handleNext, 
  handlePrev, 
  step, 
  totalSteps 
}) => {
  const inputRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [imageUrl, setImageUrl] = useState(formValues.profileImage || "");

  const handleBrowserClick = () => {
    if (inputRef.current) inputRef.current.click();
  }

  const handleUploadImage = (file) => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setImageUrl(url);
    
    const event = {
      target: {
        name: "profileImage",
        value: url
      }
    };
    handleChange(event);
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    handleUploadImage(file);
  }

  const clearImage = (e) => {
    e.stopPropagation();
    setImageUrl("");
    const event = { target: { name: "profileImage", value: "" } };
    handleChange(event);
  }

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    handleUploadImage(file);
    setIsDragging(false);
  }

  return (
    <div>
      <Header />
      <div className='pt-5'>
        <div className="mb-4">
          <p className='font-bold text-sm mb-2'>Date of birth *</p>
          <input 
            type="date" 
            name="date"
            value={formValues.date} 
            onChange={handleChange}
            className={`w-full h-11 p-3 border rounded-lg ${formErrors.date ? 'border-red-500' : 'border-gray-300'}`} 
          />
          {formErrors.date && <p className="text-red-500 text-xs mt-1">{formErrors.date}</p>}
        </div>

        <div className="mb-6">
          <p className='font-bold text-sm mb-2'>Profile image *</p>
          <div   
            onDrop={handleDrop} 
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onClick={handleBrowserClick} 
            className={`h-40 w-full flex flex-col justify-center items-center rounded-lg border-2 border-dashed cursor-pointer transition-colors ${
              isDragging ? "border-blue-500 bg-blue-50" : "border-gray-300 bg-gray-50"
            }`}
          >
            {imageUrl ? (
              <div className="relative w-full h-full">
                <img src={imageUrl} alt="profile" className='w-full h-full object-cover rounded-lg'/>
                <button 
                  onClick={clearImage} 
                  className='absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex justify-center items-center'
                >
                  ×
                </button>
              </div>
            ) : (
              <span className="text-gray-400">Browse file or drag and drop here</span>
            )}
          </div>
          <input type="file" hidden ref={inputRef} onChange={handleFileChange} accept="image/*" />
          {formErrors.profileImage && <p className="text-red-500 text-xs mt-1">{formErrors.profileImage}</p>}
        </div>

        <Footer 
          handleNext={handleNext} 
          handlePrev={handlePrev} 
          step={step} 
          totalSteps={totalSteps} 
        />
      </div>
    </div>
  )
}