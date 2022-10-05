const timerCount = document.querySelector(".timer span");
const startBtn = document.querySelector(".start-btn");
const stopBtn = document.querySelector(".stop-btn");
const resetBtn = document.querySelector(".reset-btn");

let miliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let int = 1;

startBtn.addEventListener("click", () => {
  if ((int === 1)) {
    int = setInterval(() => {
      timer();
    }, 10);
  }
  console.log(typeof int)
});

stopBtn.addEventListener("click", () => {
  clearInterval(int);
  int = 1
});

resetBtn.addEventListener("click", () => {
  clearInterval(int);
  int = 1
  timerCount.innerText = "00:00:00:000";
});

function timer() {
  miliseconds++;
  // if value is smaller than 1 .floor set it to 0
  seconds = Math.floor(miliseconds / 100);
  minutes = Math.floor(seconds / 10);
  hours = Math.floor(minutes / 60);
  // after matching the % the value will set to 1
  let ms = miliseconds % 100;
  let s = seconds % 60;
  let m = minutes % 60;

  let h = hours < 10 ? "0" + hours : hours;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  ms = ms < 100 ? "0" + ms : ms;
  timerCount.innerText = `${h}:${m}:${s}:${ms}`;
}

// let a = 2
// function Modulo() {
//         a++
//         console.log(a)
//         console.log(a % 10)
// }
