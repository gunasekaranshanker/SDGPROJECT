import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Element } from 'react-scroll';

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });

  const validateInput = (name, value) => {
    if (value.trim() === '') {
      return `${name} is required`;
    }
    return '';
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) ? '' : 'Invalid email address';
  };

  const validatePhoneNumber = (value) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(value) ? '' : 'Invalid phone number';
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]:
        name === 'email'
          ? validateEmail(value)
          : name === 'phoneNumber'
          ? validatePhoneNumber(value)
          : validateInput(name, value),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const hasErrors =
      Object.values(errors).filter((error) => error !== '').length > 0;

    if (hasErrors) {
      console.log('Form has errors. Please fix them.');
      return;
    }

    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
    });
    setErrors({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
    });
  };

  return (
    <Element id='Program'>
      <h2 className="mt-5"style={{marginLeft:"400px",color:"Green"}}>To Participate in Clean Water and Sanitation Program</h2>
      <div className='container d-flex justify-content-center align-items-center vh-100'>
      <div className='card p-4'>
        <h1 className='text-center mb-4'>Registration Form</h1>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='firstName' className='form-label'>
              Enter the First Name
            </label>
            <input
              type='text'
              className={`form-control ${errors.firstName && 'is-invalid'}`}
              id='firstName'
              name='firstName'
              value={formData.firstName}
              onChange={handleInputChange}
            />
            {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
          </div>
          <div className='mb-3'>
            <label htmlFor='lastName' className='form-label'>
              Enter the Last Name
            </label>
            <input
              type='text'
              className={`form-control ${errors.lastName && 'is-invalid'}`}
              id='lastName'
              name='lastName'
              value={formData.lastName}
              onChange={handleInputChange}
            />
            {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
          </div>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>
              Enter the E-mail
            </label>
            <input
              type='email'
              className={`form-control ${errors.email && 'is-invalid'}`}
              id='email'
              name='email'
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
          </div>
          <div className='mb-3'>
            <label htmlFor='phoneNumber' className='form-label'>
              Enter the Phone Number
            </label>
            <input
              type='tel'
              className={`form-control ${errors.phoneNumber && 'is-invalid'}`}
              id='phoneNumber'
              name='phoneNumber'
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
            {errors.phoneNumber && <div className='invalid-feedback'>{errors.phoneNumber}</div>}
          </div>
          <div className='d-grid gap-2'>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
    <div style={{marginLeft:"100px"}}>
      <h4>Click Here to know Current Policy and schemes in India</h4>
      <span className='p-4 mt-5'><a href='https://pib.gov.in/PressReleaseIframePage.aspx?PRID=1914351' target='-blank'> Policy for RainWater Harvesting In India</a></span>
      <div className='p-4'><a href='https://goawrd.gov.in/schemes-policies/rain-water-harvesting' target='-blank'> Subsidies for RainWater Harvesting In India</a></div>
    </div>

    </Element>

);
}