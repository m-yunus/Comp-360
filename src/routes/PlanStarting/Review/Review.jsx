import { FaDownload } from "react-icons/fa"
import TopNav from "../../../layout/TopNav/TopNav"
import { AiFillMessage } from "react-icons/ai"
import "./Review.css"

const Review = ({ onNext, onBack, currentStep ,setPlandataValues}) => {
  const handleContinue = () => {
    // Move to the next step
    onNext();
  }
  return (
    <>
      <TopNav
        tabActive={"plan"}
        activeStatus={"Bonus&IncentivesSchemes"}
        firstStatusNumber={"10"}
        secondStatusNumber={"11"}
        thirdStatusNumber={"12"}
        firstStatus={"Bonus&IncentivesSchemes"}
        secondStatus={"Review"}
        thirdStatus={"Dataupload"}
      />
      <div className="cyclewrapper">
        <div className="cycle">
          <div className="headerplan mt-[-1rem]">
            <h3>Merit Compensation 2021-22</h3>

            <div className="iconsheader">
              <FaDownload style={{ color: "grey" }} />
              <AiFillMessage style={{ color: "grey" }} />
            </div>
          </div>

          <div className="contentplan ms-[20px]">
            <hr />
            <h4>Currency</h4>
          </div>
        </div>
        <div className="button-container">
          {currentStep > 0 && (
            <button onClick={onBack} className="back_button">
              Back
            </button>
          )}
          <button onClick={handleContinue} className="continue_button">
            Continue
          </button>
        </div>
      </div>
    </>
  );
}

export default Review