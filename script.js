const form = document.querySelector("#workout-form");
const durationInput = document.querySelector("#duration");
const caloriesInput = document.querySelector("#calories");
const message = document.querySelector("#form-message");

function showMessage(text, type) {
  message.textContent = text;
  message.className = `form-message is-${type}`;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const duration = Number(durationInput.value);
  const calories = Number(caloriesInput.value);
  const feeling = form.querySelector('input[name="feeling"]:checked');

  if (!durationInput.value || duration <= 0) {
    showMessage("Add a workout duration greater than 0 minutes.", "error");
    durationInput.focus();
    return;
  }

  if (!caloriesInput.value || calories <= 0) {
    showMessage("Add calories burned greater than 0 to continue.", "error");
    caloriesInput.focus();
    return;
  }

  if (!feeling) {
    showMessage("Choose how the workout felt before saving.", "error");
    return;
  }

  form.reset();
  showMessage("Workout saved 🎉", "success");
});
