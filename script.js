var user = document.getElementById("username") 
var psw = document.getElementById("password")
let bottone = document.getElementById("gianluca")
function Login(){
   alert(user);
   alert(psw);
   if (user == " " || psw == " "){
      alert("No")
   } else{
      window.location.href = "index.html"
   }
}