import { gapi } from "gapi-script";
import { useEffect } from "react";
import "./App.css";
import Login from "./components/Login";
import Logout from "./components/Logout";

const clientId =
  "326274825453-dvdojgj0ec7j9l2r0isfj9h1fhdqqeoe.apps.googleusercontent.com";

const APIKey = "AIzaSyBa8FR5-32djokRQk9dDckXjMYP7J5ywjY";

const scopes = "https://www.googleapis.com/auth/presentations";

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        apiKey: APIKey,
        clientId: clientId,
        scope: scopes,
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  const createPowerpoint = () => {
    let accessToken = gapi.auth.getToken().access_token;

    fetch("https://slides.googleapis.com/v1/presentations", {
      method: "POST",
      headers: new Headers({
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({
        title: "My Presentation",
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
      });
  };

  // function createPowerpoint() {
  //   try {
  //     gapi.client.slides.presentations
  //       .create({
  //         title: "title",
  //       })
  //       .then((response: any) => {
  //         console.log(
  //           `Created presentation with ID: ${response.result.presentationId}`
  //         );
  //       });
  //   } catch (err) {
  //     console.log(err);
  //     return;
  //   }
  // }

  return (
    <div className="App">
      <Login />
      <Logout />
      <button
        onClick={() => {
          createPowerpoint();
        }}
      >
        Create a powerpoint
      </button>
    </div>
  );
}

export default App;

/*



*/
