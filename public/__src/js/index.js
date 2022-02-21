function setProperty(propertyName, value) {
    document.documentElement.style.setProperty(propertyName, value);
}

function resize() {
    setProperty("--fullHeight", window.innerHeight.toString()+"px");
}

window.onload = () => {
    getAuth().onAuthStateChanged(user => {
        if (user == null) {
            location.href = 'login.html';
        }
    })};

window.addEventListener("resize", resize);