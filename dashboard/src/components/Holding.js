import React, { useState, useEffect, useContext } from "react";
import { VerticalGraph } from "./VerticalGraph";
import { holdings as sampleHoldings } from "../data/data";

const Holdings = () => {
  const allHoldings = sampleHoldings;

  const labels = allHoldings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: 'P&L %',
        data: allHoldings.map((stock) => {
          const curValue = (stock.price ?? 0) * (stock.qty ?? 0);
          const pnl = (!stock.avg || stock.avg <= 0) ? 0 : curValue - stock.avg * stock.qty;
          const invested = (stock.avg ?? 0) * (stock.qty ?? 0);
          const pnl_percent = invested > 0 ? (pnl / invested) * 100 : 0;
          return pnl_percent;
        }),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. cost</th>
            <th>LTP</th>
            <th>Cur. val</th>
            <th>P&L</th>
            <th>Net chg.</th>
            <th>Day chg.</th>
          </tr>

          {allHoldings.map((stock, index) => {
            const curValue = (stock.price ?? 0) * (stock.qty ?? 0);
            const pnl = (!stock.avg || stock.avg <= 0) ? 0 : curValue - stock.avg * stock.qty;
            const invested = (stock.avg ?? 0) * (stock.qty ?? 0);
            const pnl_percent = invested > 0 ? (pnl / invested) * 100 : 0;
            const isProfit = pnl >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";

            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty ?? 0}</td>
                <td>{(stock.avg ?? 0).toFixed(2)}</td>
                <td>{(stock.price ?? 0).toFixed(2)}</td>
                <td>{curValue.toFixed(2)}</td>
                <td className={profClass}>
                  {pnl_percent.toFixed(2)}%
                </td>
                <td className={profClass}>{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data}/>
    </>
  );
};

export default Holdings;
