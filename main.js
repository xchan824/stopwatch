window.onload = function () {
  let milliseconds = 0;
  let seconds = 0;
  let minutes = 0;

  let interval = 0;

  const appendMilli = document.getElementById("milliseconds");
  const appendSeconds = document.getElementById("seconds");
  const appendMinutes = document.getElementById("minutes");

  const startButton = document.getElementById("start");
  const stopButton = document.getElementById("stop");
  const resetButton = document.getElementById("reset");

  startButton.onclick = () => {
    // clearInterval(interval);
    interval = setInterval(startTimer, 10);
  };

  function startTimer() {
    milliseconds++;
    if (milliseconds <= 9) {
      appendMilli.textContent = "0" + milliseconds;
    } else if (milliseconds > 9) {
      appendMilli.textContent = milliseconds;
    }
  }
};
