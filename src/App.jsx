import React, { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChange = (input, newValue) => {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [input]: +newValue,
      };
    });
  };

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInputProp={userInput} />
      <Results input={userInput} />
    </>
  );
}

export default App;
