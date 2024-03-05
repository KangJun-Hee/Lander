import React, { useState } from "react";
import ProfileImage from "../components/ProfileImage";
import { FaPenToSquare } from "react-icons/fa6";
import { SlOptionsVertical } from "react-icons/sl";
import { AiOutlineLike } from "react-icons/ai";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import "../styles/MomentDetail.css";
import cancelX from "../../public/images/cancelX.svg";
import SearchL from "../../public/images/Search.svg";

import DownArrowL from "../../public/images/DownArrow.svg";
import PostBtnL from "../../public/images/PostBtn.svg";
import OptionsL from "../../public/images/Options.svg";
import comment from "../../public/images/comment.svg";
import fullHeart from "../../public/images/fullHeart.svg";

function MomentDetail() {
  const Modal = ({ isOpen, children }) => {
    return (
      <>
        {isOpen && (
          <div className="modal-overlay">
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
  return (
    <div>
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
            <img src={cancelX} onClick={closeModal} />
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
      <div className="mmtContIn">
        <div>
          <div className="writerTop">
            <ProfileImage />
            <p>Miller Hwang</p>
            <p>04:29</p>
            <img src={OptionsL} />
          </div>
          <p>
            Did you know one of the most powerful self-improvement activities is
            right at your fingertips? No, it’s not working out or having good
            sleep hygiene (although these are great habits). It’s something even
            simpler — learning how to start journaling. Although it’s been
            around for thousands of years, journaling is currently having a
            moment in the limelight. From self-help blogs to famous authors like
            Deepak
          </p>
          <div>
            <img src={fullHeart} />
            <div>
              <img src={comment} />
              <p>3</p>
            </div>
          </div>
          <hr />
        </div>
        <div>
          <div className="CommentAreaSt">
            <p>Comments</p>
            <p className="commentCount">3</p>
          </div>
          <div>
            <input placeholder="leave yours!" className="commentInput" />
            <button className="cmtPostBtn">Post</button>
          </div>
          <div className="Comments">
            <div>
              <div className="writerTop">
                <ProfileImage />
                <p>Junhee Kang</p>
                <p className="cmtTime">23:14</p>
                <img src={OptionsL} />
              </div>
              <p>
                haha I can't understanding! this is so difficult for me as a
                beginer, but looks interesting!
              </p>
            </div>
            <div>
              <div className="writerTop">
                <ProfileImage />
                <p>Junhee Kang</p>
                <p className="cmtTime">23:14</p>
                <img src={OptionsL} />
              </div>
              <p>
                haha I can't understanding! this is so difficult for me as a
                beginer, but looks interesting!
              </p>
            </div>
            <div>
              <div className="writerTop">
                <ProfileImage />
                <p>Junhee Kang</p>
                <p className="cmtTime">23:14</p>
                <img src={OptionsL} />
              </div>
              <p>
                haha I can't understanding! this is so difficult for me as a
                beginer, but looks interesting!
              </p>
            </div>
            <div>
              <div className="writerTop">
                <ProfileImage />
                <p>Junhee Kang</p>
                <p className="cmtTime">23:14</p>
                <img src={OptionsL} />
              </div>
              <p>
                haha I can't understanding! this is so difficult for me as a
                beginer, but looks interesting!
              </p>
            </div>
            <div>
              <div className="writerTop">
                <ProfileImage />
                <p>Junhee Kang</p>
                <p className="cmtTime">23:14</p>
                <img src={OptionsL} />
              </div>
              <p>
                haha I can't understanding! this is so difficult for me as a
                beginer, but looks interesting!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MomentDetail;
