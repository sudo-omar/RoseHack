const room = document.getElementById("room");
function updateClipPath(event) {
    mouseX = event.clientX
    mouseY = event.clientY
    let radius = room.style.clipPath.substring(7, room.style.clipPath.indexOf("p"));
    console.log( `circle(${radius}px at ${mouseX}px ${mouseY}px`)

    room.style.clipPath = `circle(${radius}px at ${mouseX}px ${mouseY}px`;
}

