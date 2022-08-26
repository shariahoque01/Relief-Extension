const startingMinutes = min; //Min being some variable from the user input, to determine minute
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown'); //countdown will be replace by whatever the field user id is.

setInterval(updateCountdown, 1000);

function updateCountdown(){
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < min ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes} : ${seconds}`;
    
    time !== 0 ? time-- : time; //Makes sure it doesn't got negative

}