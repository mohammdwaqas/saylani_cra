import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import image from "./images/scan.jpg";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <h2>Welcome to our Pakistan.</h2>
          <img
            src={image}
            width="200"
            height="200"
            onClick={() => {
              Notification.requestPermission(status => {
                console.log("Notification permission status:", status);
              });
            }}
          />
        </p>
        <button
          onClick={() => {
            let options = {
              body: "Welcome to Our App. "
            };
            if (Notification.permission == "granted") {
              navigator.serviceWorker.getRegistration().then(reg => {
                // TODO 2.4 - Add 'options' object to configure the notification

                reg.showNotification("Hello world////", options);
              });
            }
          }}
        >
          Show Notification
        </button>
      </div>
    );
  }
}

export default App;
