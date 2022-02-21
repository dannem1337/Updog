function changeGender(button) {
    otherButton = document.getElementById("activeBtn");
    if(button.id == "inactiveBtn"){
        button.setAttribute("id", "activeBtn");
        otherButton.setAttribute("id", "inactiveBtn");
    }
}

