const clock = document.querySelector(".clock");
const reset = document.getElementById("reset");

let sec = 0,
  min = 0,
  hr = 0,
  intervalId;

const startStopwatch = () => {
  intervalId = setInterval(() => {
    if (sec < 59) sec++;
    else if (min >= 59) {
      hr++;
      min = 0;
    } else {
      sec = 0;
      min++;
    }

    const seconds = sec.toString().padStart(2, "0");
    const minutes = min.toString().padStart(2, "0");
    const hours = hr.toString().padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
  }, 1000);
};

const stopStopwatch = () => {
  clearInterval(intervalId);
};

reset.addEventListener('click',()=>{
  clearInterval(intervalId);
  hr = 0;
  min = 0;
  sec = 0;
  clock.innerText="00:00:00";
  click=true;
  
});