import firebase from 'firebase'
export const appName = "advreact-42b8d"
export const firebaseConfig = {
  apiKey: "AIzaSyA3TDnXZQqgy_CfnLwKrI7Sln7Cg10MEBY",
  authDomain: `${appName}.firebaseapp.com`,
  databaseURL: `https://${appName}.firebaseio.com`,
  projectId: `${appName}`,
  storageBucket: `${appName}.appspot.com`,
  messagingSenderId: "80498510735"
}

firebase.initializeApp(firebaseConfig)