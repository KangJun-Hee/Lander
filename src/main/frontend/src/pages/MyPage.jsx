import React, { useEffect, useState } from "react";
import ProfileImage from "../components/ProfileImage";
import Moment from "../components/aMoment";
import { FaExchangeAlt } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import CancelX from "../../public/images/cancelX.svg";
import ProfilePicture from "../../public/images/ProfilePicture.svg";

import "../styles/MyPage.css";
import { listUsers, getUser } from "../services/UserService";
import { logout } from "../services/UserService";

function MyPage() {
  const [users, setUsers] = useState([]);
  // const [username, setUsername] = useState("");

  useEffect(() => {
    const userId = sessionStorage.getItem("userId"); // Retrieve userId from sessionStorage
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
  // useEffect(() => {
  //   // Retrieve the username from sessionStorage
  //   const storedUsername = sessionStorage.getItem("username");

  //   // Update the state with the retrieved username
  //   if (storedUsername) {
  //     setUsername(storedUsername);
  //   }
  // }, []);
  const Modal = ({ isOpen, onClose, children }) => {
    return (
      <>
        {isOpen && (
          <div className="modal-overlay MyPage">
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
  const handleSubmit = async (e) => {
    e.preventDefault();

    logout();
    window.location.href = `/`;
  };
  return (
    <div>
      <div className="Info">
        <div className="Content">
          <ProfileImage />
          <div className="userNLang">
            <p>{users.username}</p>
            <p>{users.id}</p>
          </div>

          <div>
            <label>Follower</label>
            <label>Following</label>
          </div>
        </div>
        <div className="lang">
          <p>{users.languageName}</p>
          <FaExchangeAlt />
          <p>{users.desiredLanguageName}</p>
        </div>
        <p>
          Hi! I'm from south america, i'd like to learn korean! plz sent me a
          msg~
        </p>
        <div>
          <button
            onClick={openModal}
            // onClick={() => updateUser(user.id)}
            className="editProBtn"
          >
            Edit profile
          </button>
          <a onClick={handleSubmit}>Log Out</a>
        </div>
        {/* The Modal */}
        <Modal
          id="myModal"
          className="modal MyPage"
          isOpen={isModalOpen}
          onClose={closeModal}
        >
          {/* <!-- Modal content --> */}
          <div className="modal-content">
            <div className="editTop">
              <img src={CancelX} onClick={closeModal} className="closeBtn" />
              <p>Edit profile</p>
              <button className="saveBtn">Save</button>
            </div>
            <div>
              <img src={ProfilePicture} />
            </div>
            <div>
              <label>Name</label>
              <input type="text" />
              <label for="bio">Bio</label>
              <input type="text" />
              <p className="optionTitle">Desired Language</p>
              <select name="languages" id="languages-select">
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option>
              </select>
              <select name="languages" id="languages-select">
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option>
              </select>
              <select name="languages" id="languages-select">
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option>
              </select>
              <p className="optionTitle">Desired Language</p>
              <select name="languages" id="languages-select">
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option>
              </select>
            </div>
            <p>Some text in the Modal..</p>
          </div>
        </Modal>
      </div>
      <hr className="myPageHr" />
      <div className="mmtWrap">
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
      </div>
    </div>
  );
}

export default MyPage;
