import React from "react";
import "../styles/components/ChattingForRoom.css";
import ProfileImage from "../components/ProfileImage";
import sendButton from "../../public/images/sendButton.svg";

import { GrAnnounce } from "react-icons/gr";

function ChattingForRoom() {
  return (
    <div className="chat">
      <div className="announce">
        <GrAnnounce />
        <p>Announcement</p>
        <p>When you join this stage, please check your background sound!</p>
      </div>
      <hr className="chatForRoomHR" />
      <div>
        <div className="aChat">
          <ProfileImage />
          <div>
            <p>YangpaKoongya</p>
            <p>no, i just trying to click the join button, but doesn't work!</p>
          </div>
        </div>
      </div>
      <hr className="chatForRoomHR" />

      <div className="sendDiv">
        <textarea
          className="msgSendInput"
          type="text"
          placeholder="Let's send messages and engage in conversation!"
        />
        <img src={sendButton} />
      </div>
    </div>
  );
}

export default ChattingForRoom;
