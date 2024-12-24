import loginBtn from "../assets/google-login.svg";

import "./Home.css";

const Home = () => {
  const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const REDIRECT_URI = import.meta.env.VITE_GOOGLE_REDIRECT_URI;

  const oAuthBaseURL = "https://accounts.google.com/o/oauth2/v2/auth";
  const requestURL = `${oAuthBaseURL}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=openid%20profile%20email`;

  const handleLoginButtonClick = () => {
    window.location.href = requestURL;
  };

  return (
    <div className="container">
      <img
        onClick={handleLoginButtonClick}
        src={loginBtn}
        alt="Google-Login-Button"
        className="login-btn"
      />
    </div>
  );
};

export default Home;
