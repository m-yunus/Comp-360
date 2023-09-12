import React from "react";
import "./Download_Budget.css"

const Download_Budget = () => {
  return (
    <>
      <div>
        <table className="download-budget-table mx-auto">
          <tr>
            <td>Department</td>
            <td>Budget</td>
            <td>Spent</td>
            <td>Delta</td>
          </tr>
          <tr>
            <td>HR</td>
            <td>98428</td>
            <td>106223</td>
            <td>8%</td>
          </tr>
          <tr>
            <td>IT</td>
            <td>109915</td>
            <td>97548</td>
            <td>-11%</td>
          </tr>
          <tr>
            <td>Finance</td>
            <td>96032</td>
            <td>78884</td>
            <td>-18%</td>
          </tr>
          <tr>
            <td>Sales</td>
            <td>98737</td>
            <td>99730</td>
            <td>1%</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Download_Budget;
