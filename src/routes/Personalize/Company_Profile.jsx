import axios from "axios";
import { useState } from "react";
import { BaseUrl } from "../../ApiService/ApiService";
import Error from "../../components/Error/Error";
import SuccessModal from "../../components/Loginsuccess/SuccessModal";

const Company_Profile = () => {
  const [signature, setSignature] = useState({});
  const [logo, setLogo] = useState({});
  const [hrLogo, setHrlogo] = useState({});
  const [companyformData, setFormData] = useState({
    company_name: "",
    company_address: "",
    company_industry: "",
    company_phone: "",
    company_email: "",
    company_profile: "",
    company_approver_name: "",
    company_approver_email: "",
    company_approver_reply_email: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIserror] = useState(false);
  const [errorStatus, seterrorStatus] = useState("");
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const headers = {
      "x-access-token": sessionStorage.getItem("token"),
    };
    const formData = new FormData();
    formData.append("company_name", companyformData.company_name);
    formData.append("company_address", companyformData.company_address);
    formData.append("company_industry", companyformData.company_industry);
    formData.append("company_phone", companyformData.company_phone);
    formData.append("company_email", companyformData.company_email);
    formData.append("company_profile", companyformData.company_profile);
    formData.append(
      "company_approver_name",
      companyformData.company_approver_name
    );
    formData.append(
      "company_approver_email",
      companyformData.company_approver_email
    );
    formData.append(
      "company_approver_reply_email",
      companyformData.company_approver_reply_email
    );
    formData.append("company_signature", signature);
    formData.append("company_logo", logo);
    formData.append("company_hr_logo", hrLogo);
    console.log(companyformData);
    console.log("first", signature);
    console.log("sec", logo);
    console.log("hr", hrLogo);
    console.log(formData);
    try {
      const response = await axios.post(
        `${BaseUrl}/api/personalize/company-profile`,
        formData,
        { headers }
      );
      console.log("succesfully:", response.data);
      // Handle success (e.g., show success message)
      if (response.status === 200) {
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
        }, 3000);
      }
    } catch (error) {
      console.error("API error:", error);
      // Handle error (e.g., show error message)

      if (error.response.status === 401) {
        seterrorStatus(error.response.data.message);
        setIserror(true);
        setTimeout(() => {
          setIserror(false);
        }, 3000);
      }
    }
  };

  const handleFilesignature = (event) => {
    const signatureFile = event.target.files[0];
    setSignature(signatureFile);
  };

  const handleFilelogo = (event) => {
    const logoFile = event.target.files[0];
    setLogo(logoFile);
  };

  const handleFileHrlogo = (event) => {
    const hrlogoFile = event.target.files[0];
    setHrlogo(hrlogoFile);
  };

  return (
    <>
      <div className="wrapper-right">
        <form onSubmit={handleSubmit}>
          <div className="dash-right-top">
            <div className="pathname">
              <h3>
                <span style={{ color: "skyblue" }}>Personalize</span>{" "}
                <span>/ Company Profile</span>
              </h3>
            </div>
            <input type="submit" className="update-button" value="Update" />
          </div>
          <div className="content-container">
            <div className="heading-container">
              <h4>Company Profile</h4>
              <div style={{ width: "125px" }} className="underline-grey"></div>
            </div>

            <ul style={{ gap: "50px" }} className="Culture-inputbox-list ">
              <li>
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  // placeholder="Name"
                  value={companyformData.company_name}
                  onChange={handleInputChange}
                  name="company_name"
                />
              </li>
              <li>
                <label htmlFor="">Industry</label>
                <input
                  type="text"
                  // placeholder="Industry"
                  value={companyformData.company_industry}
                  onChange={handleInputChange}
                  name="company_industry"
                />
              </li>
              <li>
                <label htmlFor="">Phone</label>
                <input
                  type="text"
                  // placeholder="Phone"
                  value={companyformData.company_phone}
                  onChange={handleInputChange}
                  name="company_phone"
                />
              </li>
              <li>
                <label htmlFor="">Email</label>
                <input
                  type="text"
                  // placeholder="E-mail"
                  value={companyformData.company_email}
                  name="company_email"
                  onChange={handleInputChange}
                />
              </li>
              <li style={{ marginTop: "-9px" }}>
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  // placeholder="Address"
                  value={companyformData.company_address}
                  onChange={handleInputChange}
                  name="company_address"
                />
              </li>
              <li
                style={{ marginTop: "-9px" }}
                className="company-profile-long"
              >
                <label htmlFor="">Company Profile</label>
                <input
                  type="text"
                  // placeholder="Company Profile"
                  value={companyformData.company_profile}
                  name="company_profile"
                  onChange={handleInputChange}
                />
              </li>
            </ul>

            <div className="approver-container">
              <ul className="company-profile-list  three-input">
                <li>
                  <label htmlFor="">Approver name</label>
                  <input
                    type="text"
                    // placeholder="Approver name"
                    value={companyformData.company_approver_name}
                    onChange={handleInputChange}
                    name="company_approver_name"
                  />
                </li>
                <li>
                  <label htmlFor="">Approver email</label>
                  <input
                    type="text"
                    // placeholder="Approver email"
                    value={companyformData.company_approver_email}
                    onChange={handleInputChange}
                    name="company_approver_email"
                  />
                </li>
                <li>
                  <label htmlFor="">Replay email</label>
                  <input
                    type="text"
                    // placeholder="Replay email"
                    value={companyformData.company_approver_reply_email}
                    onChange={handleInputChange}
                    name="company_approver_reply_email"
                  />
                </li>
                <li>
                  <label htmlFor="file-input-signature">Signature</label>
                  <input
                    type="file"
                    id="file-input-signature"
                    className="file-input"
                    onChange={handleFilesignature}
                  />
                  {/* <label
                    htmlFor="file-input-signature"
                    className="file-input-label"
                  >
                    Choose File
                  </label> */}

                  {/* {signature && (
                  <div>
                    <p>Selected file: {signature.name}</p>
                  </div>
                )} */}
                </li>
              </ul>
            </div>

            <ul className="company-profile-list  last-two-input">
              <li>
                <div className="file-input-container file-input-2">
                  <label htmlFor="file-input-logo">Company logo</label>
                  <input
                    type="file"
                    id="file-input-logo"
                    className="file-input"
                    onChange={handleFilelogo}
                  />
                  {/* <label htmlFor="file-input-logo" className="file-input-label">
                    Choose File
                  </label> */}
                </div>
                {/* {logo && (
                  <div>
                    <p>Selected file: {logo.name}</p>
                  </div>
                )} */}
              </li>
              <li>
                <div className="file-input-container file-input-3">
                  <label htmlFor="file-input-hrlogo">HR logo</label>
                  <input
                    type="file"
                    id="file-input-hrlogo"
                    className="file-input"
                    onChange={handleFileHrlogo}
                  />
                  {/* <label
                    htmlFor="file-input-hrlogo"
                    className="file-input-label"
                  >
                    Choose File
                  </label> */}
                </div>
                {/* {hrLogo && (
                  <div>
                    <p>Selected file: {hrLogo.name}</p>
                  </div>
                )} */}
              </li>
            </ul>
          </div>
        </form>
      </div>
      {isSuccess && <SuccessModal status="Success" />}
      {isError && <Error status={errorStatus} />}
    </>
  );
};

export default Company_Profile;
