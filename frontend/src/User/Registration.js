import React, { useState } from "react";
import axios from "axios";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    NIC: "",
    email: "",
    contact: "",
    password: "",
  });

  const { firstName, lastName, NIC, email, contact, password } = formData;

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    NIC: "",
    email: "",
    contact: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear the error message when the user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post("http://localhost:8020/user/register", formData);
      console.log(response.data); // Response from the backend

      alert("Register Successfully..!");

      // Reset form fields
      setFormData({
        firstName: "",
        lastName: "",
        NIC: "",
        email: "",
        contact: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    // Validate required fields
    Object.keys(formData).forEach((key) => {
      if (formData[key] === "") {
        newErrors[key] = "This field is required";
        isValid = false;
      }
    });

    // Validate contact length
    if (contact.length !== 10) {
      newErrors.contact = "Contact must be 10 characters";
      isValid = false;
    }

    // Validate NIC length
    if (NIC.length !== 12) {
      newErrors.NIC = "NIC must be 12 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.firstName && "border-red-500"
            }`}
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={handleChange}
            placeholder="Enter your first name"
            required
          />
          {errors.firstName && <p className="text-red-500 text-xs italic">{errors.firstName}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.lastName && "border-red-500"
            }`}
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={handleChange}
            placeholder="Enter your last name"
            required
          />
          {errors.lastName && <p className="text-red-500 text-xs italic">{errors.lastName}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="NIC">
            NIC
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.NIC && "border-red-500"
            }`}
            type="text"
            id="NIC"
            name="NIC"
            value={NIC}
            onChange={handleChange}
            placeholder="Enter your NIC number"
            pattern="[0-9]{12}"
            required
          />
          {errors.NIC && <p className="text-red-500 text-xs italic">{errors.NIC}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.email && "border-red-500"
            }`}
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
          {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
            Contact
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.contact && "border-red-500"
            }`}
            type="text"
            id="contact"
            name="contact"
            value={contact}
            onChange={handleChange}
            placeholder="Enter your contact number"
            pattern="[0-9]{10}"
            required
          />
          {errors.contact && <p className="text-red-500 text-xs italic">{errors.contact}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.password && "border-red-500"
            }`}
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
          {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
        </div>
        <div className="flex items-center justify-center mt-10">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
        </div>
        <div>
          <p className="text-center mt-5">
            Already have an account? <a href="/login" className="text-red-500 underline">Signin</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
