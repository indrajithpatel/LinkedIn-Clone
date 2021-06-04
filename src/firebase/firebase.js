import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCSJ1Px4JMiuhWPoGFLLXkKY5OLLHk-AGw",
    authDomain: "linkedin-clone-788ea.firebaseapp.com",
    projectId: "linkedin-clone-788ea",
    storageBucket: "linkedin-clone-788ea.appspot.com",
    messagingSenderId: "426883206489",
    appId: "1:426883206489:web:cabb32104d44eb0e921048"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  console.log(firebaseApp)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth}