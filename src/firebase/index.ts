import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyDUPi-KMx7SO8neO-yfQPX0FPxKYRgQDR0',
	authDomain: 'movie-app-22be3.firebaseapp.com',
	projectId: 'movie-app-22be3',
	storageBucket: 'movie-app-22be3.appspot.com',
	messagingSenderId: '827560384062',
	appId: '1:827560384062:web:d3ec30b4aed1bbce21e36f',
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const auth = getAuth();

export default app;
export { db, auth };
