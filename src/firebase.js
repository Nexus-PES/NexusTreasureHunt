import firebase from "firebase/compat/app"
import "firebase/compat/auth"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyASf8DZ11rlPAJDifSHmRq4s7qvi5KUTO0",
    authDomain: "nexus-56801.firebaseapp.com",
    projectId: "nexus-56801",
    storageBucket: "nexus-56801.appspot.com",
    messagingSenderId: "86530411939",
    appId: "1:86530411939:web:386997571ae7c742f3de16",
    measurementId: "G-9X17TS2752"
  };
const app=firebase.initializeApp(firebaseConfig);

export const auth=app.auth()
export default app


