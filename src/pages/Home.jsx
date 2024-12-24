import loginBtn from "../assets/google-login.svg";

import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <img src={loginBtn} alt="Google-Login-Button" className="login-btn" />
    </div>
  );
};

export default Home;
