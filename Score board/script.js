let team_A = prompt("Please enter team A name !");
let team_B = prompt("Please enter team B name !");



if(team_A && team_B != null){
    document.querySelector('.name1').innerHTML = team_A;
    document.querySelector('.name2').innerHTML = team_B;
}


let teamOne = document.querySelector(".team1");
let teamTwo = document.querySelector(".team2")
let winning = document.querySelector(".winning");
let winLine = document.querySelector('.win-line');



let changeCount=document.getElementById("home-btn");
let guestCountChange=document.getElementById("guest-btn");

//home status

let homeCountE1 = 0;

function homeIncrement(homeValue){
    homeCountE1 += homeValue;
    changeCount.textContent = homeCountE1
}

// guest status

let guestCountE1 = 0;

function guestIncrement(guestValue){
    guestCountE1 += guestValue;
    guestCountChange.textContent = guestCountE1
}

// start game

function clearPoints(){
    homeCountE1 = 0;
    guestCountE1 = 0;
    changeCount.textContent = homeCountE1;
    guestCountChange.textContent = guestCountE1;
    winLine.innerHTML = " "
    teamOne.style.backgroundColor = "black";
    teamTwo.style.backgroundColor = "black";
location.reload()
    
}

function endGame(){
    if(homeCountE1 > guestCountE1){
        teamOne.style.backgroundColor = "green";
        winning.innerHTML = team_A;
        winLine.style.display = "block";
    }
    else if(homeCountE1 < guestCountE1){
        teamTwo.style.backgroundColor = "green";
        winning.innerHTML = team_B
        winLine.style.display = "block";
    }
    else if(homeCountE1 == guestCountE1){
        teamOne.style.backgroundColor = "grey";
        teamTwo.style.backgroundColor = "grey";
        winLine.innerHTML = "Match Draw";
        winLine.style.display = "block";
    }
}



