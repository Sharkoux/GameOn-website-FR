function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//call variable
var valid = " ";


// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalclose = document.querySelector(".close");
const submit = document.querySelector('form');
const allinput = document.querySelectorAll('input');
var localisation = document.querySelectorAll('input[name="location"]');
var checkbox1 = document.getElementById("checkbox1");
var text_control = document.querySelectorAll('.text-control');

var error = document.querySelectorAll('span[class="error"]');
var confirmation = document.getElementsByClassName("formData");
var btn_close = document.getElementsByClassName("btn-submit");
var text_label = document.getElementsByClassName("text-label");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
modalclose.addEventListener("click", exitModal);
submit.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
  submitform();
});


// boucle activate validate auto
allinput.forEach((input) => input.addEventListener('change', validateForm));




// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  
}

//exit modal event 
function exitModal() {
  modalbg.style.display = "none";
  location.reload();
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


//function validate form 

function validateForm() {
  var localisation_check = "";
  valid = true;
  

  //boucle for reset msg error
  for (var o = 0; o < error.length; o++) {
    error[o].innerHTML= "";
  }
  
  //boucle for reset border error
  for (var q = 0; q < text_control.length; q++) {
    text_control[q].classList.remove('invalid');
  }

  // first length 
  if (first.value.length < 2) {
    first.classList.add('invalid');
    error[0].innerHTML = "<span style='color: red;'>"+ "Veuillez entrer 2 caractères ou plus pour le champ du prénom.</span>";
    valid = false;
  }
  

  // last length
  if (last.value.length < 2 ) {
    last.classList.add('invalid');
    error[1].innerHTML = "<span style='color: red;'>"+ "Veuillez entrer 2 caractères ou plus pour le champ du nom.</span>";
    valid = false;
  }


  // email valid
  if (checkEmail(email.value) == false ) {
    email.classList.add('invalid');
    error[2].innerHTML = "<span style='color: red;'>"+ "Veuillez entrer une adresse mail valide.</span>";
    valid =  false;
  }


  // date valid
  if (verifdate(birthdate.value.split('-').reverse().join('-')) == false || birthdate.value.split("-")[0] < 1920  || birthdate.value.split("-")[0] > 2004) {
    birthdate.classList.add('invalid');
    error[3].innerHTML = "<span style='color: red;'>"+ "Veuillez entrer une date valide.</span>";
    valid = false;
  }


  // quantity is number
  if (quantity.value == '' || isNaN(quantity.value) == true || quantity.value > 99 || quantity.value < 0) {
    quantity.classList.add('invalid');
    error[4].innerHTML = "<span style='color: red;'>"+ "Veuillez entrer un nombre entier</span>";
    valid = false;
  }


  //localisation checked
  for (var i = 0; i < localisation.length; i++) {
    if (localisation[i].checked == true) {
    var localisation_check = localisation[i];
    break;
      
    }
  }
  

  if (localisation_check == '') {
    error[5].innerHTML = "<span style='color: red;'>"+ "Veuillez choisir une localisation</span>";
    valid = false;
  }
  
  
  // condition checked
  if (checkbox1.checked == false )  {
  error[6].innerHTML = "<span style='color: red;'>"+ "Veuillez accepter les conditions d'utilisations </span>";
  valid = false;
  }



  // if form no valid 
 if (valid == false) {
  return false;
 } 
 
}


//function submit, add thanks 

function submitform() {
  //if form valid 
  if (valid == true) {
  
  
    //boucle reset modal information
    for (var p = 0; p < confirmation.length; p++) {
        confirmation[p].style.display = "none";
     
    }
      // modification button
      btn_close[0].value = "Fermer";
      btn_close[0].addEventListener("click", exitModal);
  
      //modification text_label 
      text_label[0].innerHTML = "Merci pour votre inscription";
      text_label[0].style.fontSize = "x-large";
      text_label[0].style.margin = "250px 50px";
      text_label[0].style.textAlign = "center";

   }
   

  }