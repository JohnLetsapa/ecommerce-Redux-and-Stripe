import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAxLo_4zvErGZRz8HC9_GHpryJ10-g2DTI',
  authDomain: 'online-store-b2e44.firebaseapp.com',
  projectId: 'online-store-b2e44',
  storageBucket: 'online-store-b2e44.appspot.com',
  messagingSenderId: '1045847261947',
  appId: '1:1045847261947:web:dc5bac28791252a89ba65e',
  measurementId: 'G-ZK34VKXEYX',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account', // requires user to select an account...google docs
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// create db
export const db = getFirestore();
// this async function will save the user's credentials from GoogleAuth into the database
// this function is invoked in the SignIn Component when the user clicks the SignIn button
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid); // userAuth.uid comes from the GoogleAuth object that gets sent to the client upon successful login

  // console.log('userDocRef' ,userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  // console.log('userSnapShot>>>>:',userSnapShot);
  // console.log(userSnapShot.exists());
  
  if(!userSnapShot.exists()){
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      })
    } catch(error){
      console.log('error creating user', error.message )
      }
    }
    return console.log(userDocRef) 
  }

