function getSeconds(seconds) {
   const data = new Date(seconds * 1000);
   return data.toLocaleTimeString('pt-br', {
      hour12: false,
      timeZone: 'UTC'
   });
}

const clock = document.querySelector('.timer');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let seconds = 0;
let timer;

function StartTimer() {
   timer = setInterval(() => {
      seconds++;
      clock.innerHTML = getSeconds(seconds);
   }, 1000);
}

function PauseTimer(timer) {
   clearInterval(timer);
}

function RestartTimer(timer) {
   clearInterval(timer);
   clock.innerHTML = '00:00:00';
   seconds = 0;
}

const start = iniciar.addEventListener('click', (e) => {
   e.preventDefault();
   StartTimer();
   clock.style.color = "#000";
});

pausar.addEventListener('click', (e) => {
   e.preventDefault();
   PauseTimer(timer);
   if (seconds > 0){
      clock.style.color = "#ff0000";
   }   
});

zerar.addEventListener('click', (e) => {
   e.preventDefault();
   RestartTimer(timer);
   clock.style.color = "#000";
});