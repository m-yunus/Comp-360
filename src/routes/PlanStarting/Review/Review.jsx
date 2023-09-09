import { FaDownload } from "react-icons/fa"
import TopNav from "../../../layout/TopNav/TopNav"
import { AiFillMessage } from "react-icons/ai"
import "./Review.css"
import { useDataContext } from "../../../Context/Context"
import { useRef } from "react"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
const Review = ({ onNext, onBack, currentStep ,setPlandataValues}) => {

const {data}=useDataContext()

console.log("datareview",data);
  const handleContinue = () => {
    // Move to the next step
    onNext();
  }

  const contentRef = useRef(null);

  const captureScreenshot = async () => {
    const elementToCapture = contentRef.current;
    const canvas = await html2canvas(elementToCapture, {
      scale: 2, // Increase the scale for higher resolution
      useCORS: true, // Enable CORS to capture images from external sources
    });
    return canvas.toDataURL('image/jpeg', 0.8); // Adjust JPEG quality (0.0 - 1.0) for file size optimization
  };

  const convertToPDF = async () => {
    const screenshotDataUrl = await captureScreenshot();

    // Create a new PDF document
    const pdf = new jsPDF('p', 'mm', 'a4'); // Portrait orientation, A4 size

    // Add the screenshot as an image to the PDF
    pdf.addImage(screenshotDataUrl, 'JPEG', 0, 0, 210, 297); // Adjust dimensions as needed

    // Download the PDF
    pdf.save('screenshot.pdf');
  };

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
      <div className="cyclewrapper" ref={contentRef}>
        <div className="cycle">
          <div className="headerplan mt-[-1rem]">
            <h3>Merit Compensation 2021-22</h3>

            <div className="iconsheader">
              <FaDownload style={{ color: "grey" }} onClick={convertToPDF}   className="cursor-pointer" />
              <AiFillMessage style={{ color: "grey" }} />
            </div>
          </div>

          <div className="contentplan ms-[20px]">
            <hr />
            <div className="merit-section py-4">
              <h2>Culture setting</h2>
              <div className="flex gap-80 my-3">
                <div className="flex flex-col">
                  <h4>Base currency</h4>
                  <h5>{data?.cultural?.country}{" "}{data?.cultural?.currency}</h5>
                </div>
                <div className="flex gap-4">
                  <button>Merit</button>
                  <button>Promotion</button>
                  <button>Bonus</button>
                </div>
              </div>
              <div className="flex gap-80 my-3">
                <div className="flex flex-col">
                  <h4>Date format</h4>
                  <h5>{data?.cultural?.date_format}</h5>
                </div>
                <div className="flex flex-col ms-4">
                  <h4>Time zone</h4>
                  <h5>UTC+05:30(IST)</h5>
                </div>
              </div>
            </div>
            <div className="merit-section py-2">
              <h2>Rounding rules</h2>
              <div className="flex gap-80 my-3">
                <div className="flex flex-col">
                  <h4>Number</h4>
                  <h5>{data?.cultural?.number_round}</h5>
                </div>
                <div className="flex flex-col ms-10">
                  <h4>Currency</h4>
                  <h5>{data?.cultural?.currency_round}</h5>
                </div>
              </div>
              <div className="flex gap-80 my-3">
                <div className="flex flex-col">
                  <h4>Percentage</h4>
                  <h5>{data?.cultural?.percentage_round}</h5>
                </div>
              </div>
            </div>
            <hr />
            <div className="merit-section py-2 my-4">
              <h2>Multi currency</h2>
              <div className="flex gap-80 my-3">
                <div className="flex flex-col">
                  <h4>Multi currency</h4>
                  <h5>No</h5>
                </div>
              </div>
            </div>
            <hr />
            <div className="merit-section py-2 my-4">
              <h2>Merit cycle & Eligibility</h2>
              <div className="flex gap-80 my-3">
                <div className="flex flex-col">
                  <h4>Merit type</h4>
                  <h5>Yearly</h5>
                </div>
              </div>
              <div className="flex gap-80 my-3">
                <div className="flex flex-col">
                  <h4>From Period</h4>
                  <h5>01-01-2020</h5>
                </div>
                <div className="flex flex-col ms-6">
                  <h4>To Period</h4>
                  <h5>31-12-2020</h5>
                </div>
              </div>
              <div className="flex gap-80 my-3">
                <div className="flex flex-col">
                  <h4>Eligibility</h4>
                  <h5>Joined until 27-09-2020</h5>
                </div>
              </div>
            </div>
            <hr />
            <div className="merit-section py-2 mt-4">
              <h2>Pro-rata increment to service</h2>
              <div className="flex gap-80 my-3">
                <div className="flex flex-col">
                  <h4>Pro-rata increment to service</h4>
                  <h5>Yes</h5>
                </div>
                <div className="flex flex-col ms-[-5.5rem]">
                  <h4>Pro-rata increment to service unit</h4>
                  <h5>Weekly</h5>
                </div>
              </div>
            </div>
            <div className="merit-section py-4">
              <h2>Pro-rata off cycle increment</h2>
              <div className="flex gap-80 my-3">
                <div className="flex flex-col">
                  <h4>Pro-rata off cycle increment to service</h4>
                  <h5>No</h5>
                </div>
              </div>
            </div>
            <hr />
            <div className="merit-section py-4 mt-4">
              <h2>Split Appraisal & matrix manager</h2>
              <div className="flex gap-80 my-3">
                <div className="flex flex-col">
                  <h4>Enable split appraisals</h4>
                  <h5>No</h5>
                </div>
                <div className="flex flex-col ms-[-2.5rem]">
                  <h4>Enable matrix recommendations</h4>
                  <h5>No</h5>
                </div>
              </div>
            </div>
            <hr />
            <div className="merit-section py-4 my-4">
              <h2>Pay Groups</h2>
              <div className="flex gap-80 my-3">
                <div className="flex flex-col">
                  <h4>Diffrent merit rule for different employee groups</h4>
                  <h5>No</h5>
                </div>
              </div>
            </div>
            <hr />
            <div className="merit-section py-4 my-4">
              <h2>Parity Measure</h2>
              <div className="flex gap-80 my-3">
                <div className="flex flex-col">
                  <h4>Preferred parity measure</h4>
                  <h5>Compaeatio</h5>
                </div>
              </div>
            </div>
            <div className="merit-section py-1 mt-[-1rem] mb-6">
              <h2>Merit Guidelines</h2>
              <div className="flex gap-80 my-3">
                <div className="flex flex-col">
                  <h4>Enable merit guidelines</h4>
                  <h5>Yes</h5>
                </div>
                <div className="flex flex-col ms-[-2.5rem]">
                  <h4>Validation for supervisor Recommendation</h4>
                  <h5>Recommendation is allowed within the guidelines only</h5>
                </div>
              </div>
            </div>
            <hr />
            <div className="merit-section py-4 mt-4">
              <h2>Lump sum</h2>
              <div className="flex gap-80 my-3">
                <div className="flex flex-col">
                  <h4>Employee salary goes above the pay range max</h4>
                  <h5>
                    Ignore range min, and provide increment on current salary
                  </h5>
                </div>
              </div>
            </div>
            <div className="merit-section py-4 mt-[-1rem] mb-4">
              <h2>Corrections</h2>
              <div className="flex gap-80 my-3">
                <div className="flex flex-col">
                  <h4>When employee salary is below the pay range min</h4>
                  <h5>Ignore range max, and provide increment</h5>
                </div>
              </div>
            </div>
            <hr />
            <div className="merit-section py-4 mt-4 mb-2">
              <h2>Promotions</h2>
              <div className="flex gap-80 my-3">
                <div className="flex flex-col">
                  <h4>Enable promotion recommendations</h4>
                  <h5>Yes</h5>
                </div>
              </div>
            </div>
            <hr />
            <div className="merit-section py-4 mt-4 mb-2">
              <h2>Bonus and Incentives</h2>
              <div className="flex gap-80 my-3">
                <div className="flex flex-col">
                  <h4>Enable bonus and incentives</h4>
                  <h5>Yes</h5>
                </div>
                <div className="flex flex-col ms-[-4rem]">
                  <h4>
                    Different Bonus and incentives rules for different employee
                    group
                  </h4>
                  <h5>No</h5>
                </div>
              </div>
            </div>
            <hr />
            <div className="merit-section py-4 mt-4 mb-2">
              <h2>Bonus Table</h2>
              <table className="bonus-table my-6">
                <tbody>
                  <tr>
                    <td>Sl No</td>
                    <td>Name</td>
                    <td>Type</td>
                    <td>Eligibility</td>
                    <td>Bonus(%)</td>
                    <td>Bonus Multiplier</td>
                    <td>Recommendation</td>
                    <td>Prorate</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Reteption</td>
                    <td>time</td>
                    <td>30-11-2016</td>
                    <td>10 %</td>
                    <td>No</td>
                    <td>Yes (25-75)</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Star</td>
                    <td>time</td>
                    <td>31-12-2017</td>
                    <td>0 %</td>
                    <td>Yes</td>
                    <td>No</td>
                    <td>No</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>PLI</td>
                    <td>Performance</td>
                    <td>31-08-2020</td>
                    <td>0 %</td>
                    <td>Yes</td>
                    <td>No</td>
                    <td>No</td>
                  </tr>
                </tbody>
              </table>
            </div>
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

export default Review;