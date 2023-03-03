const days = document.getElementById("days").addEventListener("click", getNbDays);


function getNbDays() {
    let currDate = new Date();
    let otherDate = new Date("7/19/2023");
    let diffDate = Math.floor((otherDate - currDate)/(1000*3600*24));
    
    let day = document.getElementById("days");
    day.innerHTML = day.innerHTML.replace("xxx", diffDate);
    if(diffDate == 1) {
        day.innerHTML = day.innerHTML.replace("days", "day");
    }
}




function updateClock1() {
    let date = new Date().toTimeString().split(' ')[0];
    let clock = document.getElementById("clock");
    clock.innerHTML = date;
}


function setGraphicClock() {
    let date = new Date().toTimeString().split(' ')[0]
    let clock = document.getElementById("clock");
    let listClock = [];

    clock.innerHTML = null;

    
    for(var i = 0; i < date.length; i++) {
        let inti = parseInt(date[i]);
        let img = document.createElement("img");

        if(inti >= 0 && inti <= 9) {
            img.src = "assets/images/" + inti + ".gif";
            listClock.push(img);
            
        }
        else if (date[i] = ':') {
            img.src = "assets/images/minus.gif";
            listClock.push(img);
        }
    }
    listClock.forEach(function(value) {
        clock.appendChild(value);
    })
}


setInterval(setGraphicClock, 1000);


setTimeout(function updateClock2() {
    let date = new Date().toTimeString().split(' ')[0];
    let clock = document.getElementById("clock");
    clock.innerHTML = date;
}, 5000);

