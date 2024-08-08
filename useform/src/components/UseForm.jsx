// src/UserForm.js
import React, { useState } from 'react';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  lastName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  contact: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, 'Must be exactly 10 digits')
    .max(10, 'Must be exactly 10 digits')
    .required('Required'),
  address: Yup.string()
    .required('Required')
});

const UserForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contact: '',
    address: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      console.log('Form data is valid:', formData);
      // Handle form submission, e.g., send data to server
    } catch (validationErrors) {
        console.log('Form data is invalid:', validationErrors.inner);
      const formattedErrors = validationErrors.inner.reduce((acc, error) => {
        return { ...acc, [error.path]: error.message };
      }, {});
      setErrors(formattedErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          value={formData.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <div>{errors.firstName}</div>}
      </div>

      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          value={formData.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <div>{errors.lastName}</div>}
      </div>

      <div>
        <label htmlFor="contact">Contact</label>
        <input
          id="contact"
          name="contact"
          type="text"
          value={formData.contact}
          onChange={handleChange}
        />
        {errors.contact && <div>{errors.contact}</div>}
      </div>

      <div>
        <label htmlFor="address">Address</label>
        <input
          id="address"
          name="address"
          type="text"
          value={formData.address}
          onChange={handleChange}
        />
        {errors.address && <div>{errors.address}</div>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
