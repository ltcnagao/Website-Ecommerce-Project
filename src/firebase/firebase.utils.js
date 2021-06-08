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
    
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestone = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

