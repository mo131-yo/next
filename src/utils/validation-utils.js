export const isEmpty =(value)=>!value.trim();

export const isEmail=( email)=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const isPhoneNumber=(phonenumber)=> /^\+?\d{8}$/.test(phonenumber);
