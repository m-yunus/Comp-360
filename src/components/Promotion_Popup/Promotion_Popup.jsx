import React from 'react'
import "./Promotion_Popup.css"

const Promotion_Popup = () => {
  return (
    <>
      <div className="merit ">
        <div className="merit-popup h-[300px]">
          <div className="merit-popup-top ">
            <h1>Raj Kumar</h1>
            <div className="flex items-center justify-center">
              <button className="popup-button">3</button>
              <button className="popup-button">102%</button>
              <button className="popup-button">95%</button>
            </div>
          </div>
          <div className="flex  justify-between leading-tight mt-4 items-center px-2">
            <h3>Manager IT</h3>
            <h3>Grade 17</h3>
          </div>
          <div className="flex mt-6 justify-between px-2">
            <h3>Proposed title</h3>
            <div className="flex">
              <ul className="Culture-inputbox-list performance-inputs merit-popup-input ">
                <li>
                  <label htmlFor="">Recommendation</label>
                  <input type="text" />
                  <p></p>
                </li>
              </ul>
             
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
         
          <div className=" flex gap-2 justify-end mt-2 px-2">
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
}

export default Promotion_Popup