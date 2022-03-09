import { collection, addDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


function changeGender(button) {
    otherButton = document.getElementById("activeBtn");
    if(button.id == "inactiveBtn"){
        button.setAttribute("id", "activeBtn");
        otherButton.setAttribute("id", "inactiveBtn");
    }
}

function createAccount() {
    const db = getDatabase();
    const auth = getAuth();
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {

            var name = document.getElementById("displayName");
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
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    
}