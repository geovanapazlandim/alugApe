import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'; 


const settings = {timestampsInSnapshots: true}; 
  

const firebaseConfig = {
    apiKey: "AIzaSyBw9WqkqnMCerCCumZ2K9xUkZIiNSs5a9M",
    authDomain: "bdcurlycosmeticos.firebaseapp.com",
    databaseURL: "https://bdcurlycosmeticos-default-rtdb.firebaseio.com",
    projectId: "bdcurlycosmeticos",
    storageBucket: "bdcurlycosmeticos.appspot.com",
    messagingSenderId: "161533554663",
    appId: "1:161533554663:web:6d6d9ba70e228619b4d742"
  };

  

firebase.initializeApp(firebaseConfig); 

  

firebase.firestore().settings(settings); 

  

export default firebase; 

 