function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalclose = document.querySelector(".close");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalclose.addEventListener("click", exitModal);
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//exit modal event 
function exitModal() {
  modalbg.style.display = "none";
}

//function check mail
function checkEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

//function verif date 
function verifdate(date){
const regexExp = /(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})/gi;
return regexExp.test(date);
}
//fontion validate form 
function validateForm() {
  
  //call variable
  var first = document.forms["reserve"]["first"].value;
  var last = document.forms["reserve"]["last"].value;
  var email = document.forms["reserve"]["email"].value;
  var birthdate = (document.forms["reserve"]["birthdate"].value).split('-').reverse().join('-');
  var quantity = document.forms["reserve"]["quantity"].value;
  var localisation = document.querySelectorAll('input[name="location"]');
  

  if (first.length < 2) {
    return false;
  }

  if (last.length < 2 ) {
    return false;
  }

  if (checkEmail(email) == false ) {
    return false;
  }

  if (verifdate(birthdate) == false) {
    return false;
  }

  if (isNaN(quantity) == true) {
    return false;
  }


  for (var i = 0; i < localisation.length; i++) {
    if (localisation[i].checked == true) {
      console.log(localisation[i], "is checked");
      break;
    }
    
  }
  
  


 
  return true;

}