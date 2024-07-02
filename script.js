// Display current time in UTC
const currentTimeElem = document.getElementById("currentTime");
const currentDayElem = document.getElementById("currentDay");

document.addEventListener("DOMContentLoaded", () => {

  function updateTime() {
    const now = new Date();
    const utcString = now.toUTCString();
    currentTimeElem.textContent = utcString.slice(17, 25); // Extract time part

    const dayOfWeek = now.toLocaleString("en-US", { weekday: "long" });
    currentDayElem.textContent = dayOfWeek;
  }

  updateTime();
  setInterval(updateTime, 1000); // Update time every second
});


