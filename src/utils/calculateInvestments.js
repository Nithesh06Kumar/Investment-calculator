export const calculateInvestments = (data) => {
  let {
    initialInvestment: initialAmount,
    expectedReturn,
    duration,
    annualAmount,
  } = data;
  let investedCapital = 0;
  let interestPerYear = 0;
  let investedValue = initialAmount;
  let totalInterest = 0;
  let finalValues = [];
  for (let i = 0; i < duration; i++) {
    investedCapital = initialAmount + annualAmount;
    interestPerYear = Math.round(investedValue * (expectedReturn / 100));
    totalInterest += interestPerYear;
    investedValue = investedCapital + totalInterest;
    initialAmount += annualAmount;
    finalValues.push([
      i + 1,
      rupeeFormat(investedValue),
      rupeeFormat(interestPerYear),
      rupeeFormat(totalInterest),
      rupeeFormat(investedCapital),
    ]);
  }
  return finalValues;
};
export const rupeeFormat = (number) =>
  number.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
  });
