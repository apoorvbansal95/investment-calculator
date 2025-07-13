import React from 'react'
import { calculateInvestmentResults, formatter } from '../util/investment.js'
export default function Results({ userInput }) {
    console.log(userInput)
    const results = calculateInvestmentResults(userInput)
    console.log(results)
    const initialInvestment=results[0].valueEndOfYear-results[0].interest-results[0].annualInvestment
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>
                        Year
                    </th>
                    <th>
                        Investment Value
                    </th>
                    <th>
                        Interest (Year)
                    </th>
                    <th>
                        Total Interest
                    </th>
                    <th>
                        Invested Capital
                    </th>
                </tr>
            </thead>
            <tbody>
                {results.map((res) => {
                    const totalinterest= res.valueEndOfYear-res.annualInvestment*res.year-initialInvestment
                    const totalamountInvested= res.valueEndOfYear-totalinterest
                    return <tr key={res.year}>
                        <td>{res.year}</td>
                        <td>{formatter.format(res.valueEndOfYear)}</td>
                        <td>{formatter.format(res.interest)}</td>
                        <td>{formatter.format(totalinterest)}</td>
                        <td>{formatter.format(totalamountInvested)}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}
