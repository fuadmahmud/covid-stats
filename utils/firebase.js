import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAdkG_HXB7IsG0PFpv0DqSja-PKtmssyDc",
  authDomain: "covid19-statistic.firebaseapp.com",
  projectId: "covid19-statistic",
  storageBucket: "covid19-statistic.appspot.com",
  messagingSenderId: "103901004934",
  appId: "1:103901004934:web:2c62eeb7a5ae31e445bd07",
  measurementId: "G-61W68XVLNS"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const firestore = firebase.firestore();

export { firestore };
