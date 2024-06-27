const month = Math.floor(Math.random() * 12) + 1;
console.log("Месяц:", month);

const year = Math.floor(Math.random() * 25) + 2000;
console.log("Год:", year);

let season;
if (month >= 3 && month <= 5) {
  season = "весна";
} else if (month >= 6 && month <= 8) {
  season = "лето";
} else if (month >= 9 && month <= 11) {
  season = "осень";
} else {
  season = "зима";
}
console.log("Пора года:", season);

const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
if (isLeapYear) {
  console.log(year + " - високосный год");
} else {
  console.log(year + " - не високосный год");
}
