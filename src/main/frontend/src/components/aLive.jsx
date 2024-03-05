import React from "react";
import ProfileImage from "./ProfileImage";

import "../styles/components/aLive.css";
import { GrFormView } from "react-icons/gr";
import { FiMoreVertical } from "react-icons/fi";

function aLive() {
  const handleButtonClick = () => {
    // 새 탭으로 이동할 주소
    const newTabUrl = "/LiveIn";

    // 새 탭 열기
    window.open(newTabUrl, "_blank");
  };
  return (
    <div className="liveAll" onClick={handleButtonClick}>
      <div className="up">
        <div>
          <GrFormView />
          <p>23</p>
        </div>
        <FiMoreVertical />
      </div>
      <div className="host">
        <ProfileImage />
        <p>Christina Young</p>
      </div>
      <p>Get Ready With Me!</p>
    </div>
  );
}

export default aLive;
