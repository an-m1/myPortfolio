document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navList = document.querySelector(".nav-list");
  const scrollDown = document.getElementById("scroll-down");
  const nextSection = document.getElementById("next-section");

// NAVBAR HAMBURGER

  hamburger.addEventListener("click", () => {
    navList.classList.toggle("open");
  });

  scrollDown.addEventListener("click", () => {
    nextSection.scrollIntoView({ behavior: "smooth" });
  });
});

// CONNECTIONS TAB POPUP

// Function to show the popup
function showPopup() {
  document.getElementById("popup").style.display = "block";
}

// Function to hide the popup
function hidePopup() {
  document.getElementById("popup").style.display = "none";
}

// Add click event listeners to social buttons
document.querySelectorAll(".social-button").forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default action of opening the link
    showPopup(); // Show the popup

    // Open the social media link in a new tab
    const url = this.getAttribute("href");
    setTimeout(() => {
      window.open(url, "_blank");
    }, 5); // Delay to allow the popup to be seen before opening the link
  });
});

// Add event listener to close the popup
document.querySelector(".popup-close-btn").addEventListener("click", hidePopup);
document.querySelector(".ok-btn").addEventListener("click", hidePopup);
