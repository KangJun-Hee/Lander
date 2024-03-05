import React, { useState } from "react";
import Momenta from "../components/aMoment";
import "../styles/Moment.css";
import cancelX from "../../public/images/cancelX.svg";
import SearchL from "../../public/images/Search.svg";
import DownArrowL from "../../public/images/DownArrow.svg";
import PostBtnL from "../../public/images/PostBtn.svg";
import OptionsL from "../../public/images/Options.svg";

function Moment() {
  const Modal = ({ isOpen, onClose, children }) => {
    return (
      <>
        {isOpen && (
          <div className="modal-overlay">
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
    <div className="momentPage">
      <div className="topTiFil">
        <div className="titleAndLangFilter">
          <h3>Moment</h3>
          <details className="dropdown">
            <summary role="button">
              <a className="button">Langua</a>
              <img src={DownArrowL} />
            </summary>
            <ul>
              <li>
                <a href="#">English</a>
              </li>
              <li>
                <a href="#">Korean</a>
              </li>
            </ul>
          </details>
        </div>
        <div className="searchAndPost">
          <div className="Search">
            <img src={SearchL} />
            <input className="searchInput" placeholder="Search...!" />
          </div>
          <button onClick={openModal} className="postBtn">
            <img src={PostBtnL} />
            Post!
          </button>
        </div>
      </div>
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
            <img src={cancelX} />
            <button>Post!</button>
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
      <div className="mmtWrapForScr">
        <div className="mmtContS All">
          <Momenta className="mmtCont"></Momenta>
          <Momenta className="mmtCont"></Momenta>
          <Momenta className="mmtCont"></Momenta>
          <Momenta className="mmtCont"></Momenta>
          <Momenta className="mmtCont"></Momenta>
          <Momenta className="mmtCont"></Momenta>
          <Momenta className="mmtCont"></Momenta>
          <Momenta className="mmtCont"></Momenta>
          <div className="mmtCont">9</div>
          <div className="mmtCont">10</div>
          <div className="mmtCont">11</div>
          <div className="mmtCont">12</div>
          <div className="mmtCont">13</div>
          <div className="mmtCont">14</div>
          <div className="mmtCont">15</div>
          <div className="mmtCont">16</div>
          <div className="mmtCont">1</div>
        </div>
      </div>
    </div>
  );
}

export default Moment;
