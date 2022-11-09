const panels = document.querySelectorAll(".panel");

panels.forEach(panel=>{
    panel.addEventListener("click",()=>{
        remove();
        panel.classList.add('active');
    });
});

function remove(){
    panels.forEach(panel=>{
        panel.classList.remove('active');
    });
};


