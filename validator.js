function validate() {
  var result = "";
  result += validateName();
  result += validateEmail();
  result += validatePwd();

  if (result == "") {
    alert("Signup completed.");
    return true;
  } else {
    //alert("Please fix the errors);
    return false;
  }
}

function validateName() {
  var username = document.signup.username.value;
  // var username = document.getElementsByName('username')[0].value;
  if (username.length <= 3) {
    //return "Username should be between 3 to 25 characters long.\n"
    document.getElementById("nameerror").style.display = "inline";
  } else {
    document.getElementById("nameerror").style.display = "none";
    return "";
  }
}

function validateEmail() {
  var email = document.signup.email.value;
  if (email.indexOf("@") == -1) {
    // return "Email should be a valid address.\n";
    document.getElementById("emailerror").style.display = "inline";
  } else {
    document.getElementById("emailerror").style.display = "none";
    return "";
  }
}

function validatePwd() {
  var check = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8}$/;
  var pwd1 = document.signup.pwd1.value;
  var pwd2 = document.signup.pwd2.value;

  if (!pwd1.match(check)) {
    // return "Password must contain at least 8 characters with at least 1 Number, lowercase, uppercase and special letters each.\n";
    document.getElementById("pwderror").style.display = "inline";
  } else {
    document.getElementById("pwderror").style.display = "none";
    //return "";
  }

  if (pwd1 != pwd2) {
    // return "Password do not match.!\n";
    document.getElementById("pwdmatcherror").style.display = "inline";
  } else {
    document.getElementById("pwdmatcherror").style.display = "none";
    return "";
  }
}