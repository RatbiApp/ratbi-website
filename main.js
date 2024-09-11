document.addEventListener("DOMContentLoaded", () => {
  // Create an IntersectionObserver to handle visibility
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (
        entry.isIntersecting &&
        !entry.target.classList.contains("animated")
      ) {
        // Add the animation class and mark the element as animated
        entry.target.classList.add("in-view", "animated");
      }
    });
  });

  // Select all elements with the class '.animate'
  const allAnimatedElements = document.querySelectorAll(".animate");

  // Observe each element
  allAnimatedElements.forEach((element) => observer.observe(element));
});

document.getElementById("burger").addEventListener("click", function () {
  const dropdown = document.getElementById("dropdown");
  const burgerIcon = document.querySelector(".burger-icon");
  const closeIcon = document.querySelector(".close-icon");

  // Toggle dropdown menu visibility
  dropdown.classList.toggle("active");

  // Toggle burger and close icon visibility
  if (dropdown.classList.contains("active")) {
    burgerIcon.style.display = "none"; // Hide burger icon
    closeIcon.style.display = "block"; // Show close icon
  } else {
    burgerIcon.style.display = "block"; // Show burger icon
    closeIcon.style.display = "none"; // Hide close icon
  }
});

document.querySelectorAll("a.scroll").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default anchor click behavior
    const targetId = this.getAttribute("href"); // Get the href attribute (target ID)
    const targetElement = document.querySelector(targetId); // Find the target element

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the target element
    }
  });
});
