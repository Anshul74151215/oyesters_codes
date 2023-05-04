function convertToMilitaryTime(time) {
  const [rawHour, rowMinute, rawSecond, AMorPM] =
    time.split(/:|(?<=\d)(?=[AP]M)/);
  let hour = parseInt(rawHour);
  let second = parseInt(rawSecond);
  let minute = parseInt(rowMinute);
  if (AMorPM === "PM" && hour !== 12) {
    hour += 12;
  } else if (AMorPM === "AM" && hour === 12) {
    hour = 0;
  }
  second += 45;
  if (second >= 60) {
    second -= 60;
    minute++;
  }
  minute += 45;
  if (minute >= 60) {
    minute -= 60;
    hour++;
  }
  if (hour >= 24) {
    hour -= 24;
  }
  const militaryHour = hour.toString().padStart(2, "0");
  const militaryMinute = minute.toString().padStart(2, "0");
  const militarySecond = second.toString().padStart(2, "0");
  return `${militaryHour}:${militaryMinute}:${militarySecond}`;
}
var input = prompt();
console.log(convertToMilitaryTime(input));
