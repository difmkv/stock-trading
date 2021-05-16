import { StockChart } from "./StockChart";
import { useState } from "react";
import { useUserInfo } from "../user";
import { useStockHistory } from "../stock-history";

export const DashboardPage = () => {
  const [userInfo, setUserInfo] = useUserInfo();
  const { cashValue, sharesValue, numberOfSharesOwned } = userInfo || {};
  const stockHistory = useStockHistory();
  const prices = Object.values(stockHistory);
  const times = Object.keys(stockHistory);
  const [numberOfSharesValue, setNumberOfSharesValue] = useState(0);

  const buyShares = async () => {
    const response = await fetch("/stock/buy", {
      method: "post",
      body: JSON.stringify({ numberOfShares: numberOfSharesValue }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const updatedUserInfo = await response.json();
    setUserInfo(updatedUserInfo);
  };

  const sellShares = async () => {
    const response = await fetch("/stock/sell", {
      method: "post",
      body: JSON.stringify({ numberOfShares: numberOfSharesValue }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const updatedUserInfo = await response.json();
    setUserInfo(updatedUserInfo);
  };

  return (
    <>
      <h1 className="section-heading">Stock Trading App</h1>
      <div className="centered-container">
        <StockChart xValues={times} yValues={prices} />
        <div className="financial-info-section">
          <div className="info-item">
            Current TSLA Share Price: ${prices[prices.length - 1]}
          </div>
          <div className="info-item">
            You currently own {numberOfSharesOwned}
          </div>
          <div className="info-item">Cash balance: ${cashValue}</div>
          <div className="info-item">Portfolio Value: ${sharesValue}</div>
          <div className="info-item">
            Total Value: ${cashValue + sharesValue}
          </div>
          <div>
            <input
              type="number"
              className="full-width space-after"
              value={numberOfSharesValue}
              onChange={(e) => setNumberOfSharesValue(e.target.value)}
            />
            <button className="buy-button" onClick={buyShares}>
              Buy
            </button>
            <button className="sell-button" onClick={sellShares}>
              Sell
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
