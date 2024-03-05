import React from "react";
import ProfileImage from "./ProfileImage";
import "../styles/components/ParticipantForRoom.css";

function ParticipantForRoom() {
  return (
    <div className="participantForRoom">
      <div>
        <p>Participants</p>
        <p>(22)</p>
      </div>
      <hr />
      <div className="participants">
        <div className="aPartici">
          <ProfileImage />
          <p>nickname</p>
          <p>Host</p>
        </div>
        <div className="aPartici">
          <ProfileImage />
          <p>nickname</p>
        </div>
        <div className="aPartici">
          <ProfileImage />
          <p>nickname</p>
        </div>
        <div className="aPartici">
          <ProfileImage />
          <p>nickname</p>
        </div>
      </div>
    </div>
  );
}

export default ParticipantForRoom;
