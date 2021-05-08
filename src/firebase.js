import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCzpApl8jjQn1bQ8ZafOYvTphL6u92pF7E",
    authDomain: "netflix-clone-e8bd2.firebaseapp.com",
    projectId: "netflix-clone-e8bd2",
    storageBucket: "netflix-clone-e8bd2.appspot.com",
    messagingSenderId: "1058742474299",
    appId: "1:1058742474299:web:e304f98639e98181022e1e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;