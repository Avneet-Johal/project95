const firebaseConfig = {
      apiKey: "AIzaSyCxaVnCBm3qIInuMZccCw81PpyL4fVrSVA",
      authDomain: "c94project-19613.firebaseapp.com",
      databaseURL: "https://c94project-19613-default-rtdb.firebaseio.com",
      projectId: "c94project-19613",
      storageBucket: "c94project-19613.appspot.com",
      messagingSenderId: "840505342321",
      appId: "1:840505342321:web:e83e0a837473f932d29ed0"
    };
    
   
    firebase.initializeApp(firebaseConfig);
   user_name=localStorage.getItem("name");
   room_name=localStorage.getItem("room_name");
   function send()
   {
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
    });
    document.getElementById("msg").value="";
   }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      } });  }); }
getData();
function logout()
{
      localStorage.removeItem("name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}