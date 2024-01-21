var mouseX;
var mouseY;
var found = false;
document.addEventListener('DOMContentLoaded', function() {
    const room = document.getElementById("room");

    function updateClipPath(event) {
        if(!found) {
            mouseX = event.clientX;
            mouseY = event.clientY;
            console.log(`mousex:${mouseX}, mousey:${mouseY}`)
            room.style.clipPath = `circle(50px at ${mouseX}px ${mouseY}px)`;
        }
        
    }

    document.body.addEventListener('mousemove', updateClipPath);

}); 

document.addEventListener("DOMContentLoaded", function () {
    const contentDiv = document.getElementById("body");
 
    // Add click event listener to the div
    contentDiv.addEventListener("click", function () {
        
       if(mouseX > 390 && mouseX < 500 
        && mouseY > 730 && mouseY < 830) {
            document.getElementById("room").style.clipPath = "circle(10000px at 500px 500px";
            found = true;
            
            const imageroom = document.getElementById("foundmessageh");
            const roomdiv = document.getElementById("room");
            imageroom.innerHTML = "You found the knife";
            setTimeout(() => { 
                let img = document.createElement('img');
                img.src = "33good.png";
                img.style.zIndex = 10;
                img.style.width = "600px";
                img.style.height = "auto";
                document.getElementById('body').appendChild(img);
                document.getElementById('item').style.opacity = 0;
                
                
            }, 2000);

        }
    });
 });
 
//no changes