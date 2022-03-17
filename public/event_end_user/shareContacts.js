window.onload = () => {
    const db = firebase.firestore();

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
           
            var uid = user.email;
            
            console.log(uid);

            db.collection("users").doc(uid).onSnapshot((doc) => {
                var username = doc.data().Name;
                const removed = username.replaceAll('"', '');
                document.getElementById("name").innerHTML = removed;
                console.log(username);
            });
          }
    });
}

function shareContacts(button) {
    button.setAttribute("class","inactiveshareContacts" );
}

function backToStart() {
    location.href = "../join_room";
}