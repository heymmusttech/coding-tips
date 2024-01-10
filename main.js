var buttonWrapper = document.querySelector(".alert-button"),
  alertWrapper = document.querySelector(".custom-alert");

buttonWrapper.addEventListener("click", handleToggleAlert);

function handleToggleAlert() {
  // Check if the button has the 'active' class
  if (alertWrapper.classList.contains("active")) {
    // Remove the 'active' class
    alertWrapper.classList.remove("active");
    console.log("Button is now inactive");
  } else {
    // Add the 'active' class
    alertWrapper.classList.add("active");
    console.log("Button is now active");
  }
}
