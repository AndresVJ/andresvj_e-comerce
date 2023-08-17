document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("toggle-dark-mode");
  
    darkModeToggle.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
    });
  });