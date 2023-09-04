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
            <div className="input-container input-set">
              <input
                className="input"
                
                type="text"
                name="username"
                onChange={handleonchange}
                value={loginData.username}
              />
              <label className="placeholder" htmlFor="">
                Email
              </label>
              <span className="icon">
                <FaUser />
              </span>
            </div>
            <div className="input-container input-set mt-5">
              <input
                className="input"
               
                type="password"
                name="password"
                onChange={handleonchange}
                value={loginData.password}
              />
              <label className="placeholder" htmlFor="">
                Password
              </label>
              <span className="icon">
                <FaEye />
              </span>
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
