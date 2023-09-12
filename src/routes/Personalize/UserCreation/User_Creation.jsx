import { useEffect, useState } from "react";
import "./usercreation.css";
import { AiFillDelete } from "react-icons/ai";

import axios from "axios";
import { BaseUrl } from "../../../ApiService/ApiService";
import { FaEdit } from "react-icons/fa";
import SuccessModal from "../../../components/Loginsuccess/SuccessModal";
import Error from "../../../components/Error/Error";

const User_Creation = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(-1);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [accessItems, setAccessItems] = useState([]);
  const [additionalField, setAdditionalField] = useState("");
  const [selectedAccessOption, setSelectedAccessOption] = useState("Country");
  const [uservalues, setuservalues] = useState({
    user_name: "",
    user_email: "",
    user_password: "",
    role: "HR",
    limit_access: true,
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIserror] = useState(false);
  const [errorStatus, seterrorStatus] = useState("");
  const [gettedData, setUsergettedData] = useState([]);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const userformData = {
    user_name: uservalues.user_name,
    user_email: uservalues.user_email,
    user_password: uservalues.user_password,
    role: uservalues.role,
    limit_access: uservalues.limit_access,
    access_grant: accessItems
      
    ,
  };

  const handleEdit = (index) => {
    setIsEditing(true);
    setEditingIndex(index);
    const itemToEdit = accessItems[index];
    setSelectedAccessOption(itemToEdit.option);
    setAdditionalField(itemToEdit.value);
  };

  const handleSaveEdit = () => {
    const updatedAccessItems = [...accessItems];
    updatedAccessItems[editingIndex] = {
      option: selectedAccessOption,
      value: additionalField,
    };
    setAccessItems(updatedAccessItems);
    setIsEditing(false);
    setSelectedAccessOption("Country");
    setAdditionalField("");
  };

  const handleSubmitdata = async (e) => {
    setIsModalOpen(false);
    e.preventDefault();
    const headers = {
      "x-access-token": sessionStorage.getItem("token"),
    };

    console.log(userformData);
    try {
      const response = await axios.post(
        `${BaseUrl}/api/personalize/user-creation`,
        userformData,
        { headers }
      );
      console.log("Form data submitted successfully:", response.data);
      setuservalues({
        user_name: "",
        user_email: "",
        user_password: "",
        role: "HR",
        limit_access: true,
      });
      setAccessItems([]);
      setAdditionalField("");
      setSelectedAccessOption("Country");
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
    // Clear input fields after successful submission
  };

  const handleRestrict = () => {
    if (additionalField.trim() !== "") {
    
     
      setAccessItems([
        ...accessItems,
        { [selectedAccessOption]:additionalField},
      ]);
      setAdditionalField("");
      setSelectedAccessOption("Country");

    }
   
  };
  console.log(accessItems,"jdgshjgsdhsdg");
  const handleDelete = (index) => {
    const updatedAccessItems = accessItems.filter((_, i) => i !== index);
    setAccessItems(updatedAccessItems);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setuservalues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      const headers = {
        "x-access-token": sessionStorage.getItem("token"),
      };
      try {
        const response = await axios.get(
          `${BaseUrl}/api/personalize/user-reading`,
          {
            headers,
          }
        );

        setUsergettedData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDeleteUser = async (userId) => {
    const headers = {
      "x-access-token": sessionStorage.getItem("token"),
    };

    try {
      const response = await axios.post(
        `${BaseUrl}/api/personalize/user-deletion`,
        { user_id: userId },
        { headers }
      );

      // Assuming the deletion was successful on the server
      console.log("User deleted successfully:", response.data);

      // Update the list of users displayed on the frontend.
      gettedData.filter((user) => console.log(user._id));
      setUsergettedData(response.data.users);

      if (response.status === 200) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Error deleting user:", error);

      if (error.response.status === 401) {
        seterrorStatus(error.response.data.message);
        setIserror(true);
        setTimeout(() => {
          setIserror(false);
        }, 3000);
      }
    }
  };

  console.log(gettedData);
  const renderAccessItems = () => {
    return accessItems.map((item, index) => (
      <div className="access-item" key={index}>
        {isEditing && editingIndex === index ? (
          <>
            <select
              className="edit-select"
              value={selectedAccessOption}
              onChange={(e) => setSelectedAccessOption(e.target.value)}
            >
              <option value="Country">Country</option>
              <option value="Department">Department</option>
              <option value="Grade">Grade</option>
              <button onClick={handleSaveEdit}>Save</button>
            </select>
            <input
              className=" border border-gray-500 w-20 edit-input"
              type="text"
              value={additionalField}
              onChange={(e) => setAdditionalField(e.target.value)}
            />
            <button className="edit-save" onClick={handleSaveEdit}>
              Save
            </button>
          </>
        ) : (
          <>
           


            <input
              type="text"
              value={`${Object.keys(item)}: ${item}`}
              readOnly
            />
            <span>
              <FaEdit
                className="user-creation-edit"
                onClick={() => handleEdit(index)}
              />
            </span>
            <span
              onClick={() => handleDelete(index)}
              style={{ cursor: "pointer", fontSize: "20px" }}
            >
              <AiFillDelete className="user-creation-delete" />
            </span>
          </>
        )}
      </div>
    ));
  };

  return (
    <>
      <div className="wrapper-right">
        <div className="dash-right-top">
          <div className="pathname">
            <h3>
              <span style={{ color: "skyblue" }}>Personalize</span>{" "}
              <span>/ User creation</span>
            </h3>
          </div>
          <button className="update-button" onClick={openModal}>
            Create User
          </button>
        </div>
        <div className="content-container">
          <div className="heading-container">
            <h4>User Creation</h4>
            <div style={{ width: "100px" }} className="underline-grey"></div>
          </div>
          <table className="user-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Criteria</th>
                <th></th>
              </tr>
            </thead>
            {gettedData.map((item, i) => (
              <tr key={i}>
                <td>{item?.user_name}</td>
                <td>{item?.user_email}</td>
                <td>{item?.role}</td>
                <td>
                  {item?.user_access_criteria?.map((items) => items?.access_grant)}
                </td>
                <td>
                  <span>
                    <FaEdit />
                  </span>
                  <span
                    onClick={() => handleDeleteUser(item._id)}
                    style={{ cursor: "pointer" }}
                  >
                    {" "}
                    <AiFillDelete />
                  </span>{" "}
                </td>
              </tr>
            ))}

            <tbody>{/* You can add more rows as needed */}</tbody>
          </table>
        </div>

        {isModalOpen && (
          <div className="custom-modal">
            <div className="usermodal-content">
              <div className="heading-container">
                <h4>User Creation</h4>
                <div
                  style={{ width: "100px" }}
                  className="underline-grey"
                ></div>
              </div>
              <div className="text-fields-row">
                <input
                  type="text"
                  name="user_name"
                  placeholder="FullName"
                  value={uservalues.user_name}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="user_email"
                  placeholder="Email"
                  value={uservalues.user_email}
                  onChange={handleInputChange}
                />
                <select
                  name="role"
                  value={uservalues.role}
                  onChange={(e) =>
                    setuservalues((prevData) => ({
                      ...prevData,
                      role: e.target.value,
                    }))
                  }
                >
                  <option value="HR">HR</option>
                  <option value="SubHR">SubHR</option>
                  <option value="Manager">manager</option>
                </select>
                <input
                  type="password"
                  name="user_password"
                  placeholder="password"
                  value={uservalues.user_password}
                  onChange={handleInputChange}
                />
              </div>
              <div className="radio-row flex ">
                <span>Do You want to limit the access for the user</span>

                <label className="flex items-center">
                  <input
                    type="radio"
                    name="limit_access"
                    value="true"
                    checked={uservalues.limit_access}
                    onChange={() =>
                      setuservalues((prevData) => ({
                        ...prevData,
                        limit_access: true,
                      }))
                    }
                  />
                  Yes
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="limit_access"
                    value="false"
                    checked={!uservalues.limit_access}
                    onChange={() =>
                      setuservalues((prevData) => ({
                        ...prevData,
                        limit_access: false,
                      }))
                    }
                  />
                  No
                </label>
              </div>
              <div className="access-row">
                <select
                  value={selectedAccessOption}
                  onChange={(e) => setSelectedAccessOption(e.target.value)}
                >
                  <option value="Country">Country</option>
                  <option value="Department">Department</option>
                  <option value="Grade">Grade</option>
                  {/* Add more options as needed */}
                </select>
                <input
                  type="text"
                  placeholder="Additional Field"
                  value={additionalField}
                  onChange={(e) => setAdditionalField(e.target.value)}
                />
                <button onClick={handleRestrict}>Restrict</button>
              </div>
              <div className="heading-container">
                <h4>Access Granted</h4>
                <div
                  style={{ width: "120px" }}
                  className="underline-grey"
                ></div>
              </div>
              <div className="accesitem-container">
                {renderAccessItems()}
                {/* {accessItems.map((item, index) => (
                  <div className="access-item" key={index}>
                    <input
                      type="text"
                      value={`${item.option}: ${item.value}`}
                      readOnly
                    />

                    <span>
                      <FaEdit className="user-creation-edit" />
                    </span>
                    <span
                      onClick={() => handleDelete(index)}
                      style={{ cursor: "pointer", fontSize: "20px" }}
                    >
                      <AiFillDelete className="user-creation-delete" />
                    </span>
                  </div>
                ))} */}
              </div>
              <button onClick={handleSubmitdata}>Add user</button>
            </div>
          </div>
        )}
      </div>
      {isSuccess && <SuccessModal status="Success" />}
      {isError && <Error status={errorStatus} />}
    </>
  );
};

export default User_Creation;
