function createRoom() {
    const db = firebase.firestore();

    var roomName = document.getElementById("roomName").value;

    var tags = document.getElementById("tags").value;

    db.collection("rooms").doc(roomName).set({
        RoomName: roomName,
        Tags: tags,
        MaleParticipants: 0,
        FemaleParticipants: 0,
    })
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });

    document.getElementById("createRoomWrapper").style.display = "none";
    document.getElementById("waitRoomWrapper").style.display = "flex";

    waitRoom(roomName);
}

function waitRoom(roomName) {
    const db = firebase.firestore();

    var maleParticipants = 0;
    var femaleParticipants = 0;

    db.collection("rooms").doc(roomName).onSnapshot((doc) => {
        console.log("Current data: ", doc.data());

        var data = doc.data();

        console.log("Current data: ", doc.data().MaleParticipants);
        console.log("Current data: ", doc.data().FemaleParticipants);

        document.getElementById("males").innerHTML = "Male participants: " + data.MaleParticipants + "/10";
        document.getElementById("females").innerHTML = "Female participants: " + data.FemaleParticipants + "/10";
    });
}