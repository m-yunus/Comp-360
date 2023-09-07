import React from 'react'
import "./Parity_weights.css"

const Parity_weights = () => {
  return (
    <>
      <div>
        <h2 className="font-semibold">
          How do you diffrentiate parity/ &#123; Parity Measure &#125; levels?{" "}
        </h2>
        <ul className="Culture-inputbox-list performance-inputs mt-10">
          <li>
            <label htmlFor="currency">From</label>
            <input type="number" />
          </li>

          <li className="ms-[-40px]">
            <label htmlFor="currency">Until</label>
            <input type="number" />
          </li>
          <li className="ms-[-40px]">
            <label htmlFor="currency">Weight</label>
            <input type="number" />
          </li>
          <li className="ms-[-40px]">
            <label htmlFor="currency">Label</label>
            <input className="performance-label" type="text" />
          </li>
        </ul>
        <ul className="Culture-inputbox-list performance-inputs ">
          <li>
            <label htmlFor="currency">From</label>
            <input type="number" />
          </li>

          <li className="ms-[-40px]">
            <label htmlFor="currency">Until</label>
            <input type="number" />
          </li>
          <li className="ms-[-40px]">
            <label htmlFor="currency">Weight</label>
            <input type="number" />
          </li>
          <li className="ms-[-40px]">
            <label htmlFor="currency">Label</label>
            <input className="performance-label" type="text" />
          </li>
        </ul>
        <ul className="Culture-inputbox-list performance-inputs ">
          <li>
            <label htmlFor="currency">From</label>
            <input type="number" />
          </li>

          <li className="ms-[-40px]">
            <label htmlFor="currency">Until</label>
            <input type="number" />
          </li>
          <li className="ms-[-40px]">
            <label htmlFor="currency">Weight</label>
            <input type="number" />
          </li>
          <li className="ms-[-40px]">
            <label htmlFor="currency">Label</label>
            <input className="performance-label" type="text" />
          </li>
        </ul>
        <ul className="Culture-inputbox-list performance-inputs ">
          <li>
            <label htmlFor="currency">From</label>
            <input type="number" />
          </li>

          <li className="ms-[-40px]">
            <label htmlFor="currency">Until</label>
            <input type="number" />
          </li>
          <li className="ms-[-40px]">
            <label htmlFor="currency">Weight</label>
            <input type="number" />
          </li>
          <li className="ms-[-40px]">
            <label htmlFor="currency">Label</label>
            <input className="performance-label" type="text" />
          </li>
        </ul>
        <ul className="Culture-inputbox-list performance-inputs ">
          <li>
            <label htmlFor="currency">From</label>
            <input type="number" />
          </li>

          <li className="ms-[-40px]">
            <label htmlFor="currency">Until</label>
            <input type="number" />
          </li>
          <li className="ms-[-40px]">
            <label htmlFor="currency">Weight</label>
            <input type="number" />
          </li>
          <li className="ms-[-40px]">
            <label htmlFor="currency">Label</label>
            <input className="performance-label" type="text" />
          </li>
          <li>
            {" "}
            <li className='mt-[-5px]'>
              <button className="plus-button performance-plus-btn ms-[-20px]">
                +
              </button>
            </li>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Parity_weights