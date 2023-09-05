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
            <div className="input-container input-set">
              <input
                className="input"
                type="text"
                // placeholder="username"
                onChange={handleInput}
                name="username"
              />{" "}
              <label className="placeholder" htmlFor="">
                Name
              </label>
              <span className="icon">
                <FaUser />
              </span>
            </div>
            <div className="input-container input-set mt-3">
              <input
                className="input"
                type="text"
                // placeholder="Fullname"
                onChange={handleInput}
                name="fullName"
              />
              <label className="placeholder" htmlFor="">
                Fullname
              </label>
              <span className="icon">
                <FaUser />
              </span>
            </div>
            <div className="input-container input-set mt-3">
              <input
                className="input"
                type="email"
                // placeholder="E-mail"
                onChange={handleInput}
                name="email"
              />
              <label className="placeholder" htmlFor="">
                Email
              </label>
              <span className="icon">
                <MdEmail />
              </span>
            </div>
            <div className="input-container input-set mt-3">
              <input
                className="input"
                type="password"
                // placeholder="Password"
                onChange={handleInput}
                name="password"
              />
              <label className="placeholder" htmlFor="">
                Password
              </label>
              <span className="icon">
                <FaEye />
              </span>
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
