
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyBVWwk5WYkOOFjYReBQNiqVmJDOzLlJX34",
  authDomain: "blogthanhduy.firebaseapp.com",
  databaseURL: "https://blogthanhduy-default-rtdb.firebaseio.com",
  projectId: "blogthanhduy",
  storageBucket: "blogthanhduy.appspot.com",
  messagingSenderId: "346123189563",
  appId: "1:346123189563:web:bd8a38044b8295e8a0cb1e",
  measurementId: "G-1NFNF0B3E9"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Storage and get a reference to the service
const storage = firebase.storage();

// Initialize Realtime Database and get a reference to the service
const database = firebase.database();



// // send data to firebase
// var cong = document.getElementById("cong1");
// var ngu;
// database.ref("cong").on("value", function (snapshot) {
//   ngu = snapshot.val();
// })
// cong.onclick = function () {
//   ngu += 1;
//   firebase.database().ref().update({ "cong": ngu });
//   console.log(ngu);
// }


// // get data form firebase
// var getdata = document.getElementById("getdata");
// firebase.database().ref("cong").on("value", function (snapshot) {
//   var socong = snapshot.val();
//   getdata.innerHTML = socong;
// })



