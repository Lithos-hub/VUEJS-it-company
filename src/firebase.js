import firebase from "firebase";


var firebaseConfig = {
  apiKey: "AIzaSyDSlxb5zt4u5zZeTgwxNWMuaHm0i6fNqOU",
  authDomain: "it-company-260f2.firebaseapp.com",
  projectId: "it-company-260f2",
  storageBucket: "it-company-260f2.appspot.com",
  messagingSenderId: "542265384484",
  appId: "1:542265384484:web:58c12d0c5c77e31a3302b1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  ////////////////////////////////////////////////////
  
  const storage = firebaseApp.storage();
  

  //////////////////////////////////
  
  export default {storage, firebase};