import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDd9S8ysPRNrmUlSFaLQI9eEXphrGZvRAM",
    authDomain: "slack-clone-5710b.firebaseapp.com",
    projectId: "slack-clone-5710b",
    storageBucket: "slack-clone-5710b.appspot.com",
    messagingSenderId: "320102293846",
    appId: "1:320102293846:web:2094fe65b98b99444bb6f7"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };