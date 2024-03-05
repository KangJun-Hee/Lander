import React, { useContext, useState, useEffect } from "react";
import "../styles/TopToolBar.css";
import ProfileImage from "../components/ProfileImage";
import NotifiL from "../../public/images/Notifi.svg";
import cancelX from "../../public/images/cancelX.svg";
import { getUser } from "../services/UserService";

import { MdDarkMode } from "react-icons/md";
import { useTheme } from "../context/ThemeContext";
import DarkMode from "../../public/images/DarkMode.svg";

function TopToolBar() {
  const clickToLogIn = () => {
    window.location.href = `/login`;
  };
  const clickToJoin = () => {
    window.location.href = `/join`;
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    // 로그인 처리 로직
    setIsLoggedIn(true);
  };
  // const handleLogout = () => {
  //   // 로그아웃 처리 로직
  //   setIsLoggedIn(false);
  // };
  const [user, setUser] = useState({});
  const ACCESS_TOKEN = sessionStorage.getItem("accessToken");

  useEffect(() => {
    if (ACCESS_TOKEN) {
      getUser()
        .then((response) => {
          setUser(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [ACCESS_TOKEN]);

  const handleLogout = async () => {
    localStorage.clear();
  };

  const [darkMode, toggleDarkMode] = useTheme();
  const handleDarkModeClick = () => {
    toggleDarkMode(!darkMode);
  };

  const Modal = ({ isOpen, onClose, children }) => {
    return (
      <>
        {isOpen && (
          <div className="modal-overlay noti">
            <div className="modal">
              <div className="modal-content">
                {children}
                <button onClick={onClose} className="close-button">
                  Close
                </button>
              </div>
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
  return (
    <div className="TopToolBar">
      <div className="icons">
        <img
          src={DarkMode}
          style={{ cursor: "pointer" }}
          onClick={handleDarkModeClick}
          className="darkModeBtn"
        />
        {!ACCESS_TOKEN ? (
          <div>
            <button onClick={clickToLogIn} className="logInBtn">
              Log In
            </button>
            <button onClick={clickToJoin} className="signUpBtn">
              Sign Up
            </button>
          </div>
        ) : (
          <div className="notifiAll">
            <img onClick={openModal} src={NotifiL} />
            {/* The Modal */}
            <Modal
              id="myModal"
              className="modal"
              isOpen={isModalOpen}
              onClose={closeModal}
            >
              {/* <!-- Modal content --> */}
              <div className="modal-content">
                <div className="notifiTop">
                  <div>
                    <p>Notifications</p>
                    <p className="notifiInfo">
                      Show notifications from the last 30 days only!
                    </p>
                  </div>
                  <p className="clearBtn">Clear</p>
                </div>
                <div>
                  <p className="notiLatest">Today</p>
                  <div className="aNotification">
                    <ProfileImage />
                    <div className="aNotiConts">
                      <div>
                        <p className="notiKind">
                          Talor leaves a comment on your moment!
                        </p>
                        <p className="notiCont">That's nice Junhee~</p>
                      </div>
                      <p className="notiTime">2min</p>
                    </div>
                  </div>
                  <div className="aNotification">
                    <ProfileImage />
                    <div className="aNotiConts">
                      <div>
                        <p className="notiKind">
                          Talor leaves a comment on your moment!
                        </p>
                        <p className="notiCont">That's nice Junhee~</p>
                      </div>
                      <p className="notiTime">2min</p>
                    </div>
                  </div>
                </div>
                <hr />
                <textarea placeholder="Let's share stories and connect with others~" />
                <hr />
                <div>
                  <div>logo and logo</div>
                  <button>Post!</button>
                </div>
              </div>
            </Modal>
          </div>
        )}
      </div>
    </div>
  );
}

export default TopToolBar;
