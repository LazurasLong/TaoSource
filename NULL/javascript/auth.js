// Odicforcesounds.com - World Cleaner Project 
// Firebase create and authentication using email service

var createAccount = function(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.error(errorCode, errorMessage)
    console.log(error)
  });
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log(user);
  } else {
    console.error("No user signed in");
  }
});

$(document).ready(function() {
  $("#register").click(function(e) {
    e.preventDefault();
    var email = $("#email").val();
    var password = $("#password").val();
    if (email && password) {
      createAccount(email, password);
    }
  });
});
firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.error({ ErrorCode: errorCode, ErrorMessage: errorMessage });
});