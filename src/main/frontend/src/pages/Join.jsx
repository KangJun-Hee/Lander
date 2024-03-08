import React, { useState, useEffect, useRef } from "react";
import { createUser, updateUser } from "../services/UserService";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "@leecheuk/react-google-login";
import AppleLogin from "react-apple-login";
import "../services/UserService";

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

  const navigator = useNavigate();

  function saveUser(e) {
    e.preventDefault();

    const user = { email, id, username, password };
    console.log(user);

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
                            <li value="Afghanistan">Afghanistan</li>
                            <li value="Albania">Albania</li>
                            <li value="Algeria">Algeria</li>
                            <li value="Andorra">Andorra</li>
                            <li value="Angola">Angola</li>
                            <li value="Antigua & Barbuda">Antigua & Barbuda</li>
                            <li value="Argentina">Argentina</li>
                            <li value="Armenia">Armenia</li>
                            <li value="Aruba">Aruba</li>
                            <li value="Australia">Australia</li>
                            <li value="Austria">Austria</li>
                            <li value="Azerbaijian">Azerbaijian</li>
                            <li value="-"></li>
                            <li value="Bahamas">Bahamas</li>
                            <li value="Bahrain">Bahrain</li>
                            <li value="Bangladesh">Bangladesh</li>
                            <li value="Barbados">Barbados</li>
                            <li value="Belarus">Belarus</li>
                            <li value="Belgium">Belgium</li>
                            <li value="Belize">Belize</li>
                            <li value="Benin">Benin</li>
                            <li value="Bhutan">Bhutan</li>
                            <li value="Bolivia">Bolivia</li>
                            <li value="Bosnia and Herzegovina">
                              Bosnia and Herzegovina
                            </li>
                            <li value="Brazil">Brazil</li>
                            <li value="Brunei Darussalam">Brunei Darussalam</li>
                            <li value="Bulgaria">Bulgaria</li>
                            <li value="Burkina Faso">Burkina Faso</li>
                            <li value="Burundi">Burundi</li>
                            <li value="-"></li>
                            <li value="Cambodia">Cambodia</li>
                            <li value="Cameroon">Cameroon</li>
                            <li value="Canada">Canada</li>
                            <li value="Cape Verde">Cape Verde</li>
                            <li value="Central African Republic">
                              Central African Republic
                            </li>
                            <li value="Chad">Chad</li>
                            <li value="Chile">Chile</li>
                            <li value="China">China</li>
                            <li value="Colombia">Colombia</li>
                            <li value="Comoros">Comoros</li>
                            <li value="Congo(DR)">Congo(DR)</li>
                            <li value="Congo(Republic)">Congo(Republic)</li>
                            <li value="Cook Islands">Cook Islands</li>
                            <li value="Costa Rica">Costa Rica</li>
                            <li value="Cote d'lvoire">Cote d'lvoire</li>
                            <li value="Croatia">Croatia</li>
                            <li value="Cuba">Cuba</li>
                            <li value="Curacao">Curacao</li>
                            <li value="Cyprus">Cyprus</li>
                            <li value="Czech Republic">Czech Republic</li>
                            <li value="-"></li>
                            <li value="Denmark">Denmark</li>
                            <li value="Djibouti">Djibouti</li>
                            <li value="Dominica">Dominica</li>
                            <li value="Dominican Republic">
                              Dominican Republic
                            </li>
                            <li value="-"></li>
                            <li value="Ecuador">Ecuador</li>
                            <li value="Egypt">Egypt</li>
                            <li value="El Salvador">El Salvador</li>
                            <li value="Equatorial Guinea">Equatorial Guinea</li>
                            <li value="Eritrea">Eritrea</li>
                            <li value="Estonia">Estonia</li>
                            <li value="Ethiopia">Ethiopia</li>
                            <li value="-"></li>
                            <li value="Faroe Islands">Faroe Islands</li>
                            <li value="Fiji">Fiji</li>
                            <li value="Finland">Finland</li>
                            <li value="France">France</li>
                            <li value="-"></li>
                            <li value="Gabon">Gabon</li>
                            <li value="Gambia">Gambia</li>
                            <li value="Georgia">Georgia</li>
                            <li value="Germany">Germany</li>
                            <li value="Ghana">Ghana</li>
                            <li value="Greece">Greece</li>
                            <li value="Greenland">Greenland</li>
                            <li value="Grenada">Grenada</li>
                            <li value="Guam">Guam</li>
                            <li value="Guatemala">Guatemala</li>
                            <li value="Guernsey">Guernsey</li>
                            <li value="Guinea">Guinea</li>
                            <li value="Guinea Bissau">Guinea Bissau</li>
                            <li value="Guyana">Guyana</li>
                            <li value="-"></li>
                            <li value="Haiti">Haiti</li>
                            <li value="Honduras">Honduras</li>
                            <li value="Hong Kong">Hong Kong</li>
                            <li value="Hungary">Hungary</li>
                            <li value="-"></li>
                            <li value="Iceland">Iceland</li>
                            <li value="India">India</li>
                            <li value="Indonesia">Indonesia</li>
                            <li value="Iran">Iran</li>
                            <li value="Iraq">Iraq</li>
                            <li value="Ireland">Ireland</li>
                            <li value="Israel">Israel</li>
                            <li value="Italy">Italy</li>
                            <li value="-"></li>
                            <li value="Jamaica">Jamaica</li>
                            <li value="Japan">Japan</li>
                            <li value="Jersey">Jersey</li>
                            <li value="Jordan">Jordan</li>
                            <li value="-"></li>
                            <li value="Kazakhstan">Kazakhstan</li>
                            <li value="Kenya">Kenya</li>
                            <li value="Kiribati">Kiribati</li>
                            <li value="Korea">Korea</li>
                            <li value="Kosovo">Kosovo</li>
                            <li value="Kuwait">Kuwait</li>
                            <li value="Kyrgyzstan">Kyrgyzstan</li>
                            <li value="-"></li>
                            <li value="Laos">Laos</li>
                            <li value="Latvia">Latvia</li>
                            <li value="Lebanon">Lebanon</li>
                            <li value="Lesotho">Lesotho</li>
                            <li value="Liberia">Liberia</li>
                            <li value="Libya">Libya</li>
                            <li value="Liechtenstein">Liechtenstein</li>
                            <li value="Lithuania">Lithuania</li>
                            <li value="Luxembourg">Luxembourg</li>
                            <li value="-"></li>
                            <li value="Macau">Macau</li>
                            <li value="Madagascar">Madagascar</li>
                            <li value="Malawi">Malawi</li>
                            <li value="Malaysia">Malaysia</li>
                            <li value="Maldives">Maldives</li>
                            <li value="Mali">Mali</li>
                            <li value="Malta">Malta</li>
                            <li value="Marshall Islands">Marshall Islands</li>
                            <li value="Mauritania">Mauritania</li>
                            <li value="Mauritius">Mauritius</li>
                            <li value="Mexico">Mexico</li>
                            <li value="Micronesia">Micronesia</li>
                            <li value="Monaco">Monaco</li>
                            <li value="Mozambiqua">Mozambiqua</li>
                            <li value="Moldova">Moldova</li>
                            <li value="Mongolia">Mongolia</li>
                            <li value="Montenegro">Montenegro</li>
                            <li value="Morocco">Morocco</li>
                            <li value="Myanmar(Burma)">Myanmar(Burma)</li>
                            <li value="-"></li>
                            <li value="Namibia">Namibia</li>
                            <li value="Nauru">Nauru</li>
                            <li value="Nepal">Nepal</li>
                            <li value="Netherlands">Netherlands</li>
                            <li value="New Zealand">New Zealand</li>
                            <li value="Nicaragua">Nicaragua</li>
                            <li value="Niger">Niger</li>
                            <li value="Nigeria">Nigeria</li>
                            <li value="Niue">Niue</li>
                            <li value="North Korea">North Korea</li>
                            <li value="North Macedonia">North Macedonia</li>
                            <li value="Norway">Norway</li>
                            <li value="-"></li>
                            <li value="Oman">Oman</li>
                            <li value="-"></li>
                            <li value="Pakistan">Pakistan</li>
                            <li value="Palau">Palau</li>
                            <li value="Palestine">Palestine</li>
                            <li value="Panama">Panama</li>
                            <li value="Papua New Guines">Papua New Guines</li>
                            <li value="Paraguay">Paraguay</li>
                            <li value="Peru">Peru</li>
                            <li value="Philippines">Philippines</li>
                            <li value="Poland">Poland</li>
                            <li value="Portugal">Portugal</li>
                            <li value="Puerto Rico(USA)">Puerto Rico(USA)</li>
                            <li value="-"></li>
                            <li value="Qatar">Qatar</li>
                            <li value="-"></li>
                            <li value="Romania">Romania</li>
                            <li value="Russia">Russia</li>
                            <li value="Rwanda">Rwanda</li>
                            <li value="-"></li>
                            <li value="Saint Kitts ans Nevis">
                              Saint Kitts ans Nevis
                            </li>
                            <li value="Saint Lucia">Saint Lucia</li>
                            <li value="Saint Vincent and the Grenadines">
                              Saint Vincent and the Grenadines
                            </li>
                            <li value="Samoa">Samoa</li>
                            <li value="San Marino">San Marino</li>
                            <li value="Sao Tome And Principe">
                              Sao Tome And Principe
                            </li>
                            <li value="Saudi Arabia">Saudi Arabia</li>
                            <li value="Scotland(UK)">Scotland(UK)</li>
                            <li value="Senegal">Senegal</li>
                            <li value="Serbia">Serbia</li>
                            <li value="Seychelles">Seychelles</li>
                            <li value="Sierra Leone">Sierra Leone</li>
                            <li value="Singapore">Singapore</li>
                            <li value="Solomon Islands">Solomon Islands</li>
                            <li value="Slovakia">Slovakia</li>
                            <li value="Slovenia">Slovenia</li>
                            <li value="Somalia">Somalia</li>
                            <li value="South Africa">South Africa</li>
                            <li value="South Sudan">South Sudan</li>
                            <li value="Spain">Spain</li>
                            <li value="Sri Lanka">Sri Lanka</li>
                            <li value="Sudan">Sudan</li>
                            <li value="Suriname">Suriname</li>
                            <li value="Swaziland">Swaziland</li>
                            <li value="Sweden">Sweden</li>
                            <li value="Switzerland">Switzerland</li>
                            <li value="Syria">Syria</li>
                            <li value="-"></li>
                            <li value="Taiwan">Taiwan</li>
                            <li value="Tajikistan">Tajikistan</li>
                            <li value="Tanzania">Tanzania</li>
                            <li value="Thailand">Thailand</li>
                            <li value="Timor-Leste">Timor-Leste</li>
                            <li value="Togo">Togo</li>
                            <li value="Tonga">Tonga</li>
                            <li value="Trinidad ans Tobago">
                              Trinidad ans Tobago
                            </li>
                            <li value="Tunisia">Tunisia</li>
                            <li value="Turkiye">Turkiye</li>
                            <li value="Turkmenistan">Turkmenistan</li>
                            <li value="Tuvalu">Tuvalu</li>
                            <li value="-"></li>
                            <li value="UAE">UAE</li>
                            <li value="Uganda">Uganda</li>
                            <li value="UK">UK</li>
                            <li value="Ukraine">Ukraine</li>
                            <li value="Uruguay">Uruguay</li>
                            <li value="USA">USA</li>
                            <li value="Uzbekistan">Uzbekistan</li>
                            <li value="-"></li>
                            <li value="Vanuatu">Vanuatu</li>
                            <li value="Venezuela">Venezuela</li>
                            <li value="Viet Nam">Viet Nam</li>
                            <li value="-"></li>
                            <li value="Yemen">Yemen</li>
                            <li value="-"></li>
                            <li value="Zambia">Zambia</li>
                            <li value="Zimbabwe">Zimbabwe</li>
                          </ul>
                        </div>
                      </Modal>
                    </div>

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
                          <li value="Afghanistan">Afghanistan</li>
                          <li value="Albania">Albania</li>
                          <li value="Algeria">Algeria</li>
                          <li value="Andorra">Andorra</li>
                          <li value="Angola">Angola</li>
                          <li value="Antigua & Barbuda">Antigua & Barbuda</li>
                          <li value="Argentina">Argentina</li>
                        </ul>
                      </div>
                    </Modal>
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
