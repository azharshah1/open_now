 let  validation = () =>{
let name= document.getElementById("name").value;
let mail= document.getElementById("E-mail").value;
let mob=document.getElementById("number").value;
let msg=document.getElementById("textarea").value;


if(name==""){
    document.getElementById("para").innerHTML="Please,leave us a message.";
    return false;
}
else{
    return true;
}
 };