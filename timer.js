const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

const start = document.getElementById('start');
const reset = document.getElementById('reset');

const disp = document.getElementById('disp');
const audio = new Audio("wednesday.mp3");

var startTimer = null;

start.addEventListener('click', function(){
    if(startTimer === null && (hour.value > 0 || minute.value > 0 || second.value > 0)){
        startTimer = setInterval(function() {
            timer();
        }, 1000);
        hour.disabled = true;
        minute.disabled = true;
        second.disabled = true;
    }
});



reset.addEventListener('click',()=>{
        clearInterval(startTimer);
        startTimer = null;
        hour.value = 0;
        minute.value = 0;
        second.value = 0;
    
        disp.innerText="Timer ";
        audio.pause();
});

function timer(){
    if(hour.value == 0 && minute.value == 0 && second.value == 0){
        hour.value = 0;
        minute.value = 0;
        second.value = 0;
        stopInterval();
        audio.play();
    } else if(second.value != 0){
        second.value--;
    } else if(minute.value != 0 && second.value == 0){
        second.value = 59;
        minute.value--;
    } else if(hour.value != 0 && minute.value == 0){
        minute.value = 60;
        hour.value--;
    }
}
function stopInterval() {
    clearInterval(startTimer);
    startTimer = null;
    hour.disabled = false;
    minute.disabled = false;
    second.disabled = false;
}




// var interval = null;
// var total = 0;



// totalValue = () =>{
//     total = Number(hour.value)*3600 + Number(minute.value)*60 + Number(second.value)
    
// }
// Timer = () =>{

//     totalValue();
//     total--;

//     if(total >= 0)
//     {
//         var hr = Math.floor(total/3600);
//         var mt = Math.floor((total/60) - (hr*60));
//         var sc= total - ((hr*3600)+(mt*60));

//         hour.value = hr;
//         minute.value = mt;
//         second.value = sc;
        
//     }
    
//     else{
//         disp.innerText = "Time's Up !!";
        

//       // If the count down is finished, play audio file
//       if (disp.innerText="Time's Up !!") {
//         clearInterval(interval);
//         audio.play()
//       }
    
        
//       }
// } 




// start.addEventListener('click',()=>{
//     if(interval === null && (hour.value > 0 || minute.value >0 || second.ariaValueNow))
//     clearInterval(interval);
//     interval = setInterval(Timer,1000);

//     disp.innerText = "Timer Started..";
//     hour.disabled = true;
//     minute.disabled = true;
//     second.disabled = true;
// });

// reset.addEventListener('click',()=>{
//     clearInterval(interval);

//     hour.value = 0;
//     minute.value = 0;
//     second.value = 0;

//     disp.innerText="Timer ";
//     audio.pause();
    
// });