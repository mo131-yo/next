"use client"
import { useState , useEffect } from "react";
import { Ners, Email, Date, Success } from "@/components/Steps";
import { initialValues } from "@/constant/initial";
import { validateStepOne, validateStepTwo, validateStepThree } from "@/utils/validation";

export const Home = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [step, setStep] = useState(0);
  
  const steps = [Ners, Email, Date, Success];
  const validators = [validateStepOne, validateStepTwo, validateStepThree];
  
  const handleNext = () => {
  if (step >= steps.length - 1) return;

  const validate = validators[step];
  if (validate) {
    console.log("Одоогийн утгууд:", formValues); 
    
    const { errors, isValid } = validate(formValues);
    
    if (!isValid) {
      setFormErrors(errors);
      return;
    }
  }

  setFormErrors({});
  setStep((prev) => prev + 1);
};

useEffect(() => {
    const savedData = localStorage.getItem("form_step_data");
    const savedStep = localStorage.getItem("current_step");
    
    if (savedData) setFormValues(JSON.parse(savedData));
    if (savedStep) setStep(parseInt(savedStep));
  }, []);

  useEffect(() => {
    localStorage.setItem("form_step_data", JSON.stringify(formValues));
    localStorage.setItem("current_step", step.toString());
  }, [formValues, step]);

  const handlePrev = () => {
    if (step <= 0) return;
    setStep((prev) => prev - 1);
  };

const handleChange = (event) => {
  const { value, name } = event.target;
  console.log(`Input нэр: ${name}, Бичсэн утга: ${value}`);
  setFormValues((prev) => ({ ...prev, [name]: value }));
  setFormErrors((prev) => ({ ...prev, [name]: "" }));
};  

  const Container = steps[step];
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="w-120 p-8 flex flex-col gap-2 bg-white shadow-md rounded-md">
        <Container
          handleChange={handleChange}
          formValues={formValues}
          formErrors={formErrors}
          setFormErrors={setFormErrors}
          handleNext={handleNext}
          handlePrev={handlePrev}
          step={step}
          totalSteps={steps.length}
        />
      </div>
    </div>
  );
}
export default Home