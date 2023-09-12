import React from "react";
import "./Merit_Pop_Up.css";

const Merit_Pop_Up = () => {
  return (
    <>
      <div className="merit ">
        <div className="merit-popup">
          <div className="merit-popup-top ">
            <h1>Raj Kumar</h1>
            <div className="flex items-center justify-center">
              <button className="popup-button">3</button>
              <button className="popup-button">102%</button>
              <button className="popup-button">95%</button>
            </div>
          </div>
          <div className="flex  justify-between leading-tight mt-4 items-center ps-2">
            <h3>Base Pay $65,000</h3>
            <h3>Step Pay: 1500(1.5%)</h3>
            <div className="flex flex-col text-right bg-gray-300 w-32 h-10 justify-center pe-2">
              <h3>$66,500</h3> <h3> Base Pay + Step</h3>
            </div>
          </div>
          <div className="flex mt-6 justify-between px-2">
            <h3>Guideline: $800 to $1,200 (8% to 12%)</h3>
            <div className="flex">
              <ul className="Culture-inputbox-list performance-inputs merit-popup-input ">
                <li>
                  <label htmlFor="">Recommendation</label>
                  <input type="text" />
                  <p></p>
                </li>
              </ul>
              <div className=" leading-tight ms-2">
                <p>%</p>
                <input type="checkbox" name="" id="" />
              </div>
            </div>
          </div>

          <div className="mx-auto">
            <ul className="Culture-inputbox-list performance-inputs merit-popup-input-2 mt-2 px-2 ">
              <li>
                <label htmlFor="">Justification</label>
                <input type="text" />
                <p></p>
              </li>
            </ul>
          </div>
          <div className="bg-gray-300 h-6 items-center flex px-2">
            <h3>Base pay as recommended: $67,700</h3>
          </div>
          <div className=" flex gap-2 justify-end mt-4 px-2">
            <button className="bck-btn w-20 h-7 flex items-center justify-center">
              Back
            </button>
            <button className="cnt-btn  w-20 h-7 flex items-center justify-center">
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Merit_Pop_Up;
