import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
//impot { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
        /*apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
        authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
        storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_FIREBASE_APP_ID*/
        apiKey: "AIzaSyCYmMpFsUkjj3sZshgQ2HZTfF6hgbYPvVQ",
        authDomain: "recipe-20650.firebaseapp.com",
        projectId: "recipe-20650",
        storageBucket: "recipe-20650.appspot.com",
        messagingSenderId: "488468447667",
        appId: "1:488468447667:web:597717d226627eb0424bc6"
})

export const auth = firebaseConfig.auth()
export default firebaseConfig

export const db = getFirestore(firebaseConfig)
//export const provider = new GoogleAuthProvider