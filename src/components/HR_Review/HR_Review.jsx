import React from "react";
import "./HR_Review.css";
import { ImArrowUp } from "react-icons/im";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";

const HR_Review = () => {
  return (
    <>
      <div className="merit ">
        <div className="flex justify-between">
          <div className="flex budget-review">
            <input
              type="text"
              placeholder="Search"
              className="search-budget-review"
            />{" "}
            <input type="checkbox" className="w-4" name="" id="" />{" "}
            <label htmlFor="">Entire DB</label>
          </div>
          <div className="hr-btn ">
            <button className="me-4">3</button> <button>102%</button>
          </div>
        </div>

        <div>
          <table className="budjet-review-table mt-10">
            <tbody>
              <tr className="">
                <th>
                  <div className="flex items-center justify-center">
                    ID
                    <ImArrowUp />
                  </div>
                </th>
                <th className=" w-32">
                  <div className="flex items-center justify-center">
                    Name
                    <ImArrowUp />
                  </div>
                </th>
                <th>
                  <div className="flex items-center justify-center">
                    Title <ImArrowUp />
                  </div>
                </th>
                <th>
                  <div className="flex items-center justify-center">
                    Grade <ImArrowUp />
                  </div>
                </th>
                <th>
                  <div className="flex items-center justify-center">
                    {" "}
                    Department <ImArrowUp />
                  </div>
                </th>
                <th>
                  <div className="flex items-center justify-center">
                    {" "}
                    Performance <ImArrowUp />
                  </div>
                </th>
                <th>
                  <div className="flex items-center justify-center">
                    {" "}
                    Parity <ImArrowUp />
                  </div>
                </th>
                <th>
                  <div className="flex items-center justify-center">
                    {" "}
                    Pro-Ration <ImArrowUp />
                  </div>
                </th>
                <th>
                  <div className="flex items-center justify-center  w-[120px] leading-4">
                    {" "}
                    Merit Recommendation <ImArrowUp />
                  </div>
                </th>
                <th>
                  <div className="flex items-center justify-center   w-[120px] leading-4">
                    {" "}
                    Bonus 1 Recommendation <ImArrowUp />
                  </div>
                </th>
                <th>
                  <div className="flex items-center justify-center   w-[120px] leading-4">
                    {" "}
                    Bonus 2 Recommendation
                    <ImArrowUp />
                  </div>
                </th>
                <th>
                  <div className="flex items-center justify-center">
                    {" "}
                    Review <ImArrowUp />
                  </div>
                </th>
              </tr>
              <tr>
                <td>
                  <p className="flex justify-center">ID</p>
                </td>
                <td>
                  <p className="flex justify-center">Raj Kumar</p>
                </td>
                <td>
                  {" "}
                  <p className="flex justify-center">Manager</p>
                </td>
                <td>
                  {" "}
                  <p className="flex justify-center">16</p>
                </td>
                <td>
                  {" "}
                  <p className="flex justify-center">IT</p>
                </td>
                <td>
                  <div className="flex justify-center">
                    <button>3</button>
                  </div>
                </td>
                <td>
                  <div className="flex justify-center">
                    <button>102%</button>
                  </div>
                </td>
                <td>
                  <div className="flex justify-center">
                    <button>95%</button>
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center  w-[120px] ">
                    <p className="flex justify-center  ">$500</p>
                    <GoTriangleDown className="text-green-500 ms-1 text-xl" />
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center  w-[120px] ">
                    <p className="flex justify-center  ">$1000</p>
                    <GoTriangleUp className="text-red-500 ms-1 text-xl" />
                  </div>
                </td>
                <td>
                  <div className="flex items-center justify-center  w-[120px] ">
                    <p className="flex justify-center ">$800</p>
                    <GoTriangleUp className="text-red-500 ms-1 text-xl" />
                  </div>
                </td>
                <td>
                  <div className="flex justify-center">
                    <div className="flex justify-center items-center bg-green-500 rounded-full w-6 h-6 ">
                      <p className="text-white mb-1">. . .</p>
                    </div>
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

export default HR_Review;
