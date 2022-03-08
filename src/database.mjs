import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue, update, remove } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTm5F8321tlyGf9LyVe1vfbIN2Q2HJUZs",
  authDomain: "testdatabase-d2671.firebaseapp.com",
  projectId: "testdatabase-d2671",
  storageBucket: "testdatabase-d2671.appspot.com",
  messagingSenderId: "598742770770",
  appId: "1:598742770770:web:cf3baa07f0561a47c12b8b"
};

//Write new user data into the database
function writeUserData(db, userId, name, email) {
  const updates = {};
  updates['users/' + userId + '/username'] = name;
  updates['users/' + userId + '/email'] = email;
  return update(ref(db), updates);
}

//Add a new fitness record to the user with userId
function addFitRecord(db, userId, wname, date, exer, s, r, w) {
  const exerData = {
    sets: s,
    rounds: r,
    weight: w
  }
  const updates = {};
  updates['users/' + userId + '/history/' + date + '/' + wname + '/' + exer] = exerData;
  return update(ref(db), updates)
}

//Clear the specified workout 
function clearUserData(db, userId, date, wname) {
  const tempRef = ref(db, 'users/' + userId + '/history/' + date + '/' + wname);
  return remove(tempRef);
}

//module.exports = { firebaseConfig, writeUserData, addFitRecord, getUserData };
//exports.firebaseConfig = firebaseConfig;
//exports.writeUserData = writeUserData;
//exports.addFitRecord = addFitRecord;
//exports.getUserData = getUserData;

export { firebaseConfig, writeUserData, addFitRecord, clearUserData };