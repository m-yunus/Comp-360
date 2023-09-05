import "./Error.css";
import { BiError } from "react-icons/bi";
const Error = ({ status }) => {
  return (
    <div className="error">
      <BiError className="text-4xl" />

      <h2>{status}</h2>
    </div>
  );
};

export default Error;
