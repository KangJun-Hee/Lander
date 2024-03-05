import React, { useState } from "react";
import sendButton from "../../public/images/sendButton.svg";
import Chatting from "../components/Chatting";

function Settings() {
  const [selectedTab, setSelectedTab] = useState("Account"); // chat 또는 voiceRoom 중 선택
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  return (
    <>
      <div className="chtsAndSelChat">
        <div className="OptionWrapForHelp">
          <div>
            <h3>Settings</h3>
            <input type="text" placeholder="Search..." />
          </div>
          <div className="options">
            <button onClick={() => handleTabClick("Account")}>Account</button>
            <button onClick={() => handleTabClick("Privacy")}>
              Privacy Support
            </button>
            <button onClick={() => handleTabClick("Notifications")}>
              Notifications
            </button>
            <button onClick={() => handleTabClick("Audio")}>Audio&Video</button>
            <button onClick={() => handleTabClick("Languages")}>
              Languages
            </button>
          </div>
        </div>
        <div>
          <h3>Privacy&Security</h3>
          {selectedTab === "Account" && (
            <section>
              <div>
                <p>Account Informations</p>
                <button>Log In&Password</button>
                <button>Account Settings</button>
              </div>
              <div>
                <button>Change Password</button>
              </div>
            </section>
          )}
          {selectedTab === "Privacy" && (
            <section>
              <div>
                <button>Privacy Support</button>
                <button>Account Security</button>
              </div>
              <div>
                <p>My Account</p>
                <div>
                  <p>Set Search Unavailable My ID</p>
                  {/* toggle here */}
                  <button>Hide My Informations</button>
                </div>
              </div>
            </section>
          )}
          {selectedTab === "Notifications" && (
            <section>
              <div>
                <p>Room</p>
                <div>
                  <p>dfdsfd</p>
                  <p>dslfdsfds</p>
                </div>
              </div>
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

export default Settings;
