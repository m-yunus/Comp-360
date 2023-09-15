import React from 'react'
import {BsFillCheckCircleFill} from "react-icons/bs"
import "./Attachment_Popup.css"

const Attachment_Popup = () => {
  return (
    <>
      <div className="merit relative">
        <div className="merit-popup w-[400px] h-[300px]">
          <div className="merit-popup-top ">
            <h1>Raj Kumar</h1>
            <div className="flex items-center justify-center">
              <button className="popup-button">3</button>
              <button className="popup-button">102%</button>
              <button className="popup-button">95%</button>
            </div>
          </div>
          <div className="flex flex-col   leading-tight mt-4  px-2">
            <div className="flex justify-between mt-2">
              <h3>Merit</h3>
              <BsFillCheckCircleFill className="text-green-500 text-xl" />
            </div>
            <div className="flex justify-between mt-2">
              <h3>Bonus</h3>
              <BsFillCheckCircleFill className="text-green-500 text-xl" />
              
            </div>
            <div className="flex justify-between mt-2">
              <h3>Promotion</h3>
              <BsFillCheckCircleFill className="text-green-500 text-xl" />
            </div>
          </div>
          <div className="flex mt-2 justify-between px-2">
            <h1>Would you like to attach additional details?</h1>
            <span className="radio-button-group flex items-center  ">
              <input type="radio" name="" id="" />
              <h3>Yes</h3>
            </span>
            <span className="flex items-center ">
              <input type="radio" name="" id="" />
              <h3>No</h3>
            </span>
          </div>

          <div className="flex justify-end px-2">
            <input className="popup-input" type="file" name="" id="" />
          </div>

          <div className=" flex gap-2 justify-center mt-4 px-2">
            <button className="bck-btn w-22 h-7 flex items-center justify-center">
              Cancel
            </button>
            <button className="cnt-btn  w-22 h-7 flex items-center justify-center">
              Recommend
            </button>
          </div>
        </div>
        <div className="top-popup">
          <h1>That’s thoughtful!</h1>
        </div>
      </div>
    </>
  );
}

export default Attachment_Popup