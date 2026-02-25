import React from 'react'
import { validateStepOne } from '@/utils/validation' ;

export const First = ({ handleChange, placeholder }) => {
  return (
    <div className='flex'>
     <div className='font-2 text-txt text-medku'>First name  </div>
     <span className='text-red'>*</span>
   </div>
  ) 
}
