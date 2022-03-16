function changeGender(button) {
    otherButton = document.getElementById("activeBtn");
    if(button.id == "inactiveBtn"){
        button.setAttribute("id", "activeBtn");
        otherButton.setAttribute("id", "inactiveBtn");
    }
}

function handleSignUp() {
    console.log(firebase.auth().currentUser);

    const db = firebase.firestore();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var name = document.getElementById("displayName").value;
    var gender = document.getElementById("activeBtn").value;
    var allInterests = document.getElementsByClassName("interest");
    var chosenInterests = [];

    // Create user with email and pass.
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });

    console.log(firebase.auth().currentUser);

    for (let i = 0; i < allInterests.length; i++) {
        if(allInterests[i].checked) {
            chosenInterests.push(allInterests[i].getAttribute("name"));
        }
    }

    db.collection("users").doc(email).set({
        Name: name,
        Gender: gender,
        Interests: chosenInterests,
    })
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });

    location.href = "../join_room";
}