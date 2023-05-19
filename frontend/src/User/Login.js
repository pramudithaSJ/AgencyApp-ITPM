import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8020/user/login", formData);
      console.log(response.data); 

      alert("Successfully login")

      localStorage.setItem("id", response.data._id);

      // Reset form fields
      setFormData({
        email: "",
        password: "",
      });
    } catch (error) {
        alert("Invalid Credentials")
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form
        className="bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3 h-2/3"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 mt-8 text-center">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-7"
            type="submit"
          >
            Login
          </button>
        </div>
        <div>
            <p className="text-center mt-5">Don't have an account?  <a href="/register" className="text-red-500 underline">Signup</a></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
