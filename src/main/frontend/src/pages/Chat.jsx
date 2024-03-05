import React, { useState } from "react";
import "../styles/Chat.css";
import Chatting from "../components/Chatting";
import ChattingForRoom from "../components/ChattingForRoom";
import ProfileImage from "../components/ProfileImage";
import sendButton from "../../public/images/sendButton.svg";
import PhoneCallL from "../../public/images/PhoneCall.svg";
import VideoCallL from "../../public/images/VideoCall.svg";
import EmoticonL from "../../public/images/Emoticon.svg";
import AttachmentL from "../../public/images/Attachment.svg";

function Chat() {
  const [selectedTab, setSelectedTab] = useState("start"); // chat 또는 voiceRoom 중 선택
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="chatPage">
      <div className="topTiFil">
        <h3>Chatting</h3>
        {/* <div className="lanDropAll">
        <button>
          <a className="button">Languages</a>
        </button>
        <ul className="lanDrop">
          <li>English</li>
          <li>Korean</li>
        </ul>
        </div> */}
        <details class="dropdown">
          <summary role="button">
            <a class="button">Languages</a>
          </summary>
          <ul>
            <li>
              <a href="#">English</a>
            </li>
            <li>
              <a href="#">Korean</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="chtsAndSelChat">
        <div className="chtWrapForSrc">
          <div className="ChatsAll">
            <Chatting onClick={() => handleTabClick("chat")}>d</Chatting>
            <Chatting onClick={() => handleTabClick("chat")}>d</Chatting>
            <Chatting onClick={() => handleTabClick("chat")}>d</Chatting>
            <Chatting onClick={() => handleTabClick("chat")}>d</Chatting>
            <Chatting onClick={() => handleTabClick("chat")}>d</Chatting>
            <Chatting onClick={() => handleTabClick("chat")}>d</Chatting>
            <Chatting onClick={() => handleTabClick("chat")}>d</Chatting>
            <Chatting onClick={() => handleTabClick("chat")}>d</Chatting>
            <Chatting onClick={() => handleTabClick("chat")}>d</Chatting>
            <Chatting onClick={() => handleTabClick("chat")}>d</Chatting>
            <Chatting onClick={() => handleTabClick("chat")}>d</Chatting>

            <div className="aChat">10</div>
          </div>
        </div>
        {selectedTab === "start" && (
          <section>
            <h1>Select a message</h1>
            <p>
              Choose from your existing conversations, start a new one or just
              keep swimming.
            </p>
          </section>
        )}
        {selectedTab === "chat" && (
          <section>
            <div className="">
              <div className="announce">
                {/* <ProfileImage /> */}
                <p>Sage Kang</p>
                <div>
                  <img src={PhoneCallL} />
                  <img src={VideoCallL} />
                </div>
              </div>
              <hr className="chatForRoomHR" />
              <div>
                <div className="aChat">
                  <p>
                    no, i just trying to click the join button, but doesn't
                    work!
                  </p>
                </div>
              </div>
              <hr className="chatForRoomHR" />

              <div className="sendDiv">
                <div>
                  <img src={EmoticonL} />
                  <img src={AttachmentL} />
                </div>
                <textarea
                  className="msgSendInput"
                  type="text"
                  placeholder="Let's send messages and engage in conversation!"
                />
                <img src={sendButton} />
              </div>
            </div>{" "}
          </section>
        )}
      </div>
    </div>
  );
}

export default Chat;
