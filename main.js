window.onload = function () {
  let milliseconds = 0;
  let seconds = 0;
  let minutes = 0;

  let interval;

  const appendMilli = document.getElementById("milliseconds");
  const appendSeconds = document.getElementById("seconds");
  const appendMinutes = document.getElementById("minutes");

  const startButton = document.getElementById("start");
  const stopButton = document.getElementById("stop");
  const resetButton = document.getElementById("reset");

  startButton.onclick = () => {
    clearInterval(interval); //this line of code prevents multiple instances of setInterval running when a user spam clicks on start button
    interval = setInterval(startTimer, 10);
  };

  stopButton.onclick = () => {
    clearInterval(interval);
  }

  function startTimer() {
    milliseconds++;
    if (milliseconds <= 9) {
      appendMilli.textContent = "0" + milliseconds;
    } else if (milliseconds > 9 && milliseconds <= 99) {
      appendMilli.textContent = milliseconds;
    } else if (milliseconds > 99) {
      seconds++;
      appendSeconds.textContent = "0" + seconds;
      milliseconds = 0;
      appendMilli.textContent = "0" + 0;
    }

    if (seconds > 9 && seconds <= 59) {
      appendSeconds.textContent = seconds;
    } else if (seconds > 59) {
      minutes++;
      appendMinutes.textContent = "0" + minutes;
      seconds = 0;
      appendSeconds.textContent = "0" + 0;
    }

    if (minutes > 9) {
      appendSeconds.textContent = minutes;
    }
  }
};
