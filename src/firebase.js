import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyC59SOPTQv_SIhUhxTtA0GtnQar8ovX6uA",
    authDomain: "whatsapp-clone-5c2ab.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-5c2ab.firebaseio.com",
    projectId: "whatsapp-clone-5c2ab",
    storageBucket: "whatsapp-clone-5c2ab.appspot.com",
    messagingSenderId: "561652452405",
    appId: "1:561652452405:web:7f63bced87a10946f5f57c",
    measurementId: "G-1LWZMHBT6C"
  };
const fierbaseApp=firebase.initializeApp(firebaseConfig);
const db=fierbaseApp.firestore();
const auth=firebase.auth();
const provider= new firebase.auth.GoogleAuthProvider();
export {auth,provider};
export default db;