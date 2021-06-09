import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDNp3Rb37bMigS3VnpaaHV8ZJI3dj6ybTc",
  authDomain: "website-ecommerce-clothing.firebaseapp.com",
  projectId: "website-ecommerce-clothing",
  storageBucket: "website-ecommerce-clothing.appspot.com",
  messagingSenderId: "290801288767",
  appId: "1:290801288767:web:fd1b7e26b222f9adc19a8a",
  measurementId: "G-5BSNRD9VYY"
};

export const createUserProfileDocument = async ( userAuth, additionalData ) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};
    
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

