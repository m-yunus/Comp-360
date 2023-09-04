import { FaHome} from "react-icons/fa"
import {AiOutlinePoweroff} from "react-icons/ai"
import Logo from "../assets/images/logo/image-removebg-preview.png";
import User from "../assets/images/images/portrait-smiling-blonde-woman.jpg"
import "../assets/css/dashboard.css"
import { useDataContext } from "../Context/Context";
const Navbar = () => {

const {user}=useDataContext();
  
  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <div className="navbar-right">
          <div style={{ gap: "1rem" }} className="navbar-user">
            <FaHome className="navbar-icon" style={{ color: "white" }} />
            <img src={User} alt="Profile" className="profile-picture" />

            <span className="username">{user}</span>
            <span className="username">Logout</span>
            <AiOutlinePoweroff
              className="navbar-icon"
              style={{ color: "white" }}
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar