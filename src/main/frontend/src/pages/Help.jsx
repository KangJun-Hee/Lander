import React, { useState } from "react";
import sendButton from "../../public/images/sendButton.svg";
import "../styles/Help.css";

function Help() {
  const [selectedTab, setSelectedTab] = useState("Lander"); // chat 또는 voiceRoom 중 선택
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <>
      <div className="chtsAndSelChat">
        <div className="OptionWrapForHelp">
          <div>
            <h3>Help</h3>
            <input type="text" placeholder="Search..." />
          </div>
          <div className="options">
            <button onClick={() => handleTabClick("Lander")}>Lander!</button>
            <button onClick={() => handleTabClick("Account")}>Account</button>
            <button onClick={() => handleTabClick("Privacy")}>
              Privacy&Security
            </button>
            <button onClick={() => handleTabClick("Policy")}>Policy</button>
          </div>
        </div>
        <div>
          <h3>Privacy&Security</h3>

          {selectedTab === "Lander" && (
            <section>
              <button>What is Lander?</button>
              <button>Make an account</button>
              <button>How to use Mommnet</button>
              <button>How to use Mommnet</button>
              <button>How to use Mommnet</button>
            </section>
          )}
          {selectedTab === "Account" && (
            <section>
              <button>Log In&Password</button>
              <button>Account Settings</button>
              <button>Delete Account</button>
            </section>
          )}
          {selectedTab === "Privacy" && (
            <section>
              <button>Privacy Support</button>
              <button>Account Security</button>
            </section>
          )}
          {selectedTab === "Policy" && (
            <section>
              <button>Report</button>
              <button>Sensitive Contents</button>
              <button>Community Guideline</button>
            </section>
          )}
        </div>
      </div>
    </>
  );
}

export default Help;
