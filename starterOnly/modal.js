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
const submit = document.querySelector(".btn-submit")

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

/*
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

*/

//fontion validate form 
function validateForm() {
  
  //call variable choice
  var allchoice = document.querySelectorAll('input[required]');
  var localisation = document.querySelectorAll('input[name="location"]');
  var error = document.querySelectorAll('span[id="error"]');
  var localisation_check = "";
  var checkbox1 = document.querySelector('#checkbox1');
  

  error.innerHTML = "";
  //boucle validate
  allchoice.forEach((choice) => {
    if (!choice.checkValidity()) {

    //allchoice.classList.add('invalid');
    //error[0].innerHTML = "<span style='color: red;'>"+ "Veuillez entrer 2 caractères ou plus pour le champ du prénom.</span>";
    return false;
    }
    else {
    return true;
    }
  });


//localisation checked
for (var i = 0; i < localisation.length; i++) {
  if (localisation[i].checked == true) {
  var localisation_check = localisation[i];
  break;
  }
  else {
    console.log("error");
  }
};

if (localisation_check == "") {
  error[5].innerHTML = "<span style='color: red;'>"+ "Veuillez choisir une localisation</span>";
  return false;
}
else {
  error[5].innerHTML = "";
  return true;
}


// condition checked
if (!checkbox1.checkValidity())  {
  error[6].innerHTML = "<span style='color: red;'>"+ "Veuillez accepter les conditions d'utilisations </span>";
  return false;
}
else {
  error[6].innerHTML = "";
  return true;
}
return true
}




  /*
  //call variable
  var first = document.forms["reserve"]["first"];
  var last = document.forms["reserve"]["last"];
  var email = document.forms["reserve"]["email"];
  var birthdate = document.forms["reserve"]["birthdate"];
  var quantity = document.forms["reserve"]["quantity"];
  var localisation = document.querySelectorAll('input[name="location"]');
  var error = document.querySelectorAll('span[id="error"]');
  var localisation_check = "";
  var checkbox1 = document.forms["reserve"]["checkbox1"]
  
  
  var error = document.querySelectorAll('span[id="error"]');
  error.innerHTML = "";

  // first length 
  if (first.value.length < 2) {
    first.classList.add('invalid');
    error[0].innerHTML = "<span style='color: red;'>"+ "Veuillez entrer 2 caractères ou plus pour le champ du prénom.</span>";
    return false;
  }
  else {
    error[0].innerHTML = "";
  }
  // last length
  if (last.value.length < 2 ) {
    last.classList.add('invalid');
    error[1].innerHTML = "<span style='color: red;'>"+ "Veuillez entrer 2 caractères ou plus pour le champ du nom.</span>";
    return false;
  } else {
    error[1].innerHTML = "";
  }
  // email valid
  if (checkEmail(email.value) == false ) {
    email.classList.add('invalid');
    error[2].innerHTML = "<span style='color: red;'>"+ "Veuillez entrer une adresse mail valide.</span>";
    return false;
  } else {
    error[2].innerHTML = "";
  }
  // date valid
  if (verifdate(birthdate.value.split('-').reverse().join('-')) == false) {
    birthdate.classList.add('invalid');
    error[3].innerHTML = "<span style='color: red;'>"+ "Veuillez entrer une date valide.</span>";
    return false;
  } else {
    error[3].innerHTML = "";
  }
  // quantity is number
  if (isNaN(quantity.value) == true) {
    quantity.classList.add('invalid');
    error[4].innerHTML = "<span style='color: red;'>"+ "Veuillez entrer un nombre entier</span>";
    return false;
  } else {
    error[4].innerHTML = "";
  }

  //localisation checked
  for (var i = 0; i < localisation.length; i++) {
    if (localisation[i].checked == true) {
    var localisation_check = localisation[i];
    break;
      
    }
    else {
      console.log("error")
    }
  }
  
  if (localisation_check == ' ') {
    error[5].innerHTML = "<span style='color: red;'>"+ "Veuillez choisir une localisation</span>";
    return false;
  }
  else {
    error[5].innerHTML = ""
  }
  
  // condition checked
  if (checkbox1.check == )  {
  error[6].innerHTML = "<span style='color: red;'>"+ "Veuillez accepter les conditions d'utilisations </span>";
  return false;
  }
  else {
    error[6].innerHTML = "";
    return true;
  }
 
  return true;
*/
//}