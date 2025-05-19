import { DateTime } from "luxon";
const targetDate = DateTime.fromObject(
  {
    year: 2025,
    month: 6,
    day: 4,
    hour: 21,
    minute: 50,
    second: 0,
  },
  { zone: "Asia/Ho_Chi_Minh" }
);

function updateCountdown() {
  const now = DateTime.now().setZone("Asia/Ho_Chi_Minh");
  const diff = targetDate.diff(now, ["days", "hours", "minutes", "seconds"]);

  document.getElementById("days").textContent = Math.floor(diff.days)
    .toString()
    .padStart(2, "0");
  document.getElementById("hours").textContent = Math.floor(diff.hours)
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes").textContent = Math.floor(diff.minutes)
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds").textContent = Math.floor(diff.seconds)
    .toString()
    .padStart(2, "0");

  // Add location and date information
  const locationInfo = document.getElementById("location-info");
  locationInfo.textContent = `${targetDate.toLocaleString(
    DateTime.DATETIME_FULL
  )} - Danang, Vietnam`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
