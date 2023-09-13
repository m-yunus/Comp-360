import React from "react";
import "./Dashboard.css";
import Navbar from "../../layout/Navbar";
import trophy from "../../assets/images/images/trophy.jpg";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="dashboard">
        <div className="dash-left">
          <img src={trophy} alt="" />
          <h1>IT'S TIME TO REWARD</h1>
          <p>
            Welcome Anfas Kunhinohannad. As a supervisor, you can recommend
            merit, bonus, and promotion to eligible team members through this
            portal. Your HR team is available to assist you throughout the
            process.
          </p>
        </div>
        <div className="dash-right">

        </div>
      </div>
    </>
  );
};

export default Dashboard;
