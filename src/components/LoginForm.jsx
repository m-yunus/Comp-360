import "../assets/css/login.css";
import { Link,  useNavigate } from "react-router-dom";
import { FaUser, FaEye } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { BaseUrl } from "../ApiService/ApiService";
import "./login.css"
import SuccessModal from "./Loginsuccess/SuccessModal";
import Error from "./Error/Error";
import { useDataContext } from "../Context/Context";

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [isError,setIserror]=useState(false);
  const[errorStatus,seterrorStatus]=useState("");
 
  const Loginurl=`${BaseUrl}/api/user/login`

  const navigate=useNavigate();
  const handleonchange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handlelogin = (e) => {
    e.preventDefault();
   
    const urlEncodedData = new URLSearchParams();
    urlEncodedData.append('username', loginData.username);
    urlEncodedData.append('password', loginData.password);

    axios
      .post(Loginurl, urlEncodedData)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.config.data);
          
          const token = response.data.token; 
          sessionStorage.setItem('token', token);
          localStorage.setItem('userName',loginData.username);
          setIsSuccess(true)
          if (!isSuccess){
            setTimeout(()=>{
              setIsSuccess(false)
             
            },3000)
            navigate('/userplan');
          }
   
            
        
          console.log(response);
         
  
        
        }
      })
      
      .catch((err) => {
        console.log(err);
        if(err.response.status ===401){
          seterrorStatus(err.response.data.message)
          setIserror(true)
          setTimeout(()=>{
            setIserror(false)
           
          },3000)
        }
      });
  };

  return (
    <>
      <div className="login-section">
        <div className="login-form">
          <h3 style={{ textAlign: "center" }}>Login</h3>
          <form onSubmit={handlelogin}>
            <div className="relative flex items-center z-0 w-full mb-6 group">
              <input
                className=" block py-2.5 px-0 w-full text-sm   bg-transparent border-0 border-b-2 border-gray-100 appearance-none  dark:border-gray-600 dark:focus:border-blue-800 focus:outline-none focus:ring-0 focus:border-blue-800 peer"
                placeholder=" "
              
                required
                type="text"
                name="username"
                onChange={handleonchange}
                value={loginData.username}
              />
              <span className="icon">
                <FaUser />
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
                className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-100 appearance-none  dark:border-gray-600 dark:focus:border-blue-800 focus:outline-none focus:ring-0 focus:border-blue-800 peer"
                type="password"
                placeholder=" "
              
                required
                name="password"
                onChange={handleonchange}
                value={loginData.password}
              />
              <span className="icon">
                <FaEye />
              </span>
              <label
                className="floating_password"
                class="peer-focus:font-small absolute text-sm text-gray-800 dark:text-gray-900 duration-500 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-800 peer-focus:dark:text-blue-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                htmlFor=""
              >
                Password
              </label>
            </div>

            <button type="submit">Login</button>
            <div className="forgot-register-section mt-4">
              <p>
                <a href="">Forgot Password?</a>
              </p>
              <p>
                <Link to="/Register">
                  <p>Register</p>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Success Popup */}
      {isSuccess && <SuccessModal status="Success" />}
      {isError && <Error status={errorStatus} />}
    </>
  );
};

export default LoginForm;
