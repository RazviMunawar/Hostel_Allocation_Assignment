// import firebase from "./firebase-config";
import firebase from 'firebase/app';
import firebaseAuth from 'firebase/auth/dist/index.esm';

export const gitHub = new firebase.auth.GithubAuthProvider();
export const googleProvider = new firebase.auth.GoogleAuthProvider();