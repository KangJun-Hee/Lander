import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/VoiceRoom.css";
import { FaExchangeAlt } from "react-icons/fa";
import cancelX from "../../public/images/cancelX.svg";
import startRoom from "../../public/images/startRoom.svg";
import VoiceRooma from "../components/aVoiceRoom";
import Livea from "../components/aLive";
import { listRooms, createRoom, getVoiceroom } from "../services/RoomService";
import { getUser } from "../services/UserService";

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

  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    listRooms()
      .then((response) => {
        setRooms(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // createVoiceroomModal
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

  const [users, setUsers] = useState([]);
  const userId = sessionStorage.getItem("userId"); // Retrieve userId from sessionStorage
  useEffect(() => {
    if (userId) {
      getUser(userId) // Pass userId to getUser function
        .then((response) => {
          setUsers(response.data);
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);
  const roomTitleRef = useRef(null);
  const [roomTitle, setroomTitle] = useState("");
  // const [userId, setUserId] = useState("");
  const [language, setLanguage] = useState("");
  const [success, setSuccess] = useState(false);
  // useEffect(() => {
  //   const savedUserId = parseInt(sessionStorage.getItem("userId"));

  //   if (roomTitleRef.current) {
  //     roomTitleRef.current.focus();
  //   }
  //   if (savedUserId) {
  //     setUserId(savedUserId);
  //   }
  // }, []);

  const navigator = useNavigate();
  function saveRoom(e) {
    e.preventDefault();

    console.log(Object.keys(selectedTabs).filter((key) => selectedTabs[key]));

    // const room = { roomTitle, userId, selectedTabs: selectedTabsArray };
    // console.log("savedRoomInfor", room);

    // Get the selected language tab
    const selectedLanguageTab = Object.keys(selectedTabs).find(
      (key) => selectedTabs[key]
    );

    // Get the data associated with the selected language tab
    let selectedLanguageData;
    if (selectedLanguageTab === "lanOne") {
      // Handle data for the first language tab
      selectedLanguageData = users.languageName;
    } else if (selectedLanguageTab === "lanTwo") {
      // Handle data for the second language tab
      selectedLanguageData = users.desiredLanguageName;
    } else if (selectedLanguageTab === "lanExcha") {
      selectedLanguageData = users.desiredLanguageName;
    }
    // Add more conditions if you have additional language tabs

    // Combine selected language data with other room information
    const room = { roomTitle, userId, languageName: selectedLanguageData };

    createRoom(room).then((response) => {
      const newRecordId = response.data.voiceroomId;
      console.log("newRecordId" + newRecordId);
      console.log("response.data : " + response.data);
      console.log("response : " + response);
      console.log("response.roomId : " + response.roomId);
      console.log(JSON.stringify(response));
      console.log(JSON.stringify(response.data.roomTitle));

      // console.log("Room created with ID:", response.data.roomId);

      // Navigate to the voice room page with the room ID
      // navigator(`/voiceRoomIn/${response.data.roomId}`);
      // setSuccess(true);

      // Fetch the room details using the room ID
      getVoiceroom(response.data.voiceroomId)
        .then((roomDetails) => {
          console.log("Room details:", roomDetails.data);
          // Navigate to the voice room page with the room details
          navigator(`/voiceRoomIn/${response.data.voiceroomId}`);
          setSuccess(true);
        })
        .catch((error) => {
          console.error("Error fetching room details:", error);
          // Handle error
        });
      console.log("Room created with ID:", response.data.voiceroomId);
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
            {rooms.map((item) => (
              <VoiceRooma key={item.id} item={item}></VoiceRooma>
            ))}
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
              <p>Please enter a room title!</p>
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
              <p>Please Select a language!</p>
              <button
                onClick={() => handleRoomLanTabClick("lanOne")}
                className={`btnColour ${
                  selectedTabs.lanOne ? "selectedTabs" : "unselectedTabs"
                }`}
                value={users.languageName}
              >
                {users.languageName}
              </button>
              <button
                onClick={() => handleRoomLanTabClick("lanTwo")}
                className={`btnColour ${
                  selectedTabs.lanTwo ? "selectedTabs" : "unselectedTabs"
                }`}
              >
                {users.desiredLanguageName}
              </button>
              <button
                onClick={() => handleRoomLanTabClick("lanExcha")}
                className={`btnColour ${
                  selectedTabs.lanExcha ? "selectedTabs" : "unselectedTabs"
                }`}
              >
                {users.languageName}
                <FaExchangeAlt />
                {users.desiredLanguageName}
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
