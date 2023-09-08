import React from "react";
import "./Performance_weights.css"

const Performance_weights = () => {
  return (
    <>
      <div className="">
        <h2 className="font-semibold">
          How do you diffrentiate performance levels?
        </h2>
        <ul className="Culture-inputbox-list performance-inputs mt-10">
          <li>
            <label htmlFor="currency">Rating</label>
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
        <ul className="Culture-inputbox-list performance-inputs">
          <li>
            <label htmlFor="currency">Rating</label>
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
        <ul className="Culture-inputbox-list performance-inputs">
          <li>
            <label htmlFor="currency">Rating</label>
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
        <ul className="Culture-inputbox-list performance-inputs">
          <li>
            <label htmlFor="currency">Rating</label>
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
        <ul className="Culture-inputbox-list performance-inputs items-center">
          <li>
            <label htmlFor="currency">Rating</label>
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
            <button className="plus-button performance-plus-btn ms-[-20px]">
              +
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Performance_weights;
