window.onload = () => {

    const db = firebase.firestore();

    db.collection("rooms").doc("Sysdes Enjoyers").onSnapshot((doc) => {
    var i = 0;
        var ratings = doc.data().Ratings;
        var sum = 0;
        var comments = doc.data().Comments;
        for (let j = 0; j < ratings.length; j++) {
            sum += ratings[j];
        }
        var ratingAverage = sum/ratings.length;
        document.getElementById("ratings").innerHTML = "Average rating: " + ratingAverage + "/5";
        for (let j = 0; j < comments.length; j++) {
            var htmlCode =
            `<div id="comments">
                <p id="comment">${comments[j]}</p>
            </div>`;
            document.getElementById("roomWrapper").innerHTML += htmlCode;
        }
        var buttonCode =
            `<button onclick="backToStart()" id="start" >Back to start</button>`;
            document.getElementById("roomWrapper").innerHTML += buttonCode;
    });    

}

function backToStart() {

    const db = firebase.firestore();

    db.collection("rooms").doc("Henke").delete().then(() => {
        console.log("Document successfully deleted!");
        location.href = "../create_room";
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });

}