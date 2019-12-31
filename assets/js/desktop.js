$(document).ready(function() {
    $(".desktop-events").dblclick(openEvents);
    $(".times").mousedown(closeEvents);
});

function openEvents() {
    console.log("events");
    $(".desktop-events > .desktop-icon").attr("src", "assets/image/folder.png");
    $(".folder").css("display", "block");
}

function closeEvents() {
    console.log("events");
    $(".desktop-events > .desktop-icon").attr("src", "assets/image/folder in folder.png");
    $(".folder").css("display", "none");
}