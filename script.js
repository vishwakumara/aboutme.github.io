document.addEventListener("DOMContentLoaded", function () {
  const modeToggleButton = document.getElementById("modeToggleButton");
  const stylesheet = document.getElementById("stylesheet");
  let isDarkMode = localStorage.getItem("isDarkMode") === "true";

  // Function to set dark mode
  function setDarkMode() {
    stylesheet.href = "dark-mode.css"; // Switch to dark mode stylesheet
    modeToggleButton.textContent = "🌞"; // Change icon to sun
    localStorage.setItem("isDarkMode", "true"); // Save dark mode state
    isDarkMode = true;
  }

  // Function to set light mode
  function setLightMode() {
    stylesheet.href = "Style.css"; // Switch to light mode stylesheet
    modeToggleButton.textContent = "🌙"; // Change icon to moon
    localStorage.setItem("isDarkMode", "false"); // Save light mode state
    isDarkMode = false;
  }

  // Toggle dark/light mode based on localStorage
  if (isDarkMode) {
    setDarkMode();
  } else {
    setLightMode();
  }

  // Toggle dark/light mode when the modeToggleButton is clicked
  modeToggleButton.addEventListener("click", function () {
    if (isDarkMode) {
      setLightMode();
    } else {
      setDarkMode();
    }
  });
});
