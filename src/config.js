import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

export const appName = "learnredu"

export const firebaseConfig = {
  apiKey: "AIzaSyBHzLilkavMAhoDqnclEnv4huG9G2o7YrU",
  authDomain: `${appName}.firebaseapp.com`,
  databaseURL: `https://${appName}.firebaseio.com`,
  projectId: appName,
  storageBucket: `${appName}.appspot.com`,
  messagingSenderId: "523750069838"
}

firebase.initializeApp(firebaseConfig)