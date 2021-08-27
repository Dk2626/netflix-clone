import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDacx0YRe34Zfhn18DTw9Guixdos1u5yTo",
  authDomain: "netflix-clone-ea593.firebaseapp.com",
  projectId: "netflix-clone-ea593",
  storageBucket: "netflix-clone-ea593.appspot.com",
  messagingSenderId: "563443991267",
  appId: "1:563443991267:web:2bf95adfccdea98c54bbd6",
};

let fire;

if (!firebase.apps.length) {
  fire = firebase.initializeApp(firebaseConfig);
} else {
  fire = firebase.app();
}

export let firedb = fire.database();
export let auth = fire.auth();
