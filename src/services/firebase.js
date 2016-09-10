import firebase from 'firebase';

const Firebase = firebase;

Firebase.initializeApp({
  apiKey: "AIzaSyDgOMPLdcR_OplHuq_2CDhJtkjNKZV7KRg",
  authDomain: "xpenses-draft.firebaseapp.com",
  databaseURL: "https://xpenses-draft.firebaseio.com",
  storageBucket: "",
});

export default Firebase;
export const Database = Firebase.database();
