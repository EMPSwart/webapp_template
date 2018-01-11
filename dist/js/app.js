"use strict";

document.addEventListener('DOMContentLoaded', function myStart() {
    document.getElementById("big").addEventListener("click", increase);
    document.getElementById("small").addEventListener("click", decrease);
    document.getElementById('vibrate').addEventListener("click", startVibrate);
    document.getElementById('not').addEventListener("click", notify);
});

function increase() {
    var h = document.getElementById("body");
    var style = window.getComputedStyle(h, null).getPropertyValue("font-size");
    var fontSize = parseFloat(style);
    h.style.fontSize = fontSize + 1 + 'px';
}
function decrease() {
    var h = document.getElementById("body");
    var style = window.getComputedStyle(h, null).getPropertyValue("font-size");
    var fontSize = parseFloat(style);
    h.style.fontSize = fontSize - 1 + 'px';
}
//function startVibrate() {
//    window.navigator.vibrate(1000);
//}
var startVibrate = function startVibrate() {
    window.navigator.vibrate(1000);
};

function notify() {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
    }

    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
            // If it's okay let's create a notification
            var notification = new Notification("Hallow :3!");
        }

        // Otherwise, we need to ask the user for permission
        else if (Notification.permission !== "denied") {
                Notification.requestPermission(function (permission) {
                    // If the user accepts, let's create a notification
                    if (permission === "granted") {
                        var notification = new Notification("Hey hey!");
                    }
                });
            }
}
//# sourceMappingURL=app.js.map
