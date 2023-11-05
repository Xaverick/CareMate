import React, { useState } from "react";
import { QuestionLayout } from "./QuestionLayout";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NextPage() {
  const [firstResponses, setFirstResponses] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const { adduserDetails, userDetails } = useUserContext();
  const navigate = useNavigate();

  const questions = [
    {
      question: "What are your current diseases?",
      options: ["Diabetes", "High Blood Pressure", "Dementia", "Lung Cancer"],
    },
    {
      question:
        "Do you have a support system, such as family or friends, who help you manage your diabetes?",
      options: ["yes", "no"],
    },
    {
      question: "How well are you able to manage your diabetes?",
      options: [
        "pretty well",
        "fine enough",
        "just enough",
        "not properly much",
      ],
    },
    {
      question:
        "Are you compliant with your treatment plan and lifestyle modifications?",
      options: ["yes", "no"],
    },
    {
      question: "Have you had recent episodes of low or high blood sugar?",
      options: [
        "just a couple of days ago",
        "within weeks",
        "within the last few months",
        "in the past 6 months",
      ],
    },
  ];

  const handleNextQuestion = () => {
    if (currentQuestionIndex === 0) {
      setFirstResponses([])
      // setFirstResponses((prevResponses) => [...prevResponses, response]);
      // console.log("res :", response, "firs :", firstResponses);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleResponse = (response) => {
    if (currentQuestionIndex === 0) {
      setFirstResponses((prevResponses) => [...prevResponses, response]);
      console.log("res :", response, "firs :", firstResponses);
    }
  };

  function handleAxiosSubmit(userDetails) {
    axios
      .post("/user/create", userDetails)
      .then((response) => {
        console.log(response.data.message);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  }

  const handleFinishTest = () => {
    // const userdata = {
    //   email: userDetails.email,
    //   password: userDetails.password,
    //   name: userDetails.name,
    //   userDiseases: firstResponses,
    // };
    // console.log(userdata);
    // adduserDetails(userdata);
    console.log("user :",userDetails)
    handleAxiosSubmit(userDetails);
  };

  return (
    <>
      <div className="container" style={{ margin: "20px", padding: "10px" }}>
        <div className="progressbar" style={{ marginBottom: "20px" }}>
          <div
            style={{
              height: "100%",
              width: `${
                ((currentQuestionIndex + 1) / questions.length) * 100
              }%`,
              backgroundColor: "#a66cff",
              transition: "width 0.5s",
            }}
          ></div>
          <span className="progressPercent">
            {((currentQuestionIndex + 1) / questions.length) * 100}%
          </span>
        </div>
        <div>
          {currentQuestionIndex > 0 && (
            <button className="btn" onClick={handlePreviousQuestion}>
              Previous Question
            </button>
          )}
          {currentQuestionIndex === questions.length - 1 ? (
            <button className="btn" onClick={handleFinishTest}>
              Finish Test
            </button>
          ) : (
            <button className="btn" onClick={() => handleNextQuestion()}>
              Next Question
            </button>
          )}
        </div>
      </div>

      <QuestionLayout
        question={questions[currentQuestionIndex].question}
        options={questions[currentQuestionIndex].options}
        onOptionSelect={(res)=>{
          console.log("optio :",res)
        }}
      />
    </>
  );
}

export default NextPage;
