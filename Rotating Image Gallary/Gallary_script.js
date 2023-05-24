const containerE1 = document.querySelector('.container');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let x=0;
let timer=0

prev.addEventListener('click',()=>{
    x -= 45;
    clearTimeout(timer);
    moveContainer();
})

next.addEventListener('click',()=>{
    x += 45;
    clearTimeout(timer);
    moveContainer();
})

const moveContainer=()=>{
    containerE1.style.transform = `perspective(1000px)
                                   rotateY(${x}deg)`;

    timer = setTimeout(()=>{
        x += 45;
        moveContainer();
    } , 2000) ;
}

moveContainer();