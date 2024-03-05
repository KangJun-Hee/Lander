import React from "react";
import ProfileImage from "../components/ProfileImage";
import ChattingForRoom from "../components/ChattingForRoom";
import "../styles/VoiceRoomIn.css";
import { FiUser } from "react-icons/fi";
import { FaMicrophone } from "react-icons/fa";
import { FaHand } from "react-icons/fa6";
import { RiEmotionLaughLine } from "react-icons/ri";


function VoiceRoomIn() {
  return (
    <div className="vrDetPage">
      <div className="vrInLeft">
        <div className="titleAttendee">
          <p className="roomTitle inVR">Today is my birthday! yay~~</p>
          <div className="attendees vrIn">
            <FiUser />
            <p>22</p>
          </div>
        </div>
        <hr />
        <div className="attendUsers">
          <div className="userInStage">
            <ProfileImage />
            <p className="hostTag">Host</p>
            <p className="userNick">YangpaKoongya</p>
          </div>
          <div className="userInStage">
            <ProfileImage />
            <p>YangpaKoongya</p>
          </div>
          <div className="userInStage">
            <ProfileImage />
            <p>YangpaKoongya</p>
          </div>
          <div className="userInStage">
            <ProfileImage />
            <p>YangpaKoongya</p>
          </div>
          <div className="userInStage">
            <ProfileImage />
            <p>YangpaKoongya</p>
          </div>
          <div className="userInStage">
            <ProfileImage />
            <p>YangpaKoongya</p>
          </div>
          <div className="userInStage">
            <ProfileImage />
            <p>YangpaKoongya</p>
          </div>
          <div className="userInStage">
            <ProfileImage />
            <p>YangpaKoongya</p>
          </div>
        </div>
        <div>
          <hr />
          <p>Listeners</p>
          <hr />
          <div className="listeners">
            <div>
              <ProfileImage />
              <p className="userNick lis">YangpaKoongya</p>
            </div>
            <div>
              <ProfileImage />
              <p className="userNick lis">YangpaKoongya</p>
            </div>
            <div>
              <ProfileImage />
              <p className="userNick lis">YangpaKoongya</p>
            </div>
            <div>
              <ProfileImage />
              <p className="userNick lis">YangpaKoongya</p>
            </div>
            <div>
              <ProfileImage />
              <p className="userNick lis">YangpaKoongya</p>
            </div>
            <div>
              <ProfileImage />
              <p className="userNick lis">YangpaKoongya</p>
            </div>
          </div>
          <div className="options">
            <div>
              <FaMicrophone />
              <p>Mic</p>
            </div>
            <div>
              <RiEmotionLaughLine />
              <p>Mic</p>
            </div>
            <div>
              <FaHand />
              <p>Join</p>
            </div>
            <div>
              <FaMicrophone />
              <p>Mic</p>
            </div>
          </div>
        </div>
      </div>
      <div className="vrInRight">
        <div>
          <div>
            <p>Participants</p>
            <p>22</p>
          </div>
          <div></div>
        </div>
        <ChattingForRoom />
      </div>
    </div>
  );
}

export default VoiceRoomIn;
