import React, { useState } from "react";
import ProfileImage from "./ProfileImage";
import OptionsL from "../../public/images/Options.svg";
import "../styles/components/Chatting.css";

function Chatting({ onClick }) {
  const handleClick = () => {
    // Chatting 컴포넌트 내부에서 클릭 이벤트를 처리하고, 상위 컴포넌트로 전달합니다.
    onClick("chat");
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
    <div className="Chatting" onClick={handleClick}>
      <div className="proImg cht">
        <ProfileImage />
      </div>
      <div className="right">
        <div className="rUp">
          <p>Yangpa Koongya</p>
          <p className="id">@dieir</p>
          <div className="rUpright">
            <p className="chatTime">16:22</p>
            <img onClick={openModal} src={OptionsL} className="options" />
            {/* The Modal */}
            <Modal
              id="myModal"
              className="modal"
              isOpen={isModalOpen}
              onClose={closeModal}
            >
              {/* <!-- Modal content --> */}
              <div className="modal-content">
                <button>Pin</button>
                <button>Turn off Notification</button>
                <button>Block</button>
                <button>Exit</button>
              </div>
            </Modal>
          </div>
        </div>
        <p className="msgPreview">i mean, i ate vietnamess! today</p>
      </div>
    </div>
  );
}

export default Chatting;
