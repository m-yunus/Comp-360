import axios from "axios";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { BaseUrl } from "../../ApiService/ApiService";
import Error from "../../components/Error/Error";
import SuccessModal from "../../components/Loginsuccess/SuccessModal";

const ExclusionCriteria = () => {
  const [checkboxStates, setCheckboxStates] = useState({
    merit: true,
    bonus: false,
  });
  const [criteria, setCriteria] = useState("");
  const [value, setValue] = useState("");
  const [exclusionList, setExclusionList] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIserror] = useState(false);
  const [errorStatus, seterrorStatus] = useState("");

  const handleAdd = () => {
    const newExclusionList = {
      criteria: criteria,
      value: value,
      merit: checkboxStates.merit,
      bonus: checkboxStates.bonus,
    };
    setExclusionList((prevList) => [...prevList, newExclusionList]);
  };

  const handleCheckboxChange = (event) => {
    const { name } = event.target;
    setCheckboxStates((prevStates) => ({
      ...prevStates,
      [name]: !prevStates[name],
    }));
  };

  const handleDelete = (index) => {
    const updatedExclusions = exclusionList.filter((_, i) => i !== index);
    setExclusionList(updatedExclusions);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("added");
    const headers = {
      "x-access-token": sessionStorage.getItem("token"),
    };

    try {
      const response = await axios.post(
        `${BaseUrl}/api/personalize/exclusion-criteria`,
        { exclusion_criteria: exclusionList },
        { headers }
      );
      console.log("successfully submitted", response.data);
      if (response.status === 200) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
        }, 3000);
      }
    } catch (error) {
      console.log("API error", error);

      if (error.response.status === 401) {
        seterrorStatus(error.response.data.message);
        setIserror(true);
        setTimeout(() => {
          setIserror(false);
        }, 3000);
      }
    }
  };

  return (
    <>
      <div className="wrapper-right">
        <div className="dash-right-top">
          <div className="pathname">
            <h3>
              <span style={{ color: "skyblue" }}>Personalize</span>{" "}
              <span>/ Exclusion Criteria</span>
            </h3>
          </div>
          <input
            type="submit"
            className="update-button"
            value="Update"
            onClick={handleSubmit}
          />
        </div>
        <div className="content-container">
          <div className="heading-container">
            <h4>Exclusion Criteria</h4>
            <div style={{width:"130px"}} className="underline-grey"></div>
          </div>
          <ul style={{gap:"50px"}} className="Culture-inputbox-list">
            <li>
              <label htmlFor="">Select criteria</label>
              <input
                type="text"
                // placeholder="Select Criteria"
                value={criteria}
                onChange={(e) => setCriteria(e.target.value)}
              />
            </li>
            <li >
              <label htmlFor="">Criteria value</label>
              <input
                type="text"
                // placeholder="Select Value"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </li>
            {/* <li> */}
              <div className="checkbox-input-container">
                <div className="checkbox-exclusion">
                  <input
                    type="checkbox"
                    name="merit"
                    value="merit"
                    checked={checkboxStates.merit}
                    onChange={handleCheckboxChange}
                  />
                  <span className="checkbox-label">Merit</span>
                </div>
                <div className="checkbox-exclusion">
                  <input
                    type="checkbox"
                    name="bonus"
                    value="bonus"
                    checked={checkboxStates.bonus}
                    onChange={handleCheckboxChange}
                  />
                  <span className="checkbox-label">Bonus</span>
                </div>
              </div>
            {/* </li> */}
            {/* <li> */}
              <button style={{height:"35px" , marginLeft:"-20px"}}  className="update-button" onClick={handleAdd}>
                Add
              </button>
            {/* </li> */}
          </ul>
          <div className="heading-container" style={{ marginTop: "1rem" }}>
            <h4>Exclusion List</h4>
            <div style={{width:"100px"}} className="underline-grey"></div>
          </div>
          <ul className="exclusion-list">
            {exclusionList.map((exclusion, index) => (
              <li key={index}>
                <div style={{ textAlign: "justify" }}>
                  <span>Criteria: {exclusion.criteria}</span>
                  <span>Value: {exclusion.value}</span>
                  <span
                    className={exclusion.merit ? "merit-Bonus" : "bg-white"}
                  >
                    {exclusion.merit ? "Merit" : ""}
                  </span>
                  <span
                    className={exclusion.bonus ? "merit-Bonus" : "bg-white"}
                  >
                    {exclusion.bonus ? "Bonus" : ""}
                  </span>
                </div>
                <button
                  className="delete-button"
                  style={{ marginLeft: "1rem" }}
                  onClick={() => handleDelete(index)}
                >
                  <FaTrash />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {isSuccess && <SuccessModal status="Success" />}
      {isError && <Error status={errorStatus} />}
    </>
  );
};

export default ExclusionCriteria;
