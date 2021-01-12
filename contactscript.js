function validate(){
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error = document.getElementById("error");
  
  error.style.padding = "8px";
  
  var text;
  if(name.length < 5){
    text = "Please Enter Your Full Name";
    error.innerHTML = text;
    return false;
  }
  if(isNaN(phone) || phone.length < 10){
    text = "Please Enter A Valid Phone Number";
    error.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter A Valid Email Adress";
    error.innerHTML = text;
    return false;
  }
  if(message.length <= 10){
    text = "Please Enter More Than 10 Characters";
    error.innerHTML = text;
    return false;
  }
  alert("Message Sent!");
  return true;
}