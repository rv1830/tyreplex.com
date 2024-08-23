// Set the target date (e.g., 60 days from now)
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 11);

function updateTimer() {
  const now = new Date();
  const timeDifference = targetDate - now;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days + " :";
  document.getElementById("hours").textContent = hours + " :";
  document.getElementById("minutes").textContent = minutes + " :";
  document.getElementById("seconds").textContent = seconds;

  // Check if the countdown is over
  if (timeDifference < 0) {
    clearInterval(timerInterval);
    document.getElementById("timer").innerHTML = "<h1>Time's up!</h1>";
  }
}

// Update the timer every second
const timerInterval = setInterval(updateTimer, 1000);
