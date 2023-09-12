import React from "react";
import "./Merit_budget_c.css";

const Merit_budget_c = () => {
  return (
    <>
      <div className="merit">
        <div className="flex">
          <h2>
            What is your preferred matrix type for &#123; Group 1 &#125; ?
          </h2>
          <span className="radio-button-group flex items-center ms-10 ">
            <input type="radio" name="" id="" />
            <h3>3X3</h3>
          </span>
          <span className="flex items-center ms-10">
            <input type="radio" name="" id="" />
            <h3>3X5</h3>
          </span>
          <span className="flex items-center ms-10">
            <input type="radio" name="" id="" />
            <h3>Custom</h3>
          </span>
        </div>
        <div className="budjet-c">
          <p className=" flex justify-end">8%, $367,000</p>
          <div className="flex justify-end">
            <table className="budjet-table-a">
              <tbody>
                <tr>
                  <td colSpan="3">Parity (Comp-Ratio or RP)</td>
                </tr>
                <tr>
                  <td>Low to 80</td>
                  <td>80 to 120</td>
                  <td>120 & more</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex gap-5 mt-5 justify-end">
            <table className="budjet-table-b">
              <tr>
                <td className="center-text">Performance</td>
                <td>
                  <div className="rows">3</div>
                  <div className="rows">2</div>
                  <div className="">1</div>
                </td>
              </tr>
            </table>
            <table className="budjet-table-c">
              <tr>
                <td>20%</td>
                <td>15%</td>
                <td>10%</td>
              </tr>
              <tr>
                <td>12%</td>
                <td>10%</td>
                <td>8%</td>
              </tr>
              <tr>
                <td>7%</td>
                <td>5%</td>
                <td>2%</td>
              </tr>
            </table>
          </div>
          <div className="merit-bdjy-c-btn flex gap-20">
            <button className="bck-btn">Cancel</button>
            <button className="cnt-btn">Calculate</button>
          </div>
        </div>
        <div className="merit-budjet">
          <div className="flex ">
            <h2>Do you have a budget for covering pay gap?</h2>
            <div className="flex gap-8 ms-32">
              <span>
                <input type="radio" name="" id="" />
                Yes
              </span>
              <span className="ms-2">
                {" "}
                <input type="radio" name="" id="" />
                No
              </span>
            </div>
          </div>

          <div className="flex gap-8 my-4 items-center ms-20">
            <h2>Pay gap budget</h2>
            <input className="ms-[102px]" placeholder="Enter" type="text" />
            <span>
              <input type="radio" name="" id="" />%
            </span>
            <span className="ms-5">
              {" "}
              <input type="radio" name="" id="" />$
            </span>
          </div>
          <div className="flex gap-10">
            <h2>Do you want to keep a buffer?</h2>
            <span className="flex items-center ms-[187px]">
              <input type="radio" name="" id="" />
              Yes
            </span>
            <span className="flex items-center">
              {" "}
              <input type="radio" name="" id="" />
              No
            </span>
          </div>
          <div className="flex gap-8 my-4 items-center ms-20">
            <h2>Buffer required</h2>
            <input placeholder="Enter" className="ms-[105px]" type="text" />
            <span>
              <input type="radio" name="" id="" />%
            </span>
            <span className="ms-5">
              {" "}
              <input type="radio" name="" id="" />$
            </span>
          </div>
        </div>
        <div className="merit-buttons absolute bottom-0  right-10 pb-10 flex gap-20">
          <button className="bck-btn">Back</button>
          <button className="cnt-btn">Continue</button>
        </div>
        <div className="budjet">
          <h1>Budget</h1>
        </div>
      </div>
    </>
  );
};

export default Merit_budget_c;
