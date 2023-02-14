function showApps() {
    if (document.getElementById("apps-div").style.display == "none") {
        document.getElementById("apps-div").style.display = "flex";
    } else {
        document.getElementById("apps-div").style.display = "none";
    }
}

function hideApps() {
    document.getElementById("apps-div").style.display = "none";
}