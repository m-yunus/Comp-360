import React from "react";
import {BsPersonCircle} from "react-icons/bs"
import "./Supervisor.css"
import {BsFillCheckCircleFill} from "react-icons/bs"


const Supervisor = () => {
  return (
    <>
      <div className="merit">
        {" "}
        <div className="flex justify-between">
          <div className="flex budget-review">
            <input
              type="text"
              placeholder="Search"
              className="search-budget-review"
            />{" "}
          </div>
        </div>
        <div>
          <table className="budjet-review-table    mt-10">
            <tbody className=" ">
              <tr className="">
                <th>
                  <div className="flex  items-center justify-center w-[220px]">
                    Name
                  </div>
                </th>
                <th className=" ">
                  <div className="flex items-center justify-center w-[90px] ms-[-30px]">
                    Performance
                  </div>
                </th>
                <th className=" ">
                  <div className="flex items-center justify-center w-[90px] ">
                    Parity
                  </div>
                </th>
                <th>
                  <div className="flex items-center justify-center  w-[90px]  ">
                    Pro-ration
                  </div>
                </th>
                <th>
                  <div className="flex items-center justify-center w-[90px] ">
                    Base Pay
                  </div>
                </th>
                <th>
                  <div className="flex items-center justify-center w-[90px] ">
                    Pay GAP
                  </div>
                </th>
                <th>
                  <div className="flex items-center justify-center">
                    Merit Guidelines
                  </div>
                </th>
                <th>
                  <div className="flex items-center justify-center w-[90px] ">
                    New Pay
                  </div>
                </th>
                <th>
                  <div className="flex items-center justify-center w-[220px]">
                    Bonus Guidelines
                  </div>
                </th>
                <th>
                  <div className="flex items-center justify-center   leading-4">
                    Recommend
                  </div>
                </th>
              </tr>
              <tr>
                <td>
                  <div className="flex items-center  w-[220px]">
                    <BsPersonCircle className="text-5xl me-2" />
                    <p className="flex justify-center">
                      Raj Kumar <br />
                      Sales Manager, Grade 15
                    </p>
                  </div>
                </td>
                <td>
                  <div className="flex justify-center  ms-[-30px] w-[90px] ">
                    <button>3</button>
                  </div>
                </td>
                <td>
                  <div className="flex justify-center  w-[90px] ">
                    <button>102%</button>
                  </div>
                </td>
                <td>
                  <div className="flex justify-center  w-[90px] ">
                    <button>95%</button>
                  </div>
                </td>
                <td>
                  <p className="flex justify-center w-[90px] ">$ 49,000</p>
                </td>
                <td>
                  <p className="flex justify-center w-[90px] ">$ 200</p>
                </td>
                <td>
                  <p className="flex justify-center">
                    $500 to 1,100 <br />
                    (5-11%)
                  </p>
                </td>
                <td>
                  <p className="flex justify-center w-[90px] ">?</p>
                </td>
                <td>
                  <div className="flex items-center justify-center  w-[220px] ">
                    <p className="flex justify-center  ">
                      Bonus 1: $500 to 1,100 (5-11%) <br /> Bonus 2: $500 to
                      1,100 (5-11%) <br /> Bonus 3: $500 to 1,100 (5-11%)
                    </p>
                  </div>
                </td>

                <td>
                  <div className="flex justify-center ">
                    {" "}
                    <div className="flex justify-center items-center bg-green-500 rounded-full w-6 h-6 ">
                      <p className="text-white mb-1">. . .</p>
                    </div>
                  </div>
                </td>
              </tr>
              <div></div>
              <tr>
                <td>
                  <div className="flex items-center  w-[220px]">
                    <BsPersonCircle className="text-5xl me-2" />
                    <p className="flex justify-center">
                      Raj Kumar <br />
                      Sales Manager, Grade 15
                    </p>
                  </div>
                </td>
                <td>
                  <div className="flex justify-center  ms-[-30px] w-[90px] ">
                    <button>3</button>
                  </div>
                </td>
                <td>
                  <div className="flex justify-center  w-[90px] ">
                    <button>102%</button>
                  </div>
                </td>
                <td>
                  <div className="flex justify-center  w-[90px] ">
                    <button>95%</button>
                  </div>
                </td>
                <td>
                  <p className="flex justify-center w-[90px] ">$ 49,000</p>
                </td>
                <td>
                  <p className="flex justify-center w-[90px] ">$ 49,000</p>
                </td>
                <td>
                  <p className="flex justify-center">$ 900</p>
                </td>
                <td>
                  <p className="flex justify-center w-[90px] "> $ 50,100</p>
                </td>
                <td>
                  <div className="flex items-center justify-center  w-[220px] ">
                    <p className="flex justify-center  ">Total Bonus: $ 1260</p>
                  </div>
                </td>

                <td>
                  <div className="flex justify-center ">
                    {" "}
                   <BsFillCheckCircleFill className="text-green-500 text-2xl"/>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Supervisor;
