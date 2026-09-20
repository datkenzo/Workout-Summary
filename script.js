const form = document.querySelector("#workout-form");
const durationInput = document.querySelector("#duration");
const caloriesInput = document.querySelector("#calories");
const message = document.querySelector("#form-message");
const workoutList = document.querySelector("#workout-list");
const emptyWorkouts = document.querySelector("#empty-workouts");

function showMessage(text, type) {
  message.textContent = text;
  message.className = `form-message is-${type}`;
}

function addWorkout({ duration, calories, feeling }) {
  const workout = document.createElement("article");
  workout.className = "recent-workout";
  workout.innerHTML = `
    <div class="recent-workout-icon" aria-hidden="true">↝</div>
    <div>
      <h3 class="recent-workout-title">Rowing workout</h3>
      <p class="recent-workout-details">${duration} min · ${calories} kcal</p>
    </div>
    <span class="recent-workout-feeling">${feeling}</span>
  `;

  workoutList.prepend(workout);
  emptyWorkouts.hidden = true;
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

  addWorkout({ duration, calories, feeling: feeling.value });
  form.reset();
  showMessage("Workout saved 🎉", "success");
});
