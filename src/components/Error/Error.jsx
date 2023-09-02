import "./Error.css";
import { VscError } from "react-icons/vsc";
const Error = ({ status }) => {
  return (
    <div className="popup">
      <div className="total">
        <div className="error">
          <VscError style={{ fontSize: "3rem" }} />

          <h1>{status}</h1>
        </div>
      </div>

      {status}
    </div>
  );
};

export default Error;
