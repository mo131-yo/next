import React from 'react'
import { Header } from "@/components/layer/Header";
import { Input, MinEmail, Phone, Password, PassAgain } from "@/components/Ui";
import { Footer } from "@/components/layer/Footer"; 

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