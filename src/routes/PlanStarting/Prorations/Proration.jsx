import { Link } from "react-router-dom"


const Proration = () => {
  return (
    <>
     <div className="heading-container">
        <h4>ProRate</h4>
        <div className="underline-grey"></div>
      </div> 
      <div className="componentradios">
        <h5>Do you want to pro-rate increment to service?</h5>
        <label>
          <input
            type="radio"
            value="yes"
            
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
           
          />
         No
        </label>
      </div>

      
      <div className="componentradios">
        <h5>Please select the pro-ration unit:</h5>
        <label>
          <input
            type="radio"
            value="Monthly"
            
          />
          Monthly
        </label>
        <label>
          <input
            type="radio"
            value="weekly"
           
          />
        weekly
        </label>
        <label>
          <input
            type="radio"
            value=" Daily"
           
          />
       Daily
        </label>
        <label>
          <input
            type="radio"
            value="Hourly"
           
          />
        Hourly
        </label>
      </div>
       <hr />
       <div className="heading-container">
        <h4>off Cycle Pro Rate</h4>
        <div className="underline-grey"></div>
      </div>
      <div className="componentradios">
        <h5>Do you want to pro-rate off cycle increments?</h5>
        <label>
          <input
            type="radio"
            value="yes"
            
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            value="no"
           
          />
         No
        </label>
        
      </div>
      <div className="componentradios">
        <h5>Please select the pro-ration unit:</h5>
        <label>
          <input
            type="radio"
            value="Monthly"
            
          />
          Monthly
        </label>
        <label>
          <input
            type="radio"
            value="weekly"
           
          />
        weekly
        </label>
        <label>
          <input
            type="radio"
            value=" Daily"
           
          />
       Daily
        </label>
        <label>
          <input
            type="radio"
            value="Hourly"
           
          />
        Hourly
        </label>
      </div>
      <div className="buttoncontainer">
      <Link to="/Cycleligibilityplan">
        <button>Back</button>
      </Link>
      <Link to="/">
        <button>Continue</button>
      </Link>
      </div>
    </>
  )
}

export default Proration