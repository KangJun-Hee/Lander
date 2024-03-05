import React from "react";
import ProfileImage from "../components/ProfileImage";
import ParticipantForRoom from "../components/ParticipantForRoom";
import "../styles/VoiceRoomIn.css";
import "../styles/LiveIn.css";
import { FiUser } from "react-icons/fi";
import { FaMicrophone } from "react-icons/fa";
import { FaHand } from "react-icons/fa6";
import { RiEmotionLaughLine } from "react-icons/ri";
import { GrAnnounce } from "react-icons/gr";

function LiveIn() {
  const video = document.querySelector("video");
  async function videoStream() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });

      video.srcObject = stream;
    } catch (err) {
      console.log(err);
    }
  }
  videoStream();
  return (
    <div className="vrDetPage">
      <div className="pLeft">
        <p className="roomTitle">Today is my birthday! yay~~</p>
        <div className="attendees">
          <p>22</p>
          <FiUser />
        </div>
        <hr />
        <div className="camSpace">
          <div>
            <div>
              <video className="video" autoPlay>
                {" "}
                <p className="speakerId">Miller Whang</p>
              </video>
            </div>
            {/* <div className="liveCam">cam</div> */}
            <div>
              {/* <ProfileImage /> */}
              <p className="userNick">YangpaKoongya</p>
            </div>
          </div>
          <div>
            <div>
              <video className="video" autoPlay>
                {" "}
                <p className="speakerId">Miller Whang</p>
              </video>
            </div>
            {/* <div className="liveCam">cam</div> */}
            <div>
              {/* <ProfileImage /> */}
              <p className="userNick">YangpaKoongya</p>
            </div>
          </div>
          <div>
            <div>
              <video className="video" autoPlay>
                {" "}
                <p className="speakerId">Miller Whang</p>
              </video>
            </div>
            {/* <div className="liveCam">cam</div> */}
            <div>
              {/* <ProfileImage /> */}
              <p className="userNick">YangpaKoongya</p>
            </div>
          </div>
          <div>
            <div>
              <video className="video" autoPlay>
                {" "}
                <p className="speakerId">Miller Whang</p>
              </video>
            </div>
            {/* <div className="liveCam">cam</div> */}
            <div>
              {/* <ProfileImage /> */}
              <p className="userNick">YangpaKoongya</p>
            </div>
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
      <div>
        <ParticipantForRoom />
        <div className="chat">
          <div className="announce">
            <GrAnnounce />
            <p>Announcement</p>
            <p>When you join this stage, please check your background sound!</p>
          </div>
          <div>
            <div className="aChat">
              <ProfileImage />
              <div>
                <p>YangpaKoongya</p>
                <p>
                  no, i just trying to click the join button, but doesn't work!
                </p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default LiveIn;
