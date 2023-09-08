
import './success.css';
import {TiTick} from "react-icons/ti"

const SuccessModal = ({}) => {
  return (
    <div className="popup">
      <div className='total'>
        <div className="success">
          <TiTick style={{ fontSize: "4rem" }} />
        </div>
        <h1>Log in Successfull</h1>
      </div>
    </div>
  );
}

export default SuccessModal;
