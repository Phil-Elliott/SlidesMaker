import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId =
  "326274825453-dvdojgj0ec7j9l2r0isfj9h1fhdqqeoe.apps.googleusercontent.com";

const Logout = () => {
  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={() => console.log("Logout made successfully")}
      />
    </div>
  );
};

export default Logout;
