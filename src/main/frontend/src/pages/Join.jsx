import React, { useState, useEffect, useRef } from "react";
import { createUser, updateUser } from "../services/UserService";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "@leecheuk/react-google-login";
import AppleLogin from "react-apple-login";
import "../services/UserService";
import { listLanguages } from "../services/LanguageService";
import { listDesiredLanguages } from "../services/DesiredLanguageService";

import Select from "react-tailwindcss-select";

import Lander from "../../public/images/LanderLogo.svg";
import cancelX from "../../public/images/cancelX.svg";
import "../styles/Join.css";
import axios from "axios";

function Join() {
  const USER_REGEX = /^[a-zAZ0-9-_]{3,23}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const emailRef = useRef(null);
  const errRef = useRef(null);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [id, setId] = useState("");
  const [validId, setValidId] = useState(false);
  const [idFocus, setIdFocus] = useState(false);

  const [username, setUsername] = useState("");
  const [validUsername, setValidUsername] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [matchPassword, setMatchPassword] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [sex, setSex] = useState("");

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (emailRef.current) {
      emailRef.current.focus();
    }
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(email);
    console.log(result);
    console.log(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(password);
    console.log(result);
    console.log(password);
    setValidPassword(result);
    const match = password === matchPassword;
    setValidMatch(match);
  }, [email]);

  useEffect(() => {
    setErrMsg("");
  }, [email, password, matchPassword]);

  //select native language
  const [languages, setLanguages] = useState([]);
  useEffect(() => {
    listLanguages()
      .then((response) => {
        setLanguages(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const handleLanguageClick = (languageName) => {
    setSelectedLanguage(languageName);
    console.log("Selected Native Language is : " + languageName);
  };
  //select desired language
  const [desiredLanguages, setDesiredLanguages] = useState([]);
  useEffect(() => {
    listDesiredLanguages()
      .then((response) => {
        setDesiredLanguages(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const [selectedDesiredLanguage, setSelectedDesiredLanguage] = useState("");
  const handleDesiredLanguageClick = (desiredLanguageName) => {
    setSelectedDesiredLanguage(desiredLanguageName);
    console.log("Selected Desired Language is : " + desiredLanguageName);
  };

  const navigator = useNavigate();

  function saveUser(e) {
    e.preventDefault();

    const user = {
      email,
      id,
      username,
      password,
      languageName: selectedLanguage,
      desiredLanguageName: selectedDesiredLanguage,
    };
    console.log("input data" + user);

    createUser(user).then((response) => {
      console.log(response.data);
      navigator("/join");
      setSuccess(true);
    });
  }

  const responseGoogle = (response) => {
    console.log(response);
  };

  // continue Btn toggle
  const [showDiv1, setShowDiv1] = useState(true);
  const [shouldTransition, setShouldTransition] = useState(false);

  const toggleDiv = () => {
    setShowDiv1(!showDiv1);
  };
  const handleContinueClick = () => {
    // Check if email is not null or empty
    if (email && id && username && password) {
      console.log("Email is required.");
      return false;
    }
    console.log("Continue button clicked");
    setShouldTransition(true);
  };
  useEffect(() => {
    if (shouldTransition) {
      console.log("Transition to new screen");
      toggleDiv();
      setShouldTransition(false); // Reset the variable after transitioning
    }
  }, [shouldTransition, showDiv1]);

  // Nationality Modal
  const Modal = ({ isOpen, onClose, children, modalType }) => {
    return (
      <>
        {isOpen && (
          // <div className="modal-overlay noti">
          <div className={`modal-overlay noti ${modalType}`}>
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
  const [modalType, setModalType] = useState(null);

  const openModal = (type) => {
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
  };
  return (
    <>
      {success ? (
        <div>
          <img src={Lander} />

          <h1>Nice to meet you! Let's get started</h1>
          <div className="wantLogIn">
            <a className="aToLogIn" href="http://localhost:3000/login">
              Log In
            </a>
          </div>
        </div>
      ) : (
        <div className="joinWholePage">
          <div className="joinWrap">
            <div className="joinAndLogo">
              <img src={Lander} />
              <p className="joinTitle">Sign Up</p>
            </div>
            {showDiv1 ? (
              <div className="joinContWrap">
                <div>
                  <GoogleLogin
                    clientId="118048682692-36t3tlnh4ff8mp4ooufdi3csvgihbitq.apps.googleusercontent.com"
                    buttonText="Continue with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    isSignedIn={true}
                    cookiePolicy={"single_host_origin"}
                    className="googleLogIn"
                  />
                </div>
                <div>
                  <AppleLogin
                    clientId="com.react.apple.login"
                    redirectURI="https://redirectUrl.com"
                  />
                </div>

                <div className="or">
                  <hr />
                  <p>OR</p>
                  <hr />
                </div>
                <form
                  className="Inputs join"
                  // onSubmit={handelSubmit}
                >
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={email}
                    ref={emailRef}
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-invalid={validEmail ? "false" : "true"}
                    aria-describedby="emnote"
                    onFocus={() => setEmailFocus(true)}
                    onBlur={() => setEmailFocus(false)}
                  />
                  <input
                    type="text"
                    placeholder="ID"
                    name="id"
                    value={id}
                    autoComplete="off"
                    onChange={(e) => setId(e.target.value)}
                    required
                    aria-invalid={validId ? "false" : "true"}
                    aria-describedby="idnote"
                    onFocus={() => setIdFocus(true)}
                    onBlur={() => setIdFocus(false)}
                  />
                  <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={username}
                    autoComplete="off"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    aria-invalid={validUsername ? "false" : "true"}
                    aria-describedby="unnote"
                    onFocus={() => setUsernameFocus(true)}
                    onBlur={() => setUsernameFocus(false)}
                  />
                  <input
                    type="text"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    aria-invalid={validPassword ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={() => setPasswordFocus(true)}
                    onBlur={() => setPasswordFocus(false)}
                  />
                </form>
                <button
                  onClick={() => {
                    handleContinueClick();
                    setShowDiv1(false);
                  }}
                  className="nextAndJoinBtn"
                >
                  Continue
                </button>
              </div>
            ) : (
              <div>
                {/* 새로 나타날 div 내용 */}
                <div>
                  <div className="contents">
                    <div>
                      <p className="optionTitle">Sex</p>
                      <div>
                        <div>
                          <label for="female">Female</label>
                          <input
                            type="radio"
                            id="female"
                            name="drone"
                            value="huey"
                            checked
                          />
                        </div>
                        <div>
                          <label for="male">Male</label>
                          <input
                            type="radio"
                            id="male"
                            name="drone"
                            value="dewey"
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="optionTitle">Birthday</p>
                      <select name="birth Y" id="birthY-select">
                        <option value="2024">2024</option>
                        <option value="cat">Cat</option>
                        <option value="hamster">Hamster</option>
                        <option value="parrot">Parrot</option>
                        <option value="spider">Spider</option>
                        <option value="goldfish">Goldfish</option>
                      </select>
                      <select name="birth M" id="birthM-select">
                        <option value="1">1</option>
                        <option value="cat">Cat</option>
                        <option value="hamster">Hamster</option>
                        <option value="parrot">Parrot</option>
                        <option value="spider">Spider</option>
                        <option value="goldfish">Goldfish</option>
                      </select>
                      <select name="birth D" id="birthD-select">
                        <option value="1">1</option>
                        <option value="cat">Cat</option>
                        <option value="hamster">Hamster</option>
                        <option value="parrot">Parrot</option>
                        <option value="spider">Spider</option>
                        <option value="goldfish">Goldfish</option>
                      </select>
                    </div>

                    <div className="NatioSelect">
                      {/* 국적선택창이 따로 호옹-하고 위에 켜질 거임. 검색 가능하게. */}
                      <p className="optionTitle">Nationality</p>
                      <button
                        className="optionTitle N"
                        // onClick={openModal}
                        onClick={() => openModal("nationality")}
                      >
                        Please Choose
                      </button>
                      {/* The Modal */}
                      <Modal
                        id="myModal"
                        // className="modal"
                        // isOpen={isModalOpen}
                        onClose={closeModal}
                        isOpen={modalType === "nationality"}
                        modalType="nationality"
                      >
                        {/* <!-- Modal content --> */}
                        <div className="modal-content">
                          <div>
                            <img src={cancelX} onClick={closeModal} />
                            <p>Nationality</p>
                            <button>Save</button>
                          </div>

                          <ul name="nationalities" id="nationalities-select">
                            {languages.map((language) => (
                              <li
                                key={language.languageId}
                                onClick={() =>
                                  handleLanguageClick(language.languageName)
                                }
                              >
                                {language.languageName}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </Modal>
                    </div>

                    <div className="DesiredSelect">
                      {/* 피그마 습득언어 복붙(인기언어만 하면 됨) */}
                      <p className="optionTitle">Desired Language</p>
                      <button
                        className="optionTitle"
                        // onClick={openModal}
                        onClick={() => openModal("desiredLanguage")}
                      >
                        Please Choose
                      </button>
                      {/* The Modal */}
                      <Modal
                        id="myModal"
                        // className="modal"
                        // isOpen={isModalOpen}
                        onClose={closeModal}
                        isOpen={modalType === "desiredLanguage"}
                        modalType="desiredLanguage"
                      >
                        {/* <!-- Modal content --> */}
                        <div className="modal-content">
                          <div>
                            <img src={cancelX} onClick={closeModal} />
                            <p>Desired Language</p>
                            <button>Save</button>
                          </div>

                          <ul name="languages" id="languages-select">
                            {/* 'language' is just a variable name chosen to represent each
                            element of the desiredLanguages array as you iterate
                            over it using the map function. You could name this variable anything you like, such as item, lang*/}
                            {desiredLanguages.map((language) => (
                              <li
                                key={language.languageId}
                                onClick={() =>
                                  handleDesiredLanguageClick(
                                    language.desiredLanguageName
                                  )
                                }
                              >
                                {language.desiredLanguageName}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </Modal>
                    </div>
                  </div>
                  <button
                    className="nextAndJoinBtn"
                    onClick={saveUser}
                    // disabled={
                    //   !validEmail || !validPassword || !validId || !validUsername
                    //     ? true
                    //     : false
                    // }
                  >
                    Sing Up!
                  </button>
                </div>
                {/* <button onClick={toggleDiv} className="nextBackBtn">
              뒤로
            </button> */}
              </div>
            )}
            <div className="wantLogIn">
              <span className="already">Already have an account?</span>
              <a className="aToLogIn" href="http://localhost:3000/login">
                Log In
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Join;
