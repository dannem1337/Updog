/**@type {HTMLInputElement} */
let usr;
/**@type {HTMLInputElement} */
let psw;
/**@type {HTMLSpanElement} */
let forgotPassword;
/**@type {HTMLButtonElement} */
let loginButton;
/**@type {HTMLInputElement} */
let email;

var forgotPasswordButton = document.getElementById("forgotpsw"),
  forgotPasswordWrapper = document.getElementById("forgotPasswordWrapper"),
  loginWrapper = document.getElementById("loginWrapper");


window.onload = (e => {

  usr = document.getElementById("usrname");
  psw = document.getElementById("password");
  loginButton = document.getElementById("loginBtn");

  loginButton.onclick = (e => {

    let email = usr.value;
    let password = psw.value;


    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(async () => {
      return firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
        firebase.auth().onAuthStateChanged(user => {
          if (user) {
            location.href = "../index.html";
          }
        });
      }).catch(error => {
        alert("No such user was found, or the password entered was incorrect");
      });
    }).catch(function (error) {
      
    })
  });
});

forgotPasswordButton.onclick = () => {
  forgotPasswordWrapper.style.right = "50%";
  loginWrapper.style.left = "-500px";
};

document.getElementById("forgotBtn").onclick = () => {
  email = document.getElementById("email").value;
  firebase.auth().sendPasswordResetEmail(email).then(function () {
    document.getElementById("forgotSuccess").innerHTML = "An email to reset your password has been sent to: <b>" + email + "</b>";
  }).catch(function (error) {
    alert("No account was found with the email address: <b>" + email);
  });
};

function setProperty(propertyName, value) {
  document.documentElement.style.setProperty(propertyName, value);
}

function resize() {
  setProperty("--fullHeight", window.innerHeight.toString() + "px");
}

window.addEventListener("resize", resize);