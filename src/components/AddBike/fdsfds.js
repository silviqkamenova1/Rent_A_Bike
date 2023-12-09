import React, { useState } from 'react';
import Validation from './Validation'; // Adjust the path accordingly

const AddBikeForm = () => {
  const [values, setValues] = useState({
    frame: '',
    type: '',
    size: '',
    year: '',
    price: '',
    image: '',
    description: '',
  });

  const [errors, setErrors] = useState({});

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear the error when the input changes
  };

  const validateForm = () => {
    const validationErrors = Validation(values);
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      // Proceed with form submission logic
      console.log('Form submitted:', values);
    } else {
      console.log('Form validation failed');
    }
  };

  return (
    <div className="contact_section layout_padding">
      <div className="container">
        <div className="contact_main">
          <h1 className="request_text">Add Bike</h1>
          <form method="POST" onSubmit={onSubmit}>
            {/* ... input fields ... */}
            <div className="container_send">
              <input className="send_btn" type="submit" value="Add Bike" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBikeForm;
