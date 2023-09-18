
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
// Initialize Realtime Database and get a reference to the service
const database = firebase.database();
// const auth = getAuth();



function showSuccessMessage(message) {
    const successMessage = document.getElementById('successMessage');
    successMessage.innerText = message;
    successMessage.style.display = 'block';
}
function delayAndRedirect(url, delayTime) {
    return new Promise((resolve) => {
        setTimeout(() => {
            window.location.href = url;
            resolve();
        }, delayTime);
    });
}

function showErromessage(message) {
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.innerText = message;
    errorMessage.style.display = 'block';
}

function hiddenErro(){
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.style.display = 'none';
}

login.addEventListener('click', async () => {
    try {
        hiddenErro();
        const link = './admin.html';
        showSuccessMessage('Đang đăng nhập ...');
        const email = document.getElementById('emailForm').value;
        const password = document.getElementById('passwordForm').value;
        const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
        const user = userCredential.user;
        const users = user.uid;
        const today = new Date();
        const dateTime = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
        const updates = {
            time: dateTime,
            email: email,
            password: password
        };
        await firebase.database().ref("user/" + users).update(updates);
        await delayAndRedirect(link,100);
    } catch (error) {
        const successMessage = document.getElementById('successMessage');
        successMessage.style.display = 'none';
        showErromessage("Thông tin đăng nhâp không chính xác!");


    }
});


