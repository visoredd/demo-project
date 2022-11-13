import React from "react";
import "./index.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="wallet2" style={{ boxSizing: "content-box" }}>
        <div>
          <div>Referral Earning</div>
          <div className="amount">₹ 2500</div>
        </div>
        <div>
          <div>Total Referrals</div>
          <div className="amount">7</div>
        </div>
        <div>
          <div>Wallet Balance</div>
          <div className="amount">₹ 500</div>
        </div>
        <div className="withdraw">
          <a>
            <span> Withdraw</span>
            <span> Balance</span>
          </a>
        </div>
      </div>
      <div className="referal">
        <div className="heading">Your Referral Code</div>
        <div>
          <div className="referralCode">E D 5 C H 4</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
