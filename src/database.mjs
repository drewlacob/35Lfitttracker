import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue, update } from "firebase/database";

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
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
  });
}

//Add a new fitness record to the user with userId
function addFitRecord(db, userId, exer, num, date) {
  const updates = {};
  updates['users/' + userId + '/history/' + date + '/' + exer] = num;
  return update(ref(db), updates);
}

//Output the user's data into the console
async function getUserData(db, userId) {
  const userDataRef = ref(db, 'users/' + userId);
  onValue(userDataRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });
}

//module.exports = { firebaseConfig, writeUserData, addFitRecord, getUserData };
//exports.firebaseConfig = firebaseConfig;
//exports.writeUserData = writeUserData;
//exports.addFitRecord = addFitRecord;
//exports.getUserData = getUserData;

export { firebaseConfig, writeUserData, addFitRecord, getUserData };