// Create the outer div
const customAlertBox = document.createElement("div");
customAlertBox.id = "customAlertBox";
customAlertBox.className = "custom-alert";

// Create the inner div for content
const customAlertContent = document.createElement("div");
customAlertContent.className = "custom-alert-content";

// Create the title
const alertTitle = document.createElement("h2");
alertTitle.id = "myAlertTitle";
alertTitle.innerHTML = "Custom Alert Title";

// Create the message
const alertText = document.createElement("p");
alertText.id = "myAlertText";
alertText.innerHTML = "This is a custom alert message.";

// Create a line break
const lineBreak = document.createElement("br");

// Create the OK button
const customAlertOk = document.createElement("button");
customAlertOk.id = "customAlertOk";
customAlertOk.className = "custom-alert-button";
customAlertOk.innerHTML = "Okay";

// Append elements to the inner div
customAlertContent.appendChild(alertTitle);
customAlertContent.appendChild(alertText);
customAlertContent.appendChild(lineBreak);
customAlertContent.appendChild(customAlertOk);

// Append the inner div to the outer div
customAlertBox.appendChild(customAlertContent);

// Append the outer div to the document body
document.body.appendChild(customAlertBox);

// Function to show the custom alert box
export function showCustomAlert(title, text) {
  alertTitle.textContent = title;
  if (title.includes("Error")) {
    alertTitle.style.color = "red";
  } else {
    alertTitle.style.color = "green";
  }
  alertText.textContent = text;
  customAlertBox.style.display = "flex";
}

// Function to close the custom alert box
export function closeCustomAlert() {
  customAlertBox.style.display = "none";
}

customAlertOk.addEventListener("click", closeCustomAlert);
