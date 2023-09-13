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
          <hr />
          <p>
            Welcome Anfas Kunhinohannad. As a supervisor, you can recommend
            merit, bonus, and promotion to eligible team members through this
            portal. Your HR team is available to assist you throughout the
            process.
          </p>
        </div>
        <div className="dash-right">
          <div className="flex justify-between ">
            <div>
              <h1>My Dashboard</h1>
              <hr />
            </div>

            <div className="time-left flex justify-between items-center ps-2">
              Time Left
              <div className="time-left-right">24 Days : 5 Houres : 37 min</div>
            </div>
          </div>
          <div className="mt-6 flex justify-between">
            <table className="dash-right-table">
              <tr>
                <td>Merit Eligible</td>
                <td className="text-center">231</td>
              </tr>
              <tr>
                <td>Promotion Eligible</td>
                <td className="text-center">447</td>
              </tr>
              <tr>
                <td>Bonus Eligible</td>
                <td className="text-center">223</td>
              </tr>
              <tr>
                <td>Total Eligible</td>
                <td className="text-center"> 223</td>
              </tr>
            </table>
            <table className="dash-right-table">
              <tr>
                <td>Review Completed</td>
                <td className="text-center">13</td>
              </tr>
              <tr>
                <td>Review Pending</td>
                <td className="text-center">223</td>
              </tr>
              <tr>
                <td>Reopened for Review</td>
                <td className="text-center">0</td>
              </tr>
              <tr>
                <td>Total Review</td>
                <td className="text-center">236</td>
              </tr>
            </table>
          </div>

          <div className="mt-6 flex justify-between">
            <table className="dash-right-table">
              <tr>
                <td>Merit Budget</td>
                <td className="text-center">₹592,106.00</td>
              </tr>
              <tr>
                <td>Utilized</td>
                <td className="text-center">₹22,934.00</td>
              </tr>
              <tr>
                <td>Balance</td>
                <td className="text-center">₹569,172.00</td>
              </tr>
            </table>
            <table className="dash-right-table">
              <tr>
                <td>Bonus Budget</td>
                <td className="text-center">₹382,878.00</td>
              </tr>
              <tr>
                <td>Utilized</td>
                <td className="text-center">₹0.00</td>
              </tr>
              <tr>
                <td>Balance</td>
                <td className="text-center">₹382,878.00</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
