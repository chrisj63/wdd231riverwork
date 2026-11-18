
const form = document.querySelector("#ticketform");
const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const emailInput = document.querySelector("#email");
const dateInput = document.querySelector("#availableDate");
const commentInput = document.querySelector("#comment");
const output = document.querySelector("#output");

// Ensure they choose a date later than the current date
function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "fail";

  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const email = emailInput.value.trim();
  const availableDate = dateInput.value;
  const comment = commentInput.value.trim();

  // Let the user know if they choose an invalid past date
  if (isPastDate(availableDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }

  // Display the successful form submission output
  output.innerHTML = `
      <h2>Contact Us input received</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Event Date:</strong> ${availableDate}</p>
      <p><strong>Comments/Questions:</strong> ${comment || "None provided"}</p>
    `;

  form.reset();
});