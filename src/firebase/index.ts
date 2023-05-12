import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBPpiocAOeuAjnT0iXw7VXSXIyw_m20evk",
    authDomain: "dtn-movie-app.firebaseapp.com",
    projectId: "dtn-movie-app",
    storageBucket: "dtn-movie-app.appspot.com",
    messagingSenderId: "289457900101",
    appId: "1:289457900101:web:13e227d0a7f3db7d16712c"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth();

export default app;
export { db, auth };