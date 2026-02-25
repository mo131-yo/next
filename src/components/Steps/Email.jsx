// import { useState } from "react";
// import {Header} from "@/components/layer/Header";
// import { First, Input, Error, Last, Username, MinEmail, Phone, Password, PassAgain} from "@/components/Ui";
// import { validateStepTwo } from "@/utils/validation"; 


// export const Email = ({handleChange,formValues, formErrors, setFormErrors}) => {
//     const handleSubmit=()=>{
//  const {errors , isValid}= validateStepTwo(formValues); 
//  setFormErrors(errors);
//     };
//   return (
//     <div className="flex-col gap-3">
//          <Header/>
//          <div className="pt-5">
//             <div>
//               <MinEmail/>
//               <input type="email" placeholder={"Email oruul"} className='w-104 h-11 p-3 border rounded-lg color-#0CA5E9' 
//               onChange={handleChange}
//               handleChange={handleChange}
//               name="email"
//               value={formValues.email}
//               error={formErrors.email}
//               />
//                   {formErrors.email && (
//               <p className="text-red text-3"
//               >{formErrors.email}</p>)}
//             </div>
//             <div>
//               <Phone />
//                <Input placeholder={"dugaaraa oruul"}
//                 onChange={handleChange}
//                 handleChange={handleChange}
//               name="phoneNumber"
//               value={formValues.phoneNumber}
//               error={formErrors.phoneNumber}/>
//                   {formErrors.phoneNumber && (
//               <p className="text-red text-3"
//               >{formErrors.phoneNumber}</p>)}
//             </div>
//             <div>
//               <Password />
//                 <Input placeholder={"nuuts ug oruul"}
//                    onChange={handleChange}
//                    handleChange={handleChange}
//               name="password"
//               value={formValues.password}
//               error={formErrors.password}/>
//                   {formErrors.password && (
//               <p className="text-red text-3"
//               >{formErrors.password}</p>)}
//             </div>
//             <div>
//               <PassAgain />
//                 <Input placeholder={"nuuts ug davtana uu"}
//                    onChange={handleChange}
//                    handleChange={handleChange}
//                    error={formErrors.confirmPassword}
//               name="confirmPassword"
//               value={formValues.confirmPassword} />
//                   {formErrors.confirmPassword && (
//               <p className="text-red text-3"
//               >{formErrors.confirmPassword}</p>)}
//             </div>
//          </div>
//     </div>
//   )
// }



import React from 'react'
import { Header } from "@/components/layer/Header";
import { Input, MinEmail, Phone, Password, PassAgain } from "@/components/Ui";
import { Footer } from "@/components/layer/Footer"; // Footer-ийг импортлох

export const Email = ({ 
  handleChange, 
  formValues, 
  formErrors, 
  handleNext, 
  handlePrev, 
  step, 
  totalSteps 
}) => {
  return (
    <div className="flex flex-col gap-3">
      <Header />
      <div className="pt-5">
        {/* Email Input */}
        <div>
          <MinEmail />
          <Input 
            type="email" 
            placeholder="Email oruul" 
            onChange={handleChange}
            name="email"
            value={formValues.email}
            error={formErrors.email}
          />
          {formErrors.email && (
            <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
          )}
        </div>

        {/* Phone Input */}
        <div className="mt-4">
          <Phone />
          <Input 
            placeholder="dugaaraa oruul"
            onChange={handleChange}
            name="phoneNumber"
            value={formValues.phoneNumber}
            error={formErrors.phoneNumber}
          />
          {formErrors.phoneNumber && (
            <p className="text-red-500 text-xs mt-1">{formErrors.phoneNumber}</p>
          )}
        </div>

        {/* Password Input */}
        <div className="mt-4">
          <Password />
          <Input 
            type="password"
            placeholder="nuuts ug oruul"
            onChange={handleChange}
            name="password"
            value={formValues.password}
            error={formErrors.password}
          />
          {formErrors.password && (
            <p className="text-red-500 text-xs mt-1">{formErrors.password}</p>
          )}
        </div>

        {/* Confirm Password Input */}
        <div className="mt-4">
          <PassAgain />
          <Input 
            type="password"
            placeholder="nuuts ug davtana uu"
            onChange={handleChange}
            name="confirmPassword"
            value={formValues.confirmPassword}
            error={formErrors.confirmPassword}
          />
          {formErrors.confirmPassword && (
            <p className="text-red-500 text-xs mt-1">{formErrors.confirmPassword}</p>
          )}
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
  );
};