import { DateTime } from 'luxon';

const targetDate = DateTime.fromObject({
  year: 2025,
  month: 5,
  day: 9,
  hour: 13,
  minute: 0,
  second: 0
}, { zone: 'America/New_York' });

function updateCountdown() {
  const now = DateTime.now().setZone('America/New_York');
  const diff = targetDate.diff(now, ['days', 'hours', 'minutes', 'seconds']);
  
  document.getElementById('days').textContent = Math.floor(diff.days).toString().padStart(2, '0');
  document.getElementById('hours').textContent = Math.floor(diff.hours).toString().padStart(2, '0');
  document.getElementById('minutes').textContent = Math.floor(diff.minutes).toString().padStart(2, '0');
  document.getElementById('seconds').textContent = Math.floor(diff.seconds).toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();
