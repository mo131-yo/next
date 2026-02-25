import React from 'react'
import {Header} from "@/components/layer/Header";
import {First, Input, Last, Username} from "@/components/Ui";
import { validateStepOne } from '@/utils/validation';
import {Footer} from "@/components/layer/Footer";

export const Ners = ({ handleChange, formValues, formErrors, handleNext, handlePrev, step, totalSteps }) => {
  return (
    <div>
      <Header />
      <div className='pt-4'>
        <div className="mb-4">
          <label className="text-sm font-bold">First Name</label>
          <Input 
            placeholder="Neree oruul"
            onChange={handleChange}
            value={formValues.firstName}
            name="firstName"
          />
          {formErrors.firstName && <p className="text-red-500 text-xs mt-1">{formErrors.firstName}</p>}
        </div>
        
        <div className="mb-4">
          <label className="text-sm font-bold">Last Name</label>
          <Input 
            placeholder="Ovgoo oruul"
            onChange={handleChange}
            value={formValues.lastName}
            name="lastName"
          />
          {formErrors.lastName && <p className="text-red-500 text-xs mt-1">{formErrors.lastName}</p>}
        </div>

        <div className="mb-4">
          <label className="text-sm font-bold">Username</label>
          <Input 
            placeholder="Username oruul"
            onChange={handleChange}
            value={formValues.userName}
            name="userName"
          />
          {formErrors.userName && <p className="text-red-500 text-xs mt-1">{formErrors.userName}</p>}
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