import React from "react";
import Home from "./Home";
import "../styles/Pages.css";
import SideCategory from "../components/SideCategory";
import Join from "../pages/Join";
import LogIn from "../pages/Login";
import VoiceRoom from "../pages/VoiceRoom";
import VoiceRoomIn from "../pages/VoiceRoomIn";
import LiveIn from "../pages/LiveIn";
import Moment from "../pages/Moment";
import MomentDetail from "../pages/MomentDetail";
import Chat from "../pages/Chat";
import MyPage from "../pages/MyPage";
import Settings from "../pages/Settings";
import Help from "./Help";
import { Route, Routes } from "react-router-dom";

function Pages() {
  return (
    <Routes className="pages">
      <Route path="/" element={<Home />} />
      <Route path="/join" element={<Join />} />
      <Route path="/logIn" element={<LogIn />} />

      <Route path="/voiceRoom" element={<VoiceRoom />} />
      <Route path="/voiceRoomIn" element={<VoiceRoomIn />} />
      <Route path="/liveIn" element={<LiveIn />} />

      <Route path="/moment" element={<Moment />} />
      <Route path="/momentDetail" element={<MomentDetail />} />

      <Route path="/chat" element={<Chat />} />
      <Route path="/myPage" element={<MyPage />} />

      <Route path="/settings" element={<Settings />} />
      <Route path="/help" element={<Help />} />
    </Routes>
  );
}

export default Pages;
