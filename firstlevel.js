document.addEventListener('DOMContentLoaded', function() {
    const room = document.getElementById("room");

    function updateClipPath(event) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        room.style.clipPath = `circle(50px at ${mouseX}px ${mouseY}px)`;
    }

    document.body.addEventListener('mousemove', updateClipPath);

}); 

document.addEventListener("DOMContentLoaded", function () {
    const contentDiv = document.getElementById("body");
 
    // Add click event listener to the div
    contentDiv.addEventListener("click", function () {
       alert("Div clicked!");
    });
 });
 
//no changes