const inputEl = document.querySelector("#birthday");
const btnEl = document.querySelector("#btn");
const resultPara = document.querySelector("#result");

const calculateAge = () => {
  const birthdayValue = inputEl.value;
  console.log(birthdayValue);

  if (birthdayValue === "") {
    resultPara.textContent = `Please enter your birthday`;
  } else {
    const age = getAge(birthdayValue);
    resultPara.textContent = `Your age is ${age.years} ${
      age.years > 1 ? "years" : "year"
    } old, ${age.months} ${age.months > 1 ? "months" : "month"} and ${
      age.days
    } ${age.days > 1 ? "days" : "day"}`;
  }
};

const getAge = (birthdayValue) => {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let years = currentDate.getFullYear() - birthdayDate.getFullYear();
  let months = currentDate.getMonth() - birthdayDate.getMonth();
  let days = currentDate.getDate() - birthdayDate.getDate();

  // If days are negative, borrow days from the previous month
  if (days < 0) {
    months--;
    // Add days from the previous month
    const prevMonth = currentDate.getMonth() - 1;
    const daysInPrevMonth = new Date(
      currentDate.getFullYear(),
      prevMonth + 1,
      0
    ).getDate();
    days += daysInPrevMonth;
  }

  if (months < 0) {
    years--;
    months += 12;
  }
  return { years, months, days };
};

btnEl.addEventListener("click", calculateAge);
