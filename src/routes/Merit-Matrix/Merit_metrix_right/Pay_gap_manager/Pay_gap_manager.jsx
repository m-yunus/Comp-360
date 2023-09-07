import React, {useState}from 'react'
import "./Pay_gap_manager.css"

const Pay_gap_manager = () => {
     
      const [value, setValue] = useState(100);
       const handleSliderChange = (e) => {
         setValue(e.target.value);
       };
  return (
    <>
      <div className="">
        <h2 className="font-semibold">
          Do you want to cover pay gaps for &#123; Group 1 &#125; employees?
        </h2>
        <div className="flex gap-10 mt-16">
          <span className="radio-button-group">
            <input type="radio" name="" id="" />
            Yes
          </span>
          <span className="radio-button-group">
            <input type="radio" name="" id="" />
            No
          </span>
        </div>
        <h2 className="font-semibold mt-16 ">
          Do you want to cover pay gaps for &#123; Group 1 &#125; employees?
        </h2>
        <div className="w-full   items-center">
        
          <div className=" font-semibold ms-48 mt-4 text-gray-500">{value}</div>
          <input
          style={{width:"400px"}}
            type="range"
            min="0"
            max="200"
            value={value}
            onChange={handleSliderChange}
          />
        </div>
      </div>
    </>
  );
}

export default Pay_gap_manager