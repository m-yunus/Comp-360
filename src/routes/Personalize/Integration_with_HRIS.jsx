import axios from "axios";
import { useState } from "react";
import { BaseUrl } from "../../ApiService/ApiService";
import SuccessModal from "../../components/Loginsuccess/SuccessModal";
import Error from "../../components/Error/Error";

const Integration_with_HRIS = () => {
  const [selectedFile, setSelectedFile] = useState({});
  const [integrationWithHr, setIntegrationwithHr] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIserror] = useState(false);
  const [errorStatus, seterrorStatus] = useState("");
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    console.log(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const headers = {
      "x-access-token": sessionStorage.getItem("token"),
    };
    const formData = new FormData();
    formData.append("integration_with_hr", integrationWithHr);
    formData.append("integration_image", selectedFile);
    console.log(formData);
    console.log("in", integrationWithHr);
    console.log("out", selectedFile);
    try {
      const res = await axios.post(
        `${BaseUrl}/api/personalize/integration-with-hr`,
        formData,
        { headers }
      );
      console.log("Integration data submitted successfully:", res);
      if (res.status === 200) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Error submitting form data:", error);

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
        <form onSubmit={handleSubmit}>
          <div className="dash-right-top">
            <div className="pathname">
              <h3>{location.pathname}</h3>
            </div>
            <input type="submit" className="update-button" value="Update" />
          </div>
          <div className="content-container">
            <div className="heading-container">
              <h4>Integration With HRIS</h4>
              <div style={{ width: "165px" }} className="underline-grey"></div>
            </div>
            <table className="salary-table">
              <tbody>
                <tr>
                  <td>
                    <span>Do you want to integration with HRIS?</span>
                  </td>
                  <td>
                    <div className="radio-button-group">
                      <input
                        type="radio"
                        name="IntegrationHRIS"
                        value="true"
                        checked={integrationWithHr}
                        onChange={() => setIntegrationwithHr(true)}
                      />{" "}
                      Yes
                      <input
                        type="radio"
                        name="IntegrationHRIS"
                        value="false"
                        checked={!integrationWithHr}
                        onChange={() => setIntegrationwithHr(false)}
                      />{" "}
                      No
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Get data from</span>
                  </td>
                  <td>
                    <label className="integration-input-title" htmlFor="">
                      Location
                    </label>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Store letters</span>
                  </td>
                  <td>
                    <label className="integration-input-title" htmlFor="">
                      Location
                    </label>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Store Payroll extract </span>
                  </td>
                  <td>
                    <label className="integration-input-title" htmlFor="">
                      Location
                    </label>
                    <input type="text" />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="heading-container">
              <h4>User Photos</h4>
              <div style={{ width: "90px" }} className="underline-grey"></div>
            </div>
            <table className="salary-table user-photos">
              <tbody>
                <tr>
                  <td>
                    <span>Get photo from</span>
                  </td>
                  <td>
                    <div
                      style={{ width: "150px" }}
                      className="file-input-container  user-photos-input"
                    >
                      <label
                        className="integration-input-title-photos"
                        htmlFor=""
                      >
                        Location
                      </label>
                      <input
                        type="file"
                        id="file-input"
                        className="file-input"
                        onChange={handleFileChange}
                      />

                      <label
                        htmlFor="file-input"
                        className="file-input-label"
                      ></label>
                    </div>
                    {/* {selectedFile && (
                      <div>
                        <p className="integration-file-name">
                          Selected file: {selectedFile.name}
                        </p>
                      </div>
                    )} */}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </div>
      {isSuccess && <SuccessModal status="Success" />}
      {isError && <Error status={errorStatus} />}
    </>
  );
};

export default Integration_with_HRIS;
