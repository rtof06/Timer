function getSeconds(seconds) {
   const data = new Date(seconds * 1000);
   return data.toLocaleTimeString('pt-br', {
      hour12: false,
      timeZone: 'UTC'
   });
}

const clock = document.querySelector('.timer');
let seconds = 0;
let timer;

function StartTimer() {
   timer = setInterval(() => {
      seconds++;
      clock.innerHTML = getSeconds(seconds);
   }, 1000);
   clock.style.color = "#000";
}

function PauseTimer(timer) {
   clearInterval(timer);
   if (seconds > 0) {
      clock.style.color = "#ff0000";
   }
}

function RestartTimer(timer) {
   clearInterval(timer);
   clock.innerHTML = '00:00:00';
   seconds = 0;
   clock.style.color = "#000";
}

document.addEventListener('click', (e) => {
   const element = e.target;
   if (element.classList.contains('iniciar')) {
      e.preventDefault();
      StartTimer();
   }

   if (element.classList.contains('pausar')) {
      e.preventDefault();
      PauseTimer(timer);
   }

   if (element.classList.contains('zerar')) {
      e.preventDefault();
      RestartTimer(timer);
   }
});