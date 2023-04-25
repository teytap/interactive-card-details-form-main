const confirmEl = document.getElementById("confirm");
const nameEl = document.getElementById("name");
const cardNumber = document.getElementById("card-number");
const form = document.querySelector("form");
const thankYou = document.getElementById("thank-you-state");

confirmEl.addEventListener("click", () => {
  thankYou.style.display = "block";
  form.style.display = "none";
});
nameEl.addEventListener("change", () => {
  document.getElementById("left-name").innerHTML = nameEl.value;
});
