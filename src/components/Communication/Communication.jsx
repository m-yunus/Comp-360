import React, { useState } from "react";
import "./Communication.css";
import { BsPlusCircleFill } from "react-icons/bs";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Communication = () => {
  const [popUp, setPopup] = useState(false);
  const [value, setValue] = useState("");

  const openPopup = () => {
    setPopup(true);
  };

  const closePopup=()=>{
    setPopup(false);
  }
  return (
    <>
      <div
        className="merit blur-overlay"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <div className="flex justify-between">
          <h2>Communication</h2>
          <BsPlusCircleFill
            className="text-3xl cursor-pointer "
            onClick={openPopup}
            style={{ color: "#1877d2" }}
          />
        </div>
        <div
          style={{
            backgroundColor: "#fff",
            padding: " 20px",
            marginTop: "40px",
            height: "500px",
          }}
        >
          <table className="communication-table">
            <tr>
              <td>
                <input type="checkbox" name="" id="" />
              </td>
              <td>Subject</td>
              <td>Messasge type</td>
              <td>Template</td>
              <td>Message</td>
              <td>Date</td>
            </tr>
          </table>
        </div>
      </div>
      {popUp && (
        <div className="communication-popup ">
          <div>
            <h1>New Mail</h1>
            <select name="" id="">
              <option value="">Choose Template</option>
              <option value="">1</option>
              <option value="">2</option>
            </select>
            <input className="lll" type="text" placeholder="To" />
            <input type="text" placeholder="Subject" />
            <ReactQuill
              theme="snow"
              style={{ marginTop: "10px", border: "solid 1px gray" }}
              value={value}
              onChange={setValue}
            />
            <div className="flex gap-6 mt-4">
              <h2>Do you want to make this as a sheduled message? </h2>{" "}
              <span className="flex gap-1 items-center ">
                <input type="radio" name="" id="" />
                <h3>Yes</h3>
              </span>{" "}
              <span className="flex gap-1 items-center ">
                <input type="radio" name="" id="" />
                <h3>No</h3>
              </span>{" "}
            </div>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <label htmlFor="">Shedule date</label>
                <input type="date" name="" id="" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Shedule date</label>
                <input type="time" name="" id="" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Repeat</label>
                <select className="btm-slct" name="" id="">
                  <option value="">Choose a option</option>
                </select>
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Occurance</label>
                <select className="btm-slct" name="" id="">
                  <option value="">Choose a option</option>
                </select>
              </div>
            </div>
          </div>
          <div className=" flex gap-2 justify-end mt-4 px-2">
            <button
              onClick={closePopup}
              className="bck-btn w-20 h-7 flex items-center justify-center"
            >
              Cancel
            </button>
            <button className="cnt-btn  w-20 h-7 flex items-center justify-center">
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Communication;
