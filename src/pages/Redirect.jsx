import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import api from "../api/axios";

const Redirect = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const AUTH_CODE = queryParams.get("code");
  const socialProvider = "GOOGLE";

  useEffect(() => {
    if (AUTH_CODE) {
      console.log("Authorization Code: ", AUTH_CODE);

      const sendAuthCodeToServer = async () => {
        try {
          const response = await api.post("/auth/login", {
            social_provider: socialProvider,
            authorization_code: AUTH_CODE,
          });

          console.log(response.data);
        } catch (error) {
          console.error("Fetching access token failed: ", error);
        }
      };

      sendAuthCodeToServer();
    }
  }, [AUTH_CODE]);

  return (
    <>
      <h1>Google Login Processing...</h1>
    </>
  );
};

export default Redirect;
