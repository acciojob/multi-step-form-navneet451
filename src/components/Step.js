import React from "react";

const Step = ({
  currentStep,
  formData,
  handleChange,
  handleNext,
  handlePrevious,
  handleSubmit
}) => {
  return (
    <div>
      {currentStep === 1 && (
        <div>
          <h2>Step 1: Personal Information</h2>
          <input
            id="first_name"
            type="text"
            placeholder="First Name"
            value={formData.first_name}
            onChange={handleChange}
          />
          <input
            id="last_name"
            type="text"
            placeholder="Last Name"
            value={formData.last_name}
            onChange={handleChange}
          />
        </div>
      )}

      {currentStep === 2 && (
        <div>
          <h2>Step 2: Car Information</h2>
          <input
            id="model"
            type="text"
            placeholder="Car Model"
            value={formData.model}
            onChange={handleChange}
          />
          <input
            id="car_price"
            type="number"
            placeholder="Car Price"
            value={formData.car_price}
            onChange={handleChange}
          />
        </div>
      )}

      {currentStep === 3 && (
        <div>
          <h2>Step 3: Payment Information</h2>
          <input
            id="card_info"
            type="text"
            placeholder="Card Information"
            value={formData.card_info}
            onChange={handleChange}
          />
          <input
            id="expiry_date"
            type="text"
            placeholder="Expiry Date"
            value={formData.expiry_date}
            onChange={handleChange}
          />
        </div>
      )}

      <div>
        {currentStep > 1 && (
          <button onClick={handlePrevious}>Previous</button>
        )}
        {currentStep < 3 && (
          <button onClick={handleNext}>Next</button>
        )}
        {currentStep === 3 && (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default Step;
