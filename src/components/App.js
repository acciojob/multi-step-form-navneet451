
import React, { useState } from "react";
import Step from "./Step";
import "./../styles/App.css";

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    model: "",
    car_price: "",
    card_info: "",
    expiry_date: ""
  });

  const handleNext = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
  const handlePrevious = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = () => {
    alert("Form submitted successfully: " + JSON.stringify(formData));
  };

  return (
    <div className="App">
      <h1>Multi-Step Form</h1>
      <Step
        currentStep={currentStep}
        formData={formData}
        handleChange={handleChange}
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;

