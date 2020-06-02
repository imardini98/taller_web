import * as firebase from "firebase/app";
import "firebase/database";
const firebaseConfig = { //Coloca la configuración de tu proyecto Firebase
apiKey: "xxx",
authDomain: "PROJECTID.firebaseapp.com",
databaseURL: "https://PROJECTID.firebaseio.com",
projectId: "PROJECTID",
storageBucket: "PROJECTID.appspot.com",
messagingSenderId: "XXX",
appId: "XXX"
};
if (!firebase.apps.length) {
firebase.initializeApp(firebaseConfig);
}

const db = firebase.database();

export {db}