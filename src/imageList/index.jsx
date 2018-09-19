import React, { Component } from "react";
import { firebase } from "../firebase";
import "./style.css";
class ImageList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        // {
        //   name: "test object 1",
        //   url:
        //     "https://www.robinwieruch.de/img/posts/react-fetching-data/banner_1024.jpg"
        // },
        // {
        //   name: "test object 2",
        //   url:
        //     "https://www.robinwieruch.de/img/posts/react-fetching-data/banner_1024.jpg"
        // },
        // {
        //   name: "test object 3",
        //   url:
        //     "https://www.robinwieruch.de/img/posts/react-fetching-data/banner_1024.jpg"
        // },
        // {
        //   name: "test object 4",
        //   url:
        //     "https://www.robinwieruch.de/img/posts/react-fetching-data/banner_1024.jpg"
        // },
        // {
        //   name: "test object 5",
        //   url:
        //     "https://www.robinwieruch.de/img/posts/react-fetching-data/banner_1024.jpg"
        // }
      ]
    };
  }
  componentDidMount = () => {
    // firebase.dat
    const targetNode = firebase.database().ref();
    targetNode.once("value").then(snpanshot => {
      this.setState({
        items: Object.values(snpanshot.val().images)
      });
      // console.log(snpanshot.val().images);
    });
  };

  render() {
    return (
      <div>
        <h1>Images in Storage</h1>
        <div className="itemList">
          <div>
            {/* <ul> */}
            {this.state.items.map(item => {
              return (
                <li className="list" key={item.imageName}>
                  <img src={item.url} width="200" height="200" />

                  <h3>{item.imageName}</h3>
                </li>
              );
              {
                /* </li>; */
              }
            })}
            {/* </ul> */}
          </div>
        </div>
      </div>
    );
  }
}

export default ImageList;
