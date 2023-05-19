import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Update = () => {

    const navigate = useNavigate();
    let id = localStorage.getItem("id")
    
    const [user, setuser] = useState([]);
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [NIC, setNIC] = useState("");
    const [email, setemail] = useState("");
    const [contact, setcontact] = useState("");
    const [password, setpassword ]= useState("");


    useEffect(() => {
        // const loggedInUser = localStorage.getItem("user");
        // console.log(loggedInUser);

        function getUser() {
            axios.get("http://localhost:8020/user/get/" + id).then((res) => {
                setuser(res.data);
                console.log(res.data);
            }).catch((err) => {
            })
        }

        getUser();
    }, []);

    

    const firstNameSetter = (e) => {
        setfirstName(e.target.value);
    }
    const lastNameSetter = (e) => {
        setlastName(e.target.value);
    }
    const NICSetter = (e) => {
        setNIC(e.target.value);
    }
    const emailSetter = (e) => {
        setemail(e.target.value);
    }
    const contactSetter = (e) => {
        setcontact(e.target.value);
    }

    const passwordSetter = (e) => {
        setpassword(e.target.value);
    }

    const onSubmit = () => {
        const UpdateUser = {
            firstName: firstName,
            lastName: lastName,
            NIC: NIC,
            contact: contact,
            email: email,
            password: password
        };
        navigate("/myprofile");
        // const loggedInUser = localStorage.getItem("user");
        // console.log(loggedInUser);
        axios.put('http://localhost:8020/user/updateOne/' + id, UpdateUser).then(() => {

            alert("Updated successfully!!!");

        }).catch((err) => {
            alert(err);
        })
    }
  return (
    <div className="flex items-center justify-center h-screen">
      <form className="bg-gray-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3">
        <h2 className="text-2xl font-bold mb-6 text-center">Update Profile</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="firstName"
            name="firstName"
            placeholder={user.firstName}
           
            onChange={firstNameSetter}
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
            placeholder={user.lastName}
           
            onChange={lastNameSetter}
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
            placeholder={user.NIC}
           
            onChange={NICSetter}
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
            placeholder={user.email}
           
            onChange={emailSetter}
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
            placeholder={user.contact}
           
            onChange={contactSetter}
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
            placeholder={user.password}
           
            onChange={passwordSetter}
          />
        </div>
        

        <div className="flex justify-center">
            <button
              className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-3" type="submit"
              onClick={onSubmit}
            >
              Update
            </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
