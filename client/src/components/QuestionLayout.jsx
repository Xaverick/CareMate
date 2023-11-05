import React, { useState } from "react";
import { useUserContext } from "../context/UserContext";

export const QuestionLayout = ({ question, options }) => {
  const { adduserDetails, userDetails } = useUserContext();
  const [selectedOption, setSelectedOption] = useState(0);

  const handleOptionClick = (index,option) => {
    setSelectedOption(index);
  };

  return (
    <>
      <div style={{ width: "70%", margin: "0 auto" }}>
        <p className="font-semiBold text-2xl mt-9 ml-11">{question} </p>
        <div
          className="flex flex-wrap"
          style={{
            justifyContent: "space-between",
          }}
        >
          {options.map((option, index) => (
            <div key={index + option} style={{ width: "50%" }}>
              <a              
                className={`block max-w-sm p-6 bg-white border border-gray-300 rounded-lg shadow mt-4 ${
                  selectedOption === index ? "bg-purple-600" : "hover:bg-purple-600 "
                }`}
                onClick={() => handleOptionClick(index,option)} 
              >
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 hover:text-white">
                  {option}
                </h5>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
