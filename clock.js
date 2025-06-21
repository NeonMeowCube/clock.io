let isFullScreen = false;

function fullscreen() {
    if (!isFullScreen) {
        document.documentElement.requestFullscreen({ navigationUI: "hide" });
        document.getElementById("FullScrButton").innerHTML = '<img src="fullscreen_exit.svg" alt="fullscreen" height="30vw" width="30vw" />';
        isFullScreen = true;
    } else {
        document.exitFullscreen();
        document.getElementById("FullScrButton").innerHTML = '<img src="fullscreen.svg" alt="fullscreen" height="30vw" width="30vw" />';
        isFullScreen = false;
    }
}
function updateClock() {
  const clockElement = document.getElementById("clock-Text");
  const now = new Date();
  const timeString = now.toLocaleTimeString('en-GB', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })

  clockElement.textContent = timeString;
}

setInterval(updateClock, 50); // Refresh ~every 50ms for smoother updates
