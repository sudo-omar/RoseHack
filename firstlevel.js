document.addEventListener('DOMContentLoaded', function() {
    const room = document.getElementById("room");

    function updateClipPath(event) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        room.style.clipPath = `circle(50px at ${mouseX}px ${mouseY}px)`;
    }

    document.body.addEventListener('mousemove', updateClipPath);

});