const confirmEl = document.getElementById("confirm");
const continueEl = document.querySelector(".continue");

const nameEl = document.getElementById("name");
const cardNumber = document.getElementById("card-number");
const year = document.getElementById("year");
const month = document.getElementById("month");
const cvc = document.getElementById("cvc");

const form = document.querySelector("form");
const thankYou = document.getElementById("thank-you-state");

confirmEl.addEventListener("click", (e) => {
  e.preventDefault();
  if (!nameEl.value) {
    nameEl.classList.add("error");
    nameEl.parentElement.classList.add("error-message");
  } else {
    nameEl.classList.remove("error");
    nameEl.parentElement.classList.remove("error-message");
  }
  if (
    nameEl.value &&
    cardNumber.value.length == 16 &&
    year.value &&
    month.value &&
    cvc.value
  ) {
    thankYou.style.display = "block";
    form.style.display = "none";
    document.getElementById("left-name").innerHTML = nameEl.value;
    document.querySelector(".year-container").innerHTML = year.value;
    document.querySelector(".month-container").innerHTML = month.value;
    document.querySelector(".cvc-container").innerHTML = cvc.value;
    document.querySelector(".card-number-div").innerHTML = format(
      cardNumber.value
    );
  }
});

continueEl.addEventListener("click", () => {
  thankYou.style.display = "none";
  form.style.display = "block";
});

// splits credit card numbers
function format(num) {
  return num.toString().replace(/\d{4}(?=.)/g, "$& ");
}
