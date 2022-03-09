/**@type {HTMLInputElement} */
let createAccountButton;
/**@type {HTMLInputElement} */
let password;
/**@type {HTMLInputElement} */
let email;

function changeGender(button) {
    otherButton = document.getElementById("activeBtn");
    if(button.id == "inactiveBtn"){
        button.setAttribute("id", "activeBtn");
        otherButton.setAttribute("id", "inactiveBtn");
    }
}

let auth = getAuth();
var user = auth.currentUser;
console.log("dealing with " + user); 

window.onload = (e => {

    var createAccountButton = document.getElementById("createBtn");

    console.log("Hellu");

    createAccountButton.onclick = (e => {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        const auth = getAuth();
        var user = auth.currentUser;
        console.log("dealing with " + user);    
    
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    
        console.log("dealing with " + user); 
    });
})

function createAccount() {
    const db = getDatabase();
    
}

/* var name = document.getElementById("displayName");
            var gender = docment.getElementById("inactiveBtn");
            var allInterests = document.getElementsByClassName("interest");
            var chosenInterests = [];
            for (let i = 0; i < allInterests.length; i++) {
                if(allInterests[i].checked) {
                    chosenInterests.push(allInterests[i].getAttribute("name"));
                }
            }
            await addDoc(collection(db, 'users/' + email.value)), {
                Name: name.value,
                Gender: gender.value,
                Interests: interests
            } */