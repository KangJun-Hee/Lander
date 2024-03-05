import React from "react";
import "../styles/sideCategory.css";
import Lander from "../../public/images/LanderLogo.svg";
import VoiceRoomL from "../../public/images/VoiceRoom.svg";
import MomentL from "../../public/images/Moment.svg";
import ChattingL from "../../public/images/Chatting.svg";
import MyPageL from "../../public/images/MyPage.svg";
import HelpL from "../../public/images/Help.svg";
import SettingsL from "../../public/images/Settings.svg";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

function SideCategory() {
  const location = useLocation();
  const hideSidebarPaths = ["/join", "/login"];

  if (hideSidebarPaths.includes(location.pathname)) {
    // Join 페이지나 Login 페이지에서는 사이드바를 숨김
    return null;
  }

  return (
    <div className="sideBtn">
      <div className="sideBtnT">
        <NavLink to={"/"} className="logoAndHome">
          <img src={Lander} />
          <p className="home">LANDER</p>
        </NavLink>
        <List className="menuBtns t">
          <NavLink to={"/voiceRoom"} className="btn">
            <img src={VoiceRoomL} />
            <p>Voice Room</p>
          </NavLink>
          <NavLink to={"/moment"} className="btn">
            <img src={MomentL} />
            <p>Moment</p>
          </NavLink>
          <NavLink to={"/chat"} className="btn">
            <img src={ChattingL} />
            <p>Chatting</p>
          </NavLink>
          <NavLink to={"/myPage"} className="btn">
            <img src={MyPageL} />
            <p>My Page</p>{" "}
          </NavLink>
        </List>
      </div>
      <List className="menuBtns b">
        <NavLink to={"/help"} className="btn">
          <img src={HelpL} />
          Help
        </NavLink>
        <NavLink to={"/settings"} className="btn">
          <img src={SettingsL} />
          Settings
        </NavLink>
      </List>
    </div>
  );
}
const List = styled.div``;

export default SideCategory;
