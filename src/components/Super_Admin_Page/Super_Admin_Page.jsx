import React from 'react'
import "./Super_Admin_Page.css"
const Super_Admin_Page = () => {
  return (
    <>
      <div className="merit relative">
        <button className="save-btn">Save</button>
        <div className="flex gap-20">
          <h2>Upload user manual?</h2>

          <input
            className="popup-input super-admin-input "
            type="file"
            name=""
            id=""
          />
        </div>
        <div className="flex flex-col mt-20">
          <h2>User access for manual and personalization</h2>
          <table className="super-admin-table">
            <tr>
              <td>Client ID</td>
              <td>Client Name</td>
              <td>Admin</td>
              <td>Admin Email</td>
              <td className="text-center">User Manual</td>
              <td className="text-center">Personalization</td>
            </tr>
            <tr>
              <td>1</td>
              <td>XYZ Corp</td>
              <td>Jacob</td>
              <td>name@company.com</td>
              <td className="text-center">
                <input type="checkbox" name="" id="" />
              </td>
              <td className="text-center">
                <input type="checkbox" name="" id="" />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>XYZ Corp</td>
              <td>Jacob</td>
              <td>name@company.com</td>
              <td className="text-center">
                <input type="checkbox" name="" id="" />
              </td>
              <td className="text-center">
                <input type="checkbox" name="" id="" />
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>XYZ Corp</td>
              <td>Jacob</td>
              <td>name@company.com</td>
              <td className="text-center">
                <input type="checkbox" name="" id="" />
              </td>
              <td className="text-center">
                <input type="checkbox" name="" id="" />
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>XYZ Corp</td>
              <td>Jacob</td>
              <td>name@company.com</td>
              <td className="text-center">
                <input type="checkbox" name="" id="" />
              </td>
              <td className="text-center">
                <input type="checkbox" name="" id="" />
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default Super_Admin_Page