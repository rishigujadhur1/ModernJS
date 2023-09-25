let userInput = document.querySelector("#date");
let result = document.querySelector("#result");
userInput.max = new Date().toISOString().split("T")[0];

function calculateAge() {
  let birthDate = new Date(userInput.value);
  let inputDate = birthDate.getDate();
  let inputMonth = birthDate.getMonth() + 1;
  let inputYear = birthDate.getFullYear();

  let today = new Date();
  let currentDate = today.getDate();
  let currentMonth = today.getMonth() + 1;
  let currentYear = today.getFullYear();

  let calculatedDate, calculatedMonth, calculatedYear;
  calculatedYear = currentYear - inputYear;
  if (currentDate >= inputMonth) {
    calculatedMonth = currentMonth - inputMonth;
  } else {
    calculatedYear--;
    calculatedMonth = 12 + currentMonth - inputMonth;
  }

  if (currentDate >= inputDate) {
    calculatedDate = currentDate - inputDate;
  } else {
    calculatedMonth--;
    calculatedDate =
      getDaysInMonth(inputYear, inputMonth) + currentDate - inputDate;
  }
  if (calculatedMonth < 0) {
    calculatedMonth = 11;
    calculatedYear--;
  }
  result.innerHTML = `You are ${calculatedYear} years, ${calculatedMonth} months and ${calculatedDate} days old`;
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
