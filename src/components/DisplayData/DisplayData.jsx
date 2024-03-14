import React from "react";
import { calculateInvestments } from "../../utils/calculateInvestments";

const DisplayData = ({ investmentData }) => {
  console.log("investmentData", investmentData);
  //   const calculateInvestments = (data) => {
  //     let initialAmount = data?.initialInvestment;
  //     let { expectedReturn, duration, annualAmount } = data;
  //     let investedCapital = 0;
  //     let interestPerYear = 0;
  //     let investedValue = initialAmount;
  //     let totalInterest = 0;
  //     let finalValues = [];
  //     for (let i = 0; i < duration; i++) {
  //       investedCapital = initialAmount + annualAmount;
  //       interestPerYear = Math.round(investedValue * (expectedReturn / 100));
  //       console.log(
  //         "intrestPerYear",
  //         interestPerYear,
  //         initialAmount,
  //         expectedReturn
  //       );
  //       totalInterest += interestPerYear;
  //       investedValue = investedCapital + totalInterest;
  //       initialAmount += annualAmount;
  //       finalValues.push([
  //         i + 1,
  //         investedValue,
  //         interestPerYear,
  //         totalInterest,
  //         investedCapital,
  //       ]);
  //     }
  //     console.log("FINAL", finalValues);
  //     return finalValues;
  //   };

  const totalInvestmentData = calculateInvestments(investmentData);

  return (
    <table>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {totalInvestmentData?.map((data, index) => (
          <tr key={index}>
            <th>{data[0]}</th>
            <th>{data[1]}</th>
            <th>{data[2]}</th>
            <th>{data[3]}</th>
            <th>{data[4]}</th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DisplayData;
