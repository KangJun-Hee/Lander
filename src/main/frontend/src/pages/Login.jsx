import React, { useEffect, useRef, useState, useContext } from "react";
import AuthContext from "../context/AuthProvider";
import "../services/UserService";
import GoogleLogin from "@leecheuk/react-google-login";
import AppleLogin from "react-apple-login";

import "../styles/LogIn.css";
import Lander from "../../public/images/LanderLogo.svg";
import { login } from "../services/UserService";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const { setAuth } = useContext(AuthContext);

  const emailRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userInfo = { email, password };
    console.log(email, password);
    console.log("Client Log:", userInfo);

    try {
      // const response = await axios
      //   .post(REST_API_BASE_URL, { email, password })
      const response = await login(userInfo);
      console.log(response); // 전체 응답 객체를 출력
      // login(values).then((response) => {
      console.log(JSON.stringify(response) + " this is we've got1");
      const responseData = response.data;
      console.log(JSON.stringify(responseData) + " this is we've got2");

      if (responseData === undefined) {
        console.log("입력하신 id 가 일치하지 않습니다.");
        alert("입력하신 id 가 일치하지 않습니다.");
      } else if (responseData.email === null) {
        // id는 있지만, pw 는 다른 경우 userId = null , msg = undefined
        console.log(
          "======================",
          "입력하신 비밀번호 가 일치하지 않습니다."
        );
        alert("입력하신 비밀번호 가 일치하지 않습니다.");
      } else if (responseData.success) {
        // id, pw 모두 일치 userId = userId1, msg = undefined
        console.log("======================", "로그인 성공");
        // sessionStorage.setItem("email", userInfo.email); // sessionStorage에 id를 user_id라는 key 값으로 저장
        // sessionStorage.setItem("password", userInfo.password); // sessionStorage에 id를 user_id라는 key 값으로 저장
        sessionStorage.clear();
        sessionStorage.setItem("tokenType", response.tokenType);
        sessionStorage.setItem("accessToken", response.accessToken);
        sessionStorage.setItem("refreshToken", response.refreshToken);
        sessionStorage.setItem("username", responseData.nickname);
        sessionStorage.setItem("userId", responseData.userId);
        window.location.href = `/`;
      }
      // });
    } catch (error) {
      console.log(error);
    }

    setAuth({ email, password });
    setEmail("");
    setPassword("");
    setSuccess(true);
  };

  const responseGoogle = (response) => {
    console.log(response);
  };
  return (
    <div className="logInWholePage">
      <div className="logInWrap">
        <div className="joinAndLogo">
          <img src={Lander} className="landerLogo" />
          <p className="lander">LANDER</p>
        </div>
        <div className="logInContWrap">
          <form className="Inputs logIn" onSubmit={handleSubmit}>
            <div className="inputBox">
              <input
                type="text"
                placeholder=""
                id="email"
                ref={emailRef}
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
              <span className="floating-label">Email</span>
            </div>
            <div className="inputBox">
              <input
                type="password"
                placeholder=""
                id="password"
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
              <span className="floating-label">Password</span>
            </div>
            <a src="" className="findPW">
              Forgot Password?
            </a>
            <button className="nextAndJoinBtn" type="submit">
              Let's Start!
            </button>
          </form>

          <div className="or">
            <hr />
            <p className="or">OR</p>
            <hr />
          </div>
          <div>
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
          </div>
          <div>
            <p>Doesn't have an account, yet?</p>
            <a>Create Account</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
