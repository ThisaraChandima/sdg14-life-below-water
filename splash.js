/* ============================================================================
   Splash Screen — splash.js
   Handles: the visible JavaScript countdown ("Entering site in 4…3…2…1")
   and the Skip Intro button, which sends the user to the Home Page
   immediately instead of waiting for the <meta http-equiv="refresh"> tag.
   ============================================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const HOME_PAGE = "index.html"; // keep in sync with the <meta refresh> target
  const countdownEl = document.getElementById("countdown");
  const skipBtn = document.getElementById("skipBtn");

  let secondsLeft = 4;
  countdownEl.textContent = `Entering site in ${secondsLeft}…`;

  const timer = setInterval(() => {
    secondsLeft -= 1;

    if (secondsLeft > 0) {
      countdownEl.textContent = `Entering site in ${secondsLeft}…`;
    } else {
      countdownEl.textContent = "Diving in…";
      clearInterval(timer);
    }
  }, 1000);

  // Skip Intro: go straight to the Home Page and stop the countdown text
  // from continuing to update in the background.
  skipBtn.addEventListener("click", () => {
    clearInterval(timer);
    window.location.href = HOME_PAGE;
  });
});
