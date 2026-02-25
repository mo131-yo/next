// import React, {useState, useRef} from 'react'
// import { Header } from '../layer/Header';
// import {index} from "@/pages/index.jsx";
// import {initialValues} from "@/constant/initial";

// export const Date = () => {
//   const inputRef = useRef();
//   const [isDragging, setIsDragging]= useState(false);
//   const [formValues, setFormValues]=useState(initialValues);
// const [imageUrl, setImageUrl] =useState("")

// const handleBrowserClick= ()=>{
//   if(inputRef.current){
//     inputRef.current.click();
//   }
// }

// const handleUploadImage =(file)=>{
//   const imageUrl =URL.createObjectURL(file);
//   setImageUrl(imageUrl) ;
//   setFormValues((previous)=> ({... previous, profileImage: imageUrl}) );
// }

//   const handleChange = (event) => {
//   const uploadedImage = Array.from(event.target.files).at(0);

//     handleUploadImage(uploadedImage);
// }
//     const clearImage =()=>{
//   inputRef.current.value= "";
//   setImageUrl("");
//   setFormValues((previous)=>({ ...previous, profileImage: ""}))
//   }

//     const handleDrop=(event)=>{
//     event.preventDefault();
//     const uploadedImage = Array.from(event.dataTransfer.files).at(0);
//     handleUploadImage(uploadedImage);
//     setIsDragging(false);
//   }

//     const handleDragOver =(event)=>{
//     event.preventDefault();
//     setIsDragging(true);
//   }

//   const handleDragLeave=()=> setIsDragging (false);
//   return (
//     <div>
//          <Header />
//          <div className='pt-5'>
//           <div>
//             <p className='font-2 text-txt text-medku'>Date of birth *</p>
//             <input type="date" placeholder="--/--/--" name="calinder" value="" min="1999-01-01" max="2028-02-20"  className='w-104 h-11 p-3 border rounded-lg color-#0CA5E9' />
//          </div>
//              {/* {formErrors.dateOfBirth && (
//               <p className="text-red text-3"
//               >{formErrors.date}</p>)} */}
//           <div>
//             <p className='font-2 text-txt text-medku'>Profile image *</p>
//             <div   
//              onDrop={handleDrop} 
//             onDragOver={handleDragOver}
//             onClick={handleBrowserClick}
//             onDragLeave={handleDragLeave} className='bg-red h-75 w-100 flex justify-center items-center'>
//             {imageUrl ? <img src={imageUrl} alt="image" className='w-full '/> : "Browse file or drag and drop here"}
//             </div>
//             {imageUrl && 
//             <button onClick={clearImage} className='w-8 h-8 bg-amber-700'>x</button>}
//               <input type="file" hidden ref={inputRef} className='w-full h-50 p-3 bg-gray-400 rounded-lg color-#0CA5E9 border-isDragging ? "border-dashed border-red": border-solid border-2 border-gray-300' 
//               onChange={handleChange} 
//             />
//           </div>
//          </div>
       
//     </div>
//   )
// }



import React, { useState, useRef } from 'react'
import { Header } from '../layer/Header';
import { Footer } from '../layer/Footer'; // Footer нэмэх

export const Date = ({ 
  handleChange, // Home-оос ирж буй функц
  formValues,   // Home-оос ирж буй дата
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

  // Зургийг файл хэлбэрээр боловсруулах
  const handleUploadImage = (file) => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setImageUrl(url);
    
    // Home-оос ирсэн handleChange-ийг дуурайж утгыг хадгалах
    // profileImage-ийг "value" болгож дамжуулна
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
    e.stopPropagation(); // Click event-ийг дээш дамжуулахгүй (browse нээхээс сэргийлнэ)
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
        {/* Date input */}
        <div className="mb-4">
          <p className='font-bold text-sm mb-2'>Date of birth *</p>
          <input 
            type="date" 
            name="date" // Validation-тайгаа ижил нэр өгөх
            value={formValues.date} 
            onChange={handleChange}
            className={`w-full h-11 p-3 border rounded-lg ${formErrors.date ? 'border-red-500' : 'border-gray-300'}`} 
          />
          {formErrors.date && <p className="text-red-500 text-xs mt-1">{formErrors.date}</p>}
        </div>

        {/* Profile image upload */}
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

        {/* Footer-ийг энд нэмнэ */}
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