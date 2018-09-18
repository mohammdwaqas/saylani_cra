import React, { Component } from "react";
import { storage, firebase } from "./firebase";
import "./App.css";
import image from "./images/scan.jpg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: null
    };
  }

  fileSelectHandler = event => {
    // console.log(event.target.files[0]);
    const image = event.target.files[0];
    this.setState({
      image: image
    });
  };

  uploadHandler = () => {
    // console.log(this.state.image.name);
    const { image, url } = this.state;
    const task = storage.ref("images/" + image.name).put(image);

    task.on(
      "state_changed",
      () => {
        console.log("progress");
      },
      error => {
        console.log(error.message);
      },
      () => {
        storage
          .ref("images/" + image.name)
          .getDownloadURL()
          .then(url => {
            this.setState({ url }, () => {
              let dbData = { imageName: image.name, url: url };
              firebase
                .database()
                .ref("images")
                .child("id-25")
                .push(dbData);
            });
          });
      }
    );
  };
  render() {
    return (
      <div className="App">
        <input type="file" onChange={event => this.fileSelectHandler(event)} />
        <img src={this.state.url} width="200" height="200" />
        <button onClick={this.uploadHandler}>Upload File</button>
      </div>
    );
  }
}

export default App;
