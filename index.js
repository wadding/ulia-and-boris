AOS.init();

document.addEventListener('DOMContentLoaded', function () {
 // конечная дата
 const deadline = new Date(2024, 08, 06);
 // id таймера
 let timerId = null;
 // склонение числительных
 function declensionNum(num, words) {
   return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
 }
 // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
 function countdownTimer() {
   const diff = deadline - new Date();
   if (diff <= 0) {
     clearInterval(timerId);
   }
   const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
   const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
   const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
   const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
   $days.textContent = days < 10 ? '0' + days : days;
   $hours.textContent = hours < 10 ? '0' + hours : hours;
   $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
   $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
   $days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
   $hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
   $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
   $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
 }
 // получаем элементы, содержащие компоненты даты
 const $days = document.querySelector('.timer__days');
 const $hours = document.querySelector('.timer__hours');
 const $minutes = document.querySelector('.timer__minutes');
 const $seconds = document.querySelector('.timer__seconds');
 // вызываем функцию countdownTimer
 countdownTimer();
 // вызываем функцию countdownTimer каждую секунду
 timerId = setInterval(countdownTimer, 1000);
});

const player = document.getElementById('player-audio');
player.volume = 0.5;
const btnPlay = document.getElementById('player-btn');


document.getElementById('player-btn').addEventListener('click', function() {
 if(!this.classList.contains('play-btn__play')) {
  player.play();
  this.textContent = "⏸︎";
  this.classList.add('play-btn__play');
  this.classList.add('player-btn-acticve');
 } else {
  player.pause()
  this.textContent = "⏵︎"
  this.classList.remove('play-btn__play')
  this.classList.remove('player-btn-acticve')
 }
})
// после окончания песни кнопка уходит в дефолт
player.onended = function() {
 btnPlay.textContent = "⏵︎"
 btnPlay.classList.remove('play-btn__play')
 btnPlay.classList.remove('player-btn-acticve')
}

