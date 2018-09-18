import React, { Component } from "react";
import firebase from "firebase";
import "firebase/storage";

var config = {
  apiKey: "AIzaSyClIzTDTpEyGWlvDd3bzllIKwO7bV79Svg",
  authDomain: "saylani-f3a4c.firebaseapp.com",
  databaseURL: "https://saylani-f3a4c.firebaseio.com",
  projectId: "saylani-f3a4c",
  storageBucket: "saylani-f3a4c.appspot.com",
  messagingSenderId: "839940906759"
};
firebase.initializeApp(config);
const storage = firebase.storage();
export { storage, firebase };
