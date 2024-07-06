import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

const Results = ({ input }) => {
  const hasZeroValue = Object.entries(input).some(
    ([key, value]) => value === 0
  );
  const resultsData = calculateInvestmentResults(input);
  if (!resultsData || !resultsData[0])
    return <p id="warning-input">Make sure to type a proper value</p>;
  const initialInvestment =
    resultsData[0].valueEndOfYear -
    resultsData[0].interest -
    resultsData[0].annualInvestment;
  return hasZeroValue ? (
    <p id="warning-input">Make sure to type a proper value</p>
  ) : (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yearData) => {
          const calculateTotalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
          const calculateAmountInvested =
            yearData.valueEndOfYear - calculateTotalInterest;

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(calculateTotalInterest)}</td>
              <td>{formatter.format(calculateAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Results;
