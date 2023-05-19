import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MyProfile = () => {

    const navigate = useNavigate();

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    NIC:"",
    email: "",
    contact: "",
    password:""
  });

  useEffect(() => {
    const userId = localStorage.getItem("id")
    console.log(userId);
    // Fetch user details from the backend
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:8020/user/get/${userId}`);
        const user = response.data; 
        setUserData(user);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, []);

  const handleClick = () => {
    navigate("/updateprofile");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3">
        <h2 className="text-2xl font-bold mb-6 text-center">My Profile</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="firstName"
            name="firstName"
            value={userData.firstName}
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="lastName"
            name="lastName"
            value={userData.lastName}
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            NIC
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="NIC"
            name="NIC"
            value={userData.NIC}
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            id="email"
            name="email"
            value={userData.email}
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
            Contact
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="contact"
            name="contact"
            value={userData.contact}
            readOnly
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contact">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="password"
            name="password"
            value={userData.password}
            readOnly
          />
        </div>
        <div className="mt-5"></div>
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 ml-6 rounded focus:outline-none focus:shadow-outline w-1/3" onClick={handleClick}>
            Update
        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/3" onClick={handleClick}>
            Upload CV
        </button>
      </form>
    </div>
  );
};

export default MyProfile;
