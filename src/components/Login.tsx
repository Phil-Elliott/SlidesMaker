import React from "react";
import { GoogleLogin } from "react-google-login";

const clientId =
  "326274825453-dvdojgj0ec7j9l2r0isfj9h1fhdqqeoe.apps.googleusercontent.com";

const Login = () => {
  const onSuccess = (res: any) => {
    console.log("[Login Success] currentUser:", res.profileObj);
  };

  const onFailure = (res: any) => {
    console.log("[Login failed] res:", res);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}
      />
    </div>
  );
};

export default Login;
