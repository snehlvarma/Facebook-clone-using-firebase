// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCWJRpH_5sRBkUtxSEAjby0DOHQi7OAMIg",
    authDomain: "facebook-clone-561d0.firebaseapp.com",
    databaseURL: "https://facebook-clone-561d0.firebaseio.com",
    projectId: "facebook-clone-561d0",
    storageBucket: "facebook-clone-561d0.appspot.com",
    messagingSenderId: "1011903011450",
    appId: "1:1011903011450:web:0a010ea934ec38837b39c3",
    measurementId: "G-0MHFE6072L"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;