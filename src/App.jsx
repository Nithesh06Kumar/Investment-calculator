import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import DisplayData from "./components/DisplayData/DisplayData";

function App() {
  const [inputValue, setInputValue] = useState({
    initialInvestment: 10000,
    annualAmount: 1000,
    expectedReturn: 5,
    duration: 10,
  });
  const handleInputChange = (name, value) => {
    setInputValue((prev) => {
      return { ...prev, [name]: Number(value) };
    });
  };
  // const [finalValue, setFinalVaue] = useState([]);
  // let initialInvestment = 10000;
  // let annualAmount = 1000;
  // let expectedReturn = 5;
  // let duration = 10;
  // const handleCalculationLogic = () => {
  //   let initialAmount = initialInvestment;
  //   let investedCapital;
  //   let totalInterest = 0;
  //   for (let i = 0; i < 10; i++) {
  //     investedCapital = initialAmount;
  //     interestPerYear = investedCapital;
  //     totalInterest += interestPerYear;
  //     investedValue = investedCapital + totalInterest;
  //     setFinalVaue((prev) => {
  //       return [
  //         ...prev,
  //         [
  //           {
  //             year: i + 1,
  //             investedValue,
  //             interestPerYear,
  //             totalInterest,
  //             investedCapital,
  //           },
  //         ],
  //       ];
  //     });
  //   }
  // };

  return (
    <main id="container">
      <Header />

      {/* <Input
          label={"Inital Investment"}
          value={inputValue}
          onChangeValue={handleCalculationLogic}
        />
        <Input
          label={"Annual Investment"}
          value={annualAmount}
          onChangeValue={handleCalculationLogic}
        />
        <Input
          label={"Expected Return"}
          value={expectedReturn}
          onChangeValue={handleCalculationLogic}
        />
        <Input
          label={"Duration"}
          value={duration}
          onChangeValue={handleCalculationLogic}
        /> */}
      <UserInput inputValue={inputValue} onChangeValue={handleInputChange} />
      <section id="display-data">
        <DisplayData investmentData={inputValue} />
      </section>
    </main>
  );
}

export default App;
