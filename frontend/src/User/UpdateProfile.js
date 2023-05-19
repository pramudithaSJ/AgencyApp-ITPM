import React, { useEffect, useState } from "react";
import axios from "axios";

const UpdateProfile = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    NIC:"",
    email: "",
    contact: "",
    password:""
  });

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("id");
    console.log(userId);
    // Fetch user details from the backend
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:8020/user/get/${userId}`);
        const user = response.data; // Assuming the response contains user details
        setUserData(user);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    console.log("dd");
    setEditMode(true);
  };

  const handleSave = async () => {
    try {
      // Send updated user data to the backend
      await axios.put("http://localhost:8090/user/update/:id", userData);
      setEditMode(false);
      // Optionally display a success message or perform any other actions
    } catch (error) {
      console.log(error);
      // Optionally display an error message or perform any other actions
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
            readOnly={!editMode}
            onChange={handleChange}
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
            readOnly={!editMode}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
            NIC
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="NIC"
            name="NIC"
            value={userData.NIC}
            readOnly={!editMode}
            onChange={handleChange}
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
            readOnly={!editMode}
            onChange={handleChange}
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
            readOnly={!editMode}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="password"
            name="password"
            value={userData.password}
            readOnly={!editMode}
            onChange={handleChange}
          />
        </div>
        {editMode ? (
          <div className="flex justify-center">
            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        ) : (
          <div className="flex justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"
              onClick={handleEdit}
            >
              Edit
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default UpdateProfile;
