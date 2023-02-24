const panels = document.querySelectorAll(".panel");

//function to add class
panels.forEach(panel=>{
    panel.addEventListener("click",()=>{
        remove();    //call remove function   
        panel.classList.add('active');
    });
});


//function to remove class
function remove(){
    panels.forEach(panel=>{
        panel.classList.remove('active');
    });
};


