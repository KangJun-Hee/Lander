import React, { useRef, useEffect, useState } from "react";
import ProfileImage from "./ProfileImage";
import "../styles/components/aMoment.css";
import { FiMoreVertical } from "react-icons/fi";
import comment from "../../public/images/comment.svg";
import fullHeart from "../../public/images/fullHeart.svg";

function aMoment() {
  const handleButtonClick = () => {
    // 새 탭으로 이동할 주소
    const newTabUrl = "/momentDetail";

    // 새 탭 열기
    window.open(newTabUrl, "_blank");
  };
  return (
    <div className="mmtCont Home" onClick={handleButtonClick}>
      <div className="top mmt">
        <div className="proImg">
          <ProfileImage />
        </div>
        <div className="rUp">
          <p>Sage Kang</p>
          <div className="timeAndOption">
            <div>16:39</div>
            <FiMoreVertical />
          </div>
        </div>
      </div>
      <p>
        i'm coding now, it's a little bit chilly but okay. well, i'm super
        freaky strong girl!
      </p>
      <div>
        <img src={fullHeart} />
        <img src={comment} />
      </div>
    </div>
  );
}

export default aMoment;
