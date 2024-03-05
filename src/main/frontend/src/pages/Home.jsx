import Moment from "../components/aMoment";
import VoiceRoom from "../components/aVoiceRoom";
import Live from "../components/aLive";
import { motion } from "framer-motion";

import "../styles/Home.css";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

import React, { useState } from "react";
import styled from "styled-components";

function Home() {
  const [selectedTab, setSelectedTab] = useState("voiceRoom");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  // const tabColour = (tab) => {
  //   return {
  //     backgroundColor: tab === selectedTab ? "white" : "black",
  //   };
  // };
  const [value, setValue] = useState(false);
  const Switch = ({ isOn, handleToggle }) => {
    return (
      <>
        <input
          checked={isOn}
          onChange={handleToggle}
          className="react-switch-checkbox"
          id={`react-switch-new`}
          type="checkbox"
        />
        <label
          style={{ background: isOn && "#06D6A0" }}
          className="react-switch-label"
          htmlFor={`react-switch-new`}
        >
          <span className={`react-switch-button`} />
        </label>
      </>
    );
  };
  return (
    <div className="homeCss">
      <div className="allConForHome">
        <div className="vrAllWrap">
          <div className="vrLiveContr">
            <h3>Voice Room</h3>
            <Switch />
            <div className="changeTab">
              <button
                onClick={() => handleTabClick("voiceRoom")}
                // style={tabColour("voiceRoom")}
                className={`btnColour ${
                  selectedTab === "voiceRoom" ? "selectedTab" : "unselectedTab"
                }`}
              >
                Voice Room
              </button>
              <button
                onClick={() => handleTabClick("live")}
                // style={tabColour("live")}
                className={`btnColour ${
                  selectedTab === "live" ? "selectedTab" : "unselectedTab"
                }`}
              >
                Live
              </button>
            </div>
          </div>
          <motion.div className="carousel vr">
            {/* <span className="handle">
          <GoArrowLeft />
          </span> */}
            {selectedTab === "voiceRoom" && (
              <motion.div drag="x" className="vrContAll Home">
                <VoiceRoom />
                <VoiceRoom />
                <VoiceRoom />
                <VoiceRoom />
                <VoiceRoom />
                <VoiceRoom />
                <VoiceRoom />
                <VoiceRoom />
                <VoiceRoom />
                <VoiceRoom />
                <VoiceRoom />
                <VoiceRoom />
              </motion.div>
            )}
            {selectedTab === "live" && (
              <motion.div drag="x" className="vrContAll Home">
                <Live />
                <Live />
                <Live />
                <Live />
                <Live />
                <Live />
                <Live />
                <Live />
                <Live />
                <Live />
                <Live />
                <Live />
              </motion.div>
            )}
            <span className="handle">
              <GoArrowRight className="hand" />
            </span>
          </motion.div>
        </div>
        <div>
          <h3 className="mmtTitleForHome">Moment</h3>
          <motion.div className="carousel mmt">
            {/* <span className="handle">
            <GoArrowLeft />
            </span> */}
            <motion.div drag="x" className="vrContAll">
              <Moment />
              <Moment />
              <Moment />
              <Moment />
              <Moment />
              <Moment />
              <Moment />
              <Moment />
              <Moment />
              <Moment />
              <Moment />
              <Moment />
            </motion.div>
            <span className="handle">
              <GoArrowRight />
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;
