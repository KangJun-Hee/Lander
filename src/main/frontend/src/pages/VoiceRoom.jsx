import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/VoiceRoom.css";
import cancelX from "../../public/images/cancelX.svg";
import startRoom from "../../public/images/startRoom.svg";
import VoiceRooma from "../components/aVoiceRoom";
import Livea from "../components/aLive";
import { createRoom } from "../services/RoomService";

function VoiceRoom() {
  const [selectedTab, setSelectedTab] = useState("voiceRoom"); // chat 또는 voiceRoom 중 선택
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const [selectedTabs, setSelectedTabs] = useState({
    lanOne: true,
    lanTwo: false,
    lanExcha: false,
  });
  const handleRoomLanTabClick = (tab) => {
    setSelectedTabs((prevTabs) => ({
      ...Object.fromEntries(
        Object.keys(prevTabs).map((key) => [key, key === tab])
      ),
    }));
  };
  const selectedTabsArray = Object.keys(selectedTabs).filter(
    (key) => selectedTabs[key]
  );

  const Modal = ({ isOpen, children }) => {
    return (
      <>
        {isOpen && (
          <div className="modal-overlay VoiceRoomPage">
            <div className="modal">
              <div className="modal-content">{children}</div>
            </div>
          </div>
        )}
      </>
    );
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const roomTitleRef = useRef(null);
  const [roomTitle, setroomTitle] = useState("");
  const [userId, setUserId] = useState("");
  const [language, setLanguage] = useState("");
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    const savedUserId = parseInt(sessionStorage.getItem("userId"));

    if (roomTitleRef.current) {
      roomTitleRef.current.focus();
    }
    if (savedUserId) {
      setUserId(savedUserId);
    }
  }, []);

  const navigator = useNavigate();
  function saveRoom(e) {
    e.preventDefault();

    console.log(Object.keys(selectedTabs).filter((key) => selectedTabs[key]));

    const room = { roomTitle, userId, selectedTabs: selectedTabsArray };
    console.log("savedRoomInfor", room);

    createRoom(room).then((response) => {
      console.log(response.data);
      navigator("/voiceRoomIn");
      setSuccess(true);
    });
  }

  return (
    <div className="vrWrap">
      <div>
        <div>
          <button
            onClick={() => handleTabClick("voiceRoom")}
            className={`btnColour ${
              selectedTab === "voiceRoom" ? "selectedTab" : "unselectedTab"
            }`}
          >
            VoiceRoom
          </button>
          <button
            onClick={() => handleTabClick("live")}
            className={`btnColour ${
              selectedTab === "live" ? "selectedTab" : "unselectedTab"
            }`}
          >
            Live
          </button>
        </div>
      </div>
      <div className="contAllAndStartBtn">
        {selectedTab === "voiceRoom" && (
          <div className="vrContAll VR">
            <VoiceRooma></VoiceRooma>
            <VoiceRooma></VoiceRooma>
            <VoiceRooma></VoiceRooma>
            <VoiceRooma></VoiceRooma>
            <VoiceRooma></VoiceRooma>
            <VoiceRooma></VoiceRooma>
            <VoiceRooma></VoiceRooma>
            <VoiceRooma></VoiceRooma>
            <VoiceRooma></VoiceRooma>
            <VoiceRooma></VoiceRooma>
            <VoiceRooma></VoiceRooma>
            <VoiceRooma></VoiceRooma>
            <VoiceRooma></VoiceRooma>
            <VoiceRooma></VoiceRooma>
            <VoiceRooma></VoiceRooma>
            <VoiceRooma></VoiceRooma>
            <VoiceRooma></VoiceRooma>
            <VoiceRooma></VoiceRooma>
            <VoiceRooma></VoiceRooma>
            <VoiceRooma></VoiceRooma>

            <div className="vrCont">last</div>
          </div>
        )}
        {selectedTab === "live" && (
          <div className="vrContAll VR">
            <Livea></Livea>
            <Livea></Livea>
            <Livea></Livea>
            <Livea></Livea>
          </div>
        )}
        <img src={startRoom} />
        <button onClick={openModal}>Start Lander!</button>

        {/* The Modal */}
        <Modal
          id="myModal"
          className="modal"
          isOpen={isModalOpen}
          onClose={closeModal}
        >
          {/* <!-- Modal content --> */}
          <div className="modal-content">
            <div>
              <img src={cancelX} onClick={closeModal} />
              <button onClick={saveRoom}>Start!</button>
            </div>
            <div>
              <label>Please enter a room title!</label>
              <input
                type="text"
                name="roomTitle"
                value={roomTitle}
                ref={roomTitleRef}
                autoComplete="off"
                onChange={(e) => setroomTitle(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Please Select a language!</label>
              <button
                onClick={() => handleRoomLanTabClick("lanOne")}
                className={`btnColour ${
                  selectedTabs.lanOne ? "selectedTabs" : "unselectedTabs"
                }`}
              >
                lanOne
              </button>
              <button
                onClick={() => handleRoomLanTabClick("lanTwo")}
                className={`btnColour ${
                  selectedTabs.lanTwo ? "selectedTabs" : "unselectedTabs"
                }`}
              >
                lanTwo
              </button>
              <button
                onClick={() => handleRoomLanTabClick("lanExcha")}
                className={`btnColour ${
                  selectedTabs.lanExcha ? "selectedTabs" : "unselectedTabs"
                }`}
              >
                En↔️Kr
              </button>
              <div>
                <div>
                  <p>Save this voiceroom</p>
                  <input type="checkbox" />
                </div>
                <div>
                  <p>Share this on your momments!</p>
                  <input type="checkbox" />
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default VoiceRoom;
