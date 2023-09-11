import React from 'react'
import "./Budget_Review.css"
import { ImArrowUp } from "react-icons/im";

const Budget_Review = () => {
  return (
    <>
      <div className="merit ">
        <div className="flex budget-review">
          <input
            type="text"
            placeholder="Search"
            className="search-budget-review"
          />{" "}
          <input type="checkbox" className="w-4" name="" id="" />{" "}
          <label htmlFor="">Entire DB</label>
        </div>
        <div>
          <table className="budjet-review-table mt-10">
            <tbody>
              <tr>
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
                  <div className="flex items-center justify-center">
                    {" "}
                    Merit Guideline <ImArrowUp />
                  </div>
                </th>
                <th>
                  <div className="flex items-center justify-center">
                    {" "}
                    Bonus 1 Guideline <ImArrowUp />
                  </div>
                </th>
                <th>
                  <div className="flex items-center justify-center">
                    {" "}
                    Bonus 2 Guideline <ImArrowUp />
                  </div>
                </th>
                <th>
                  <div className="flex items-center justify-center">
                    {" "}
                    Bonus 3 Guideline <ImArrowUp />
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
                    <button>92%</button>
                  </div>
                </td>
                <td>
                  <p className="flex justify-center">
                    $500 - $1000 <br /> (3%-8%)
                  </p>
                </td>
                <td>
                  <p className="flex justify-center">
                    $500 - $1000 <br /> (3%-8%)
                  </p>
                </td>
                <td>
                  <p className="flex justify-center">
                    $120 - $2000 <br /> (30%-80%)
                  </p>
                </td>
                <td>
                  <p className="flex justify-center">
                    $120 - $2000 <br /> (30%-80%)
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Budget_Review