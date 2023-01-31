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
  document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";
{
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
       purpose:"adding user name"
  })
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.html";
     }
 function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
        Room_names = childKey;
    console.log("room name - " + Room_names);
    row="<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)' >#"+Room_names+"</div><hr>";
 document.getElementById("output").innerHTML+=row;
      
       });});}
 getData();
 function redirecttoroomname(name)
 {
       console.log(name);
       localStorage.setItem("room_name",name);
       window.location="kwitter_page.html";
 }
 function logout()
 {
       localStorage.removeItem("name");
       localStorage.removeItem("room_name");
       window.location="index.html";
 }