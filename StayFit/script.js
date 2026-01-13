// Handles the contact form submission without sending data anywhere.
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("goal-form");
  const success = document.getElementById("success");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Thanks! Your goals have been recorded.");
    if (success) {
      success.style.display = "block";
    }
    form.reset();
  });
});
