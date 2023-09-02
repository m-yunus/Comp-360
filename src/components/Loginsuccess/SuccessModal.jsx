
import './success.css';
import {TiTick} from "react-icons/ti"

const SuccessModal = ({status}) => {
  return (
    <div className="popup">
      <div className='total'>
        <div className="success">
          <TiTick style={{ fontSize: "5rem" }} />
        </div>
        <h1>{status}</h1>
      </div>
    </div>
  );
}

export default SuccessModal;
