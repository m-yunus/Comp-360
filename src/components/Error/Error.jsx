import "./Error.css";
import { BiError } from "react-icons/bi";
const Error = ({ status }) => {
  return (
    <div className="error">
      <BiError className="text-4xl" />

      <h1>{status}</h1>
    </div>
  );
};

export default Error;
