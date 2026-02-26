import { isEmpty } from "./validation-utils";

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const validateStepOne = (formValues = {}) => {
  const errors = {};
  if (isEmpty(formValues.firstName)) errors.firstName = "neree bich";
  if (isEmpty(formValues.lastName)) errors.lastName = "Ovgoo bich";
  if (isEmpty(formValues.userName)) errors.userName = "Ner buruu bn";

  return { errors, isValid: Object.keys(errors).length === 0 };
};

export const validateStepTwo = (formValues = {}) => {
  const errors = {};
  if (isEmpty(formValues.email)) {
    errors.email = "И-мэйл хаяг оруулна уу";
  } else if (!isValidEmail(formValues.email)) {
    errors.email = "И-мэйл хаяг буруу байна";
  }
  if (isEmpty(formValues.phoneNumber)) errors.phoneNumber = "Утасны дугаар оруулна уу";
  if (isEmpty(formValues.password)) errors.password = "Нууц үг оруулна уу";
  if (formValues.password !== formValues.confirmPassword) {
    errors.confirmPassword = "Нууц үг зөрүүтэй байна";
  }
  return { errors, isValid: Object.keys(errors).length === 0 };
};

export const validateStepThree = (formValues = {}) => {
  const errors = {};
  
  if (!formValues.date) {
    errors.date = "Төрсөн өдөр сонгоно уу";
  } else {
    const birthDate = new Date(formValues.date);
    const today = new Date();
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    if (age < 18) {
      errors.date = "Та 18 нас хүрсэн байх ёстой";
    }
  }

  if (!formValues.profileImage) {
    errors.profileImage = "Профайл зураг оруулна уу";
  }

  return { errors, isValid: Object.keys(errors).length === 0 };
};