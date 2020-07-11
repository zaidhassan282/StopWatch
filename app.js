var hrs = 0;
var min = 0;
var sec = 0;
var milisec = 0;

var hrsget = document.getElementById("hrs");
var minget = document.getElementById("min");
var secget = document.getElementById("sec");
var milisecget = document.getElementById("milisec");

var interval;

function timer() {
    milisec++;
    milisecget.innerHTML = milisec;
    if (milisec >= 100) {
        sec++;
        secget.innerHTML = sec;
        milisec = 0;
    }
    else if (sec >= 60) {
        min++;
        minget.innerHTML = min;
        sec = 0;
    }
    else if (min >= 60) {
        hrs++;
        hrsget.innerHTML = hrs;
        min = 0;
    }
}
function start() {
    interval = setInterval(timer, 10)
    document.getElementById("submitbtn").disabled = true;
}
function pause() {
    clearInterval(interval);
}
function reset() {
    hrs = 0;
    min = 0;
    sec = 0;
    milisec = 0;
    hrsget.innerHTML = hrs;
    minget.innerHTML = min;
    secget.innerHTML = sec;
    milisecget.innerHTML = milisec;
    pause();
    document.getElementById("submitbtn").disabled = false;

}
function save(){
  var sav = document.getElementById("getsave");
    sav(document.write(hrs + " " + min + " " + sec + " " + milisec));
}