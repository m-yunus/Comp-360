import React from 'react'
import "./Subscription_Management.css"
import { FaSquare } from "react-icons/fa";

const Subscription_Management = () => {
  return (
    <>
      <div className="merit subs-mngmnt ">
        <button className="save-btn">Save</button>
        <div className="subs-mngmnt flex gap-20">
          <h2>Plan Name</h2>
          <input type="text" placeholder="Browse" />
        </div>
        <div>
          <ul>
            <div>
              <li className="flex items-center">
                <p className=" w-[300px]">1. Home page</p>{" "}
                <input type="checkbox" name="" id="" />
              </li>
              <span className="flex items-center mt-[-6px]">
                <FaSquare className="w-1 ms-4 me-1 " />{" "}
                <p className=" w-[276px]"> Personalization</p>{" "}
                <input type="checkbox" name="" id="" />{" "}
              </span>
            </div>
            <div>
              <li className="flex items-center">
                <p className=" w-[300px]">2. Multi currency</p>{" "}
                <input type="checkbox" name="" id="" />
              </li>
            </div>
            <div>
              <li className="flex items-center">
                <p className=" w-[300px]">3. Split Manager & Matrix manager</p>{" "}
                <input type="checkbox" name="" id="" />
              </li>
            </div>
            <div>
              <li className="flex items-center">
                <p className=" w-[300px]">4. Execute</p>{" "}
                <input type="checkbox" name="" id="" />
              </li>
            </div>
            <div>
              <li className="flex items-center">
                <p className=" w-[300px]">5. TRS</p>{" "}
                <input type="checkbox" name="" id="" />
              </li>
              <span className="flex items-center mt-[-6px]">
                <FaSquare className="w-1 ms-4 me-1 " />{" "}
                <p className=" w-[276px]"> Template 1</p>{" "}
                <input type="checkbox" name="" id="" />{" "}
              </span>
              <span className="flex items-center mt-[-6px]">
                <FaSquare className="w-1 ms-4 me-1 " />{" "}
                <p className=" w-[276px]"> Template 2</p>{" "}
                <input type="checkbox" name="" id="" />{" "}
              </span>
            </div>
            <div>
              <li className="flex items-center">
                <p className=" w-[300px]">6. Report</p>{" "}
                <input type="checkbox" name="" id="" />
              </li>
              <span className="flex items-center mt-[-6px]">
                <FaSquare className="w-1 ms-4 me-1 " />{" "}
                <p className=" w-[276px]"> Filters</p>{" "}
                <input type="checkbox" name="" id="" />{" "}
              </span>
            </div>
            <div>
              <li className="flex items-center">
                <p className=" w-[300px]">7. Audit</p>{" "}
                <input type="checkbox" name="" id="" />
              </li>
            </div>
            <div>
              <li className="flex items-center">
                <p className=" w-[300px]">8. Supervisor Allocation</p>{" "}
                <input type="checkbox" name="" id="" />
              </li>
            </div>
            <div>
              <li className="flex items-center">
                <p className=" w-[300px]">9. Supervisor login</p>{" "}
                <input type="checkbox" name="" id="" />
              </li>
              <span className="flex items-center mt-[-6px]">
                <FaSquare className="w-1 ms-4 me-1 " />{" "}
                <p className=" w-[276px]"> Employee letters</p>{" "}
                <input type="checkbox" name="" id="" />{" "}
              </span>
            </div>
            <div>
              <li className="flex items-center">
                <p className=" w-[300px]">10. Manager login</p>{" "}
                <input type="checkbox" name="" id="" />
              </li>
              <span className="flex items-center mt-[-6px]">
                <FaSquare className="w-1 ms-4 me-1 " />{" "}
                <p className=" w-[276px]"> Employee letters</p>{" "}
                <input type="checkbox" name="" id="" />{" "}
              </span>
            </div>
            <div>
              <li className="flex items-center">
                <p className=" w-[300px]">11. Sub HR</p>{" "}
                <input type="checkbox" name="" id="" />
              </li>
            </div>
            <div>
              <li className="flex items-center">
                <p className=" w-[300px]">12. Setiings page</p>{" "}
                <input type="checkbox" name="" id="" />
              </li>
              <span className="flex items-center mt-[-6px]">
                <FaSquare className="w-1 ms-4 me-1 " />{" "}
                <p className=" w-[276px]"> Exclusion criteria</p>{" "}
                <input type="checkbox" name="" id="" />{" "}
              </span>
              <span className="flex items-center mt-[-6px]">
                <FaSquare className="w-1 ms-4 me-1 " />{" "}
                <p className=" w-[276px]"> Second matrix</p>{" "}
                <input type="checkbox" name="" id="" />{" "}
              </span>
              <span className="flex items-center mt-[-6px]">
                <FaSquare className="w-1 ms-4 me-1 " />{" "}
                <p className=" w-[276px]"> HRIS Integration</p>{" "}
                <input type="checkbox" name="" id="" />{" "}
              </span>
              <span className="flex items-center mt-[-6px]">
                <FaSquare className="w-1 ms-4 me-1 " />{" "}
                <p className=" w-[276px]"> History data</p>{" "}
                <input type="checkbox" name="" id="" />{" "}
              </span>
              <span className="flex items-center mt-[-6px]">
                <FaSquare className="w-1 ms-4 me-1 " />{" "}
                <p className=" w-[276px]">
                  Attachments for supervisors & managers
                </p>{" "}
                <input type="checkbox" name="" id="" />{" "}
              </span>
              <span className="flex items-center mt-[-6px]">
                <FaSquare className="w-1 ms-4 me-1 " />{" "}
                <p className=" w-[276px]">
                  Reuse plan
                </p>{" "}
                <input type="checkbox" name="" id="" />{" "}
              </span>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Subscription_Management