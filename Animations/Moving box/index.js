let btn = document.querySelector("#btn");
let redElement = document.querySelector("#red");
let blueElement = document.querySelector("#blue");
let yellowElement = document.querySelector("#yellow");
let greyElement = document.querySelector("#grey");

btn.addEventListener("click", () => {
    let poe = 0; //position of element
    let anime = setInterval(animate, 15);
    let anim = setInterval(animee, 15);

    function animate() {
        if (poe == 400) {
            clearInterval(anime);
        } else {
            poe++;
            redElement.style.top = poe + "px";
            redElement.style.left = poe + "px";
            blueElement.style.top = poe + "px";
            blueElement.style.right = poe + "px";
            
        }
    }

    function animee() {
        if (poe == 400) {
            
        } else {
           
            
        }
    }
    
})





