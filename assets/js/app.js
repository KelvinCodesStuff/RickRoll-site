var modal = document.getElementById("modal");
var button = document.getElementById("button");
var video = document.getElementById("video");

function onPageLoad() {
    modal.style.display = "block";
}

window.onload = onPageLoad;

button.onclick = function() {
    modal.style.display = "none";
    video.play();
}


