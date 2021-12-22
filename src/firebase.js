// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyDhaqS7msKtb4LBxm76wLplGDwZ5G8kMic",
  authDomain: "clone-ab1cd.firebaseapp.com",
  projectId: "clone-ab1cd",
  storageBucket: "clone-ab1cd.appspot.com",
  messagingSenderId: "325933012089",
  appId: "1:325933012089:web:44770c6cb69e4d11c170a8",
  measurementId: "G-CXTT83RPRR"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };