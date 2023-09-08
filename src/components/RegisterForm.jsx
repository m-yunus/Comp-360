import axios from "axios";
import { useState } from "react";
import { FaEye, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
import { BaseUrl } from "../ApiService/ApiService";

const RegisterForm = () => {
  const [register, setRegister] = useState({
    username: "",
    password: "",
    email: "",
    fullName: "",
  });

  const RegisterUrl =`${BaseUrl}/api/user/register`;


  const handleInput = (event) => {
    event.preventDefault();
    setRegister({ ...register, [event.target.name]: event.target.value });
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await axios.post(RegisterUrl, register);
      console.log("Registration successful:", response.data);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <>
      <div className="login-section">
        <form onSubmit={handleSubmit}>
          <div className="login-form">
            <h3 style={{ textAlign: "center" }}>Register</h3>
            <div className="relative flex items-center z-0 w-full mb-6 group">
              <input
                className=" block py-2.5 px-0 w-full text-sm   bg-transparent border-0 border-b-2 border-gray-100 appearance-none  dark:border-gray-600 dark:focus:border-blue-800 focus:outline-none focus:ring-0 focus:border-blue-800 peer"
                type="text"
                placeholder=""
                onChange={handleInput}
                name="username"
              />{" "}
              <span className="icon">
                <FaUser />
              </span>
              <label
                className="peer-focus:font-small absolute text-sm text-gray-800 dark:text-gray-900 duration-500 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-800 peer-focus:dark:text-blue-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                htmlFor=""
              >
                Name
              </label>
            </div>
            <div className="relative flex items-center z-0 w-full mb-6 group">
              <input
                className=" block py-2.5 px-0 w-full text-sm   bg-transparent border-0 border-b-2 border-gray-100 appearance-none  dark:border-gray-600 dark:focus:border-blue-800 focus:outline-none focus:ring-0 focus:border-blue-800 peer"
                type="text"
                placeholder=""
                onChange={handleInput}
                name="fullName"
              />
              <span className="icon">
                <FaUser />
              </span>
              <label
                className="peer-focus:font-small absolute text-sm text-gray-800 dark:text-gray-900 duration-500 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-800 peer-focus:dark:text-blue-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                htmlFor=""
              >
                Fullname
              </label>
            </div>
            <div className="relative flex items-center z-0 w-full mb-6 group">
              <input
                className=" block py-2.5 px-0 w-full text-sm   bg-transparent border-0 border-b-2 border-gray-100 appearance-none  dark:border-gray-600 dark:focus:border-blue-800 focus:outline-none focus:ring-0 focus:border-blue-800 peer"
                type="email"
                placeholder=""
                onChange={handleInput}
                name="email"
              />
              <span className="icon">
                <MdEmail />
              </span>
              <label
                className="peer-focus:font-small absolute text-sm text-gray-800 dark:text-gray-900 duration-500 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-800 peer-focus:dark:text-blue-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                htmlFor=""
              >
                Email
              </label>
            </div>
            <div className="relative flex items-center z-0 w-full mb-6 group">
              <input
                className=" block py-2.5 px-0 w-full text-sm   bg-transparent border-0 border-b-2 border-gray-100 appearance-none  dark:border-gray-600 dark:focus:border-blue-800 focus:outline-none focus:ring-0 focus:border-blue-800 peer"
                type="password"
                placeholder=""
                onChange={handleInput}
                name="password"
              />
              <span className="icon">
                <FaEye />
              </span>
              <label
                className="peer-focus:font-small absolute text-sm text-gray-800 dark:text-gray-900 duration-500 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-800 peer-focus:dark:text-blue-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                htmlFor=""
              >
                Password
              </label>
            </div>
            <button type="submit">Register</button>
            <div className="forgot-register-section mt-2">
              <p>
                <Link to="/">
                  <p>Already have an account ? </p>
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
