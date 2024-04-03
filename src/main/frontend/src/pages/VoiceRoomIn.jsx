import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProfileImage from "../components/ProfileImage";
import ChattingForRoom from "../components/ChattingForRoom";
import "../styles/VoiceRoomIn.css";
import { FiUser } from "react-icons/fi";
import { FaMicrophone } from "react-icons/fa";
import { FaHand } from "react-icons/fa6";
import { RiEmotionLaughLine } from "react-icons/ri";
import { getUser } from "../services/UserService";
import { getVoiceroom } from "../services/RoomService";

function VoiceRoomIn() {
  const { id } = useParams(); // Extract the room ID from the URL
  useEffect(() => {
    // console.log("voiceroom ID is : " + id);
  }, [id]);

  const [roomData, setRoomData] = useState({});
  const [users, setUsers] = useState(null);

  useEffect(() => {
    getVoiceroom(id)
      .then((response) => {
        setRoomData(response.data);
        console.log("getVoiceroom roomData.userId : " + response.data.userId);
      })
      .catch((error) => {
        console.error("Error fetching room data:", error);
      });
  }, [id]);

  console.log("after getVoiceroom, roomData.userId : " + roomData.userId);

  useEffect(() => {
    if (roomData && roomData.userId) {
      console.log("just before getUser roomData.userId : " + roomData.userId);
      getUser(roomData.userId)
        .then((response) => {
          setUsers(response.data);
        })
        .catch((error) => {
          console.error("Error fetching users data:", error);
        });
    }
  }, [roomData]);

  return (
    <div className="vrDetPage">
      {roomData ? (
        <div>
          <div className="vrInLeft">
            <div className="titleAttendee">
              <p className="roomTitle inVR">{roomData.roomTitle}</p>
              <div className="attendees vrIn">
                <FiUser />
                <p>22</p>
                {roomData.languageName}
              </div>
            </div>
            <hr />
            <div className="attendUsers">
              <div className="userInStage">
                <ProfileImage />
                <p className="hostTag">Host</p>
                <p className="userNick">
                  {roomData.userId}
                  {/* {users.username} */}
                </p>
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
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default VoiceRoomIn;
