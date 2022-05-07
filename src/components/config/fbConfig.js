
import firebase from 'firebase/app';
import 'firebase/firestore';
// import { getFirestore } from 'firebase/firestore';
import 'firebase/auth';






const fbConfig = {
    apiKey: "AIzaSyBdSfEehNUOEG321Y4L-BFTodifzeeiuRk",
    authDomain: "dz-events-app.firebaseapp.com",
    projectId: "dz-events-app",
    storageBucket: "dz-events-app.appspot.com",
    messagingSenderId: "635567317754",
    appId: "1:635567317754:web:73c4dd69a9c98428ee9f43",
    measurementId: "G-NH21MELSQG"
  };

  firebase.initializeApp( fbConfig );
 
  
  firebase.firestore().settings({ timestampsInSnapshots: true });

 
  
  
  export default firebase 