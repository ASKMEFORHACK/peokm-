// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyClsYRwqL-_J1HMYqtVjCpMwKHeZu4IZZs",
    authDomain: "c101-a5d34.firebaseapp.com",
    projectId: "c101-a5d34",
    storageBucket: "c101-a5d34.appspot.com",
    messagingSenderId: "508355767160",
    appId: "1:508355767160:web:d79888f038fc70d2b8f68d"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
    */
   localStorage.setItem("user_name", user_name);
   window.location = "chat_room.html";
}



