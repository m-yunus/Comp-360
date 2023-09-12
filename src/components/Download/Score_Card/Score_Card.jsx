import React from "react";
import "./Score_Card.css";
import { BsFillSquareFill } from "react-icons/bs";

const Score_Card = () => {
  return (
    <>
      <div className="score-card text-center">
        <h3 className="">Score Card</h3>
        <span className="flex justify-center items-center gap-2">
          <BsFillSquareFill className="text-orange-400" /> <h3>Delta</h3>
        </span>
        <div className="flex justify-center ">
          <div className="flex flex-col ">
            <h3>Sales</h3>
            <h3 className="bg-orange-400">-18% Finance</h3>
            <h3 className="bg-orange-400 mt-1 ">-11% IT</h3>
            <h3>HR</h3>
          </div>
          <div className="vertical-line" />
          <div>
            <h3 className="bg-orange-400">1%</h3>
            <h3 className="mt-[73px] bg-orange-400">8%</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Score_Card;
