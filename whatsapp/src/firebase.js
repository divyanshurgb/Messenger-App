import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyD_mN-sShkxBjfL9IwE9fjzQY1rfXGvuHM",
    authDomain: "whatsapp-clone-28769.firebaseapp.com",
    projectId: "whatsapp-clone-28769",
    storageBucket: "whatsapp-clone-28769.appspot.com",
    messagingSenderId: "518089759078",
    appId: "1:518089759078:web:912c3d0838879e652050a7",
    measurementId: "G-RM5EP5ZPN3"
    };

    const firebaseApp = firebase.initializeApp
    (firebaseConfig);

    const db = firebaseApp.firestore();
    const auth = firebase.auth();
    const provider = new firebase.auth.
    GoogleAuthProvider();

    export { auth, provider };
    export default db;