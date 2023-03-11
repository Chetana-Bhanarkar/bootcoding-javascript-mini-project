    let btn = document.querySelector("#btn");
    let redElement = document.querySelector("#red");
// const move = () => {
//     let poe = 0 //position of element
//     let anime = setInterval()


//     function animate(){
//         poe++;
//         redElement.style
//     }
// }
btn.addEventListener("click",()=>{
    let poe = 0;
    let anime = setInterval(animate,8);
    
    function animate(){
        if(poe == 400){
            clearInterval(anime);
        }else{
            poe++;
            redElement.style.top = poe+"px";
            redElement.style.left = poe+"px";
        }
    }
})

