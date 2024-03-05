import React, { useRef, useEffect, useState } from "react";
import "../styles/components/aVoiceRoom.css";
import ProfileImage from "./ProfileImage";
import { FiMoreVertical } from "react-icons/fi";
import { FaUser } from "react-icons/fa";

import { listRooms } from "../services/RoomService";

function VoiceRoom() {
  const [voicerooms, setVoicerooms] = useState([]);

  // useEffect(() => {
  //   listRooms()
  //     .then((response) => {
  //       setVoicerooms(response.data);
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // });
  const handleButtonClick = () => {
    // 새 탭으로 이동할 주소
    const newTabUrl = "/voiceRoomIn";

    // 새 탭 열기
    window.open(newTabUrl, "_blank");
  };

  return (
    <div className="vrCont" onClick={handleButtonClick}>
      {voicerooms.map((voiceroom) => (
        <div className="test">
          <div className="top vr">
            <div className="proImg">
              <ProfileImage />
            </div>
            <div className="rUp vr">
              <p className="userNick">{voiceroom.userID.username}</p>
              <FiMoreVertical />
            </div>
          </div>
          <p className="roomTitle aVR">{voiceroom.roomTitle}</p>
          <div className="users">
            <div className="countUsers">
              <FaUser />
              <p>24</p>
            </div>
            <div className="partiUsers">
              <ProfileImage className="profileForUsers" />
              <ProfileImage className="profileForUsers" />
              <ProfileImage className="profileForUsers" />
              <ProfileImage className="profileForUsers" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VoiceRoom;
