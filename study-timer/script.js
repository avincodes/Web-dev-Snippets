var timer;
var isPaused = false;
var isReset = false;

function startTimer() {
  var presentTime = document.getElementById("timer").innerHTML;
  var timeArray = presentTime.split(":");
  var minutes = timeArray[0];
  var seconds = timeArray[1];

  if (isReset) {
    startStudy();
    isReset = false;
    return;
  }

  if (seconds == 0) {
    if (minutes == 0) {
      document.getElementById("audio").play();
      return;
    } else {
      minutes--;
      seconds = 59;
    }
  } else {
    seconds--;
  }

  document.getElementById("timer").innerHTML = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

  if (!isPaused) {
    timer = setTimeout(startTimer, 1000);
  }
}

function startBreak() {
  var presentTime = document.getElementById("timer").innerHTML;
  var timeArray = presentTime.split(":");
  var minutes = timeArray[0];
  var seconds = timeArray[1];

  if (isReset) {
    startBreakTimer();
    isReset = false;
    return;
  }

  if (seconds == 0) {
    if (minutes == 0) {
      document.getElementById("audio").play();
      return;
    } else {
      minutes--;
      seconds = 59;
    }
  } else {
    seconds--;
  }

  document.getElementById("timer").innerHTML = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

  if (!isPaused) {
    timer = setTimeout(startBreak, 1000);
  }
}

function startStudy() {
  clearTimeout(timer);
  document.getElementById("timer").innerHTML = "25:00";
  isPaused = false;
  isReset = true;
}

function startBreakTimer() {
  clearTimeout(timer);
  document.getElementById("timer").innerHTML = "5:00";
  isPaused = false;
  isReset = true;
}

function pauseResumeTimer() {
  isPaused = !isPaused;
  if (!isPaused) {
    startTimer();
  }
}

function pauseTimer() {
  isPaused = true;
}

function resetTimer() {
  isReset = true;
  startStudy();
}
