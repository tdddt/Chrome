const clock = document.querySelector("h2#clock");

//clock.innerText = "";

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // call getClock() immediately
// wait 1s, and keep function call every 1s
setInterval(getClock, 1000); 

//setTimeout(getClock, 1000); // wait 1s, and call function only one time