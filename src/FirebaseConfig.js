import * as firebase from "firebase/app";
import "firebase/database";
const firebaseConfig = {
apiKey: "AIzaSyA5H6fkcU0H1qMybMFW2hf8R1taJHT2_Qk",
authDomain: "taller-web-121a4.firebaseapp.com",
databaseURL: "https://taller-web-121a4.firebaseio.com",
projectId: "taller-web-121a4",
storageBucket: "taller-web-121a4.appspot.com",
messagingSenderId: "1019213158133",
appId: "1:1019213158133:web:f08806ff2a1527ea4b17bc"
};
if (!firebase.apps.length) {
firebase.initializeApp(firebaseConfig);
}

const db = firebase.database();

export {db}