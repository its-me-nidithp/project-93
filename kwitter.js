function Login(){
    username = document.getElementById("username").value;
    localStorage.setItem("User Name", username);
    window.location = "kwitter_room.html";
    
}