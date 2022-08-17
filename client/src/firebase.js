// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCaBsGuqmXxot6iXZHcW4JaEMc_4GMnTOQ',
  authDomain: 'video-sharing-app-c7f72.firebaseapp.com',
  projectId: 'video-sharing-app-c7f72',
  storageBucket: 'video-sharing-app-c7f72.appspot.com',
  messagingSenderId: '748078822164',
  appId: '1:748078822164:web:f4464a456df70792270801',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
