function nextRound() {
    location.href = "../event_end_user";

    const db = firebase.firestore();
        var comments = document.getElementById("comment").value;

        db.collection("rooms").doc("Sysdes Enjoyers").set({
            Comments: comments,
    })
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
}