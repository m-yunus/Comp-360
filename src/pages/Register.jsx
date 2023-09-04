import RegisterForm from "../components/RegisterForm"
import "../assets/css/login.css";
import Logo from "../assets/images/logo/image-removebg-preview.png";


const Register = () => {
  return (
    <div className="login-container">
      <RegisterForm />

      <div className="left-section">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="quotes">
          <p>" You gotta be in to create the experience WOW! "</p>
          <span className="flex items-center  ">
            <hr className="login-line" />
            Steve Maraboli
          </span>
        </div>
      </div>
      <div className="right-section">
        <div className="half-circle-big">
          <div className="half-circle-small"></div>
        </div>

        <div className="footer">
          <p>copyright © 2021 </p>
        </div>
      </div>
    </div>
  );
}

export default Register