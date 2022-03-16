window.onload = () => {

    const db = firebase.firestore();

    db.collection("rooms").get().then((querySnapshot) => {
        var i = 0;
        querySnapshot.forEach((doc) => {
            var participants = doc.data().MaleParticipants + doc.data().FemaleParticipants;
            console.log(i);
            var htmlCode =
            `<div class="room" id="room${i}">
            <p id="eventName">${doc.data().RoomName}</p>
            <p id="noPart">${participants + "/20"}</p>
            <button onclick="joinRoom(this)" name="room${i}" class="joinBtn">Join</button>
            </div>`;
            i++;
            console.log(i);

            document.getElementById("roomWrapper").innerHTML += htmlCode;


        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());

    });

})
        .catch((error) => {
        console.log("Error getting documents: ", error);
    });
}

function joinRoom(roomid) {
    const db = firebase.firestore();

    document.getElementById("roomWrapper").style.display = "none";
    document.getElementById("waitRoomWrapper").style.display = "flex";
    document.getElementById("logo").style.display = "block";

    console.log(roomid.attributes["name"].value);

    var parent = document.getElementById(roomid.attributes["name"].value);
    console.log(parent);
    var room = parent.querySelector("#eventName").innerHTML;
    console.log(room);

    db.collection("rooms").doc(room)
    .onSnapshot((doc) => {
        var participants = doc.data().MaleParticipants + doc.data().FemaleParticipants;

        document.getElementById("currently").innerHTML = "Currently in room: " + participants + "/20";

        console.log(participants);
    });

    var timeleft = 10;
    var downloadTimer = setInterval(function(){
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Room starting";
    } else {
        document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
    }
    timeleft -= 1;
    }, 1000);
    
}