function changeImage() { 
    var image = document.getElementById("urmom"); 
    if (image.src.match("images/avatar.jpg")) { 
        image.src = "images/cat.png"; 
        image.style.width = "120px";
        image.style.height = "120px";
    } 

    else { 
        image.src = "images/avatar.jpg";  
    } 
}

document.addEventListener('DOMContentLoaded', function() { 
    let backgroundHeader = document.querySelector("#header"); 
    let changeBackgroundButton = document.querySelector("#poop"); 
    let button = document.querySelectorAll(".button");
    changeBackgroundButton.addEventListener('click', function() {
        if (backgroundHeader.style.backgroundImage.includes("images/bg.jpg")) {
            backgroundHeader.style.backgroundImage = "url('images/city.jpg')"; 
            button.forEach(button => {
                button.style.backgroundColor = "white"; 
            });
        } else {
            backgroundHeader.style.backgroundImage = "url('images/bg.jpg')";
            button.forEach(button => {
                button.style.backgroundColor = "transparent"; 
            });

        }
    });
});

